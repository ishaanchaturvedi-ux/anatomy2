'use client';

import React, { useEffect, useState, Suspense, PropsWithChildren } from 'react';
import { useAnatomyStore } from '../../store/useAnatomyStore';
import { MODEL_CONFIG } from '../../config/anatomyConfig';
import { ProceduralAnatomyModel } from './ProceduralAnatomyModel';
import { GlbMeshModel } from './GlbMeshModel';

interface ErrorBoundaryProps {
  fallback: React.ReactNode;
  onError?: () => void;
}

class ErrorBoundaryFallback extends React.Component<
  PropsWithChildren<ErrorBoundaryProps>,
  { hasError: boolean }
> {
  constructor(props: PropsWithChildren<ErrorBoundaryProps>) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error) {
    if (process.env.NODE_ENV === 'development') {
      console.warn('[AnatomyModelProvider] GLB model failed to load, using visualization fallback model:', error);
    }
    this.props.onError?.();
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

export const AnatomyModelProvider: React.FC = () => {
  const selectedModel = useAnatomyStore((s) => s.selectedModel);
  const setAssetStatus = useAnatomyStore((s) => s.setAssetStatus);
  const [hasGlbFile, setHasGlbFile] = useState<boolean>(false);
  const [isValidMuscleGlb, setIsValidMuscleGlb] = useState<boolean | null>(null);

  const glbPath = MODEL_CONFIG[selectedModel]?.glbPath || '/models/male-anatomy.glb';

  useEffect(() => {
    fetch(glbPath, { method: 'HEAD' })
      .then((res) => {
        if (res.ok) {
          setHasGlbFile(true);
        } else {
          setHasGlbFile(false);
          setAssetStatus({
            loaded: false,
            fallback: true,
            assetType: 'missing',
            validated: true,
          });
        }
      })
      .catch(() => {
        setHasGlbFile(false);
        setAssetStatus({
          loaded: false,
          fallback: true,
          assetType: 'missing',
          validated: true,
        });
      });
  }, [glbPath, setAssetStatus]);

  if (hasGlbFile && isValidMuscleGlb !== false) {
    return (
      <ErrorBoundaryFallback
        fallback={<ProceduralAnatomyModel />}
        onError={() =>
          setAssetStatus({
            loaded: false,
            fallback: true,
            assetType: 'missing',
            validated: true,
          })
        }
      >
        <Suspense fallback={<ProceduralAnatomyModel />}>
          <GlbMeshModel
            glbPath={glbPath}
            onValidationComplete={(isMuscleAsset) => {
              setIsValidMuscleGlb(isMuscleAsset);
            }}
          />
        </Suspense>
      </ErrorBoundaryFallback>
    );
  }

  return <ProceduralAnatomyModel />;
};
