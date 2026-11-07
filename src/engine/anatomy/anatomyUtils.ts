import * as THREE from 'three';

export interface BoundingBoxFocusInfo {
  center: [number, number, number];
  size: [number, number, number];
  recommendedDistance: number;
}

/**
 * Calculates the bounding box and focus camera position for a target mesh or group of meshes.
 */
export function calculateMeshFocusTarget(object: THREE.Object3D): BoundingBoxFocusInfo {
  const box = new THREE.Box3().setFromObject(object);
  const center = new THREE.Vector3();
  const size = new THREE.Vector3();

  box.getCenter(center);
  box.getSize(size);

  const maxDim = Math.max(size.x, size.y, size.z);
  const fov = 40;
  let cameraDistance = maxDim / (2 * Math.tan((Math.PI * fov) / 360));
  cameraDistance *= 1.5; // Padding multiplier

  return {
    center: [center.x, center.y, center.z],
    size: [size.x, size.y, size.z],
    recommendedDistance: Math.max(cameraDistance, 1.2),
  };
}
