'use client';

import React, { useEffect, useState, Suspense, PropsWithChildren } from 'react';
import { useAnatomyStore } from '../../store/useAnatomyStore';
import { MODEL_CONFIG } from '../../config/anatomyConfig';
import { ProceduralAnatomyModel } from '../../components/3d/ProceduralAnatomyModel';
import { GlbMeshModel } from '../../components/3d/GlbMeshModel';

interface ErrorBoundaryProps {
  fallback: React.ReactNode;
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
      console.warn('[AnatomyModelProvider] Asset load issue, using visualization model fallback:', error);
    }
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
  const [isMuscleGlbValidated, setIsMuscleGlbValidated] = useState<boolean | null>(null);

  const glbPath = MODEL_CONFIG[selectedModel]?.glbPath || '/models/male-anatomy.glb';

  useEffect(() => {
    let isMounted = true;
    fetch(glbPath, { method: 'HEAD' })
      .then((res) => {
        if (!isMounted) return;
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
        if (!isMounted) return;
        setHasGlbFile(false);
        setAssetStatus({
          loaded: false,
          fallback: true,
          assetType: 'missing',
          validated: true,
        });
      });

    return () => {
      isMounted = false;
    };
  }, [glbPath, setAssetStatus]);

  if (hasGlbFile && isMuscleGlbValidated !== false) {
    return (
      <ErrorBoundaryFallback fallback={<ProceduralAnatomyModel />}>
        <Suspense fallback={<ProceduralAnatomyModel />}>
          <GlbMeshModel
            glbPath={glbPath}
            onValidationComplete={(isMuscleAsset) => {
              setIsMuscleGlbValidated(isMuscleAsset);
            }}
          />
        </Suspense>
      </ErrorBoundaryFallback>
    );
  }

  return <ProceduralAnatomyModel />;
};
