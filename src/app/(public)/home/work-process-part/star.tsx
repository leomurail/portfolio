"use client";

// npm
import { useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import { Group, Mesh, MeshPhysicalMaterial, Color } from "three";
import { MotionValue } from "motion";
import { useGLTF } from "@react-three/drei";

interface props {
  scrollYProgress: MotionValue<number>;
}

export default function Star({ scrollYProgress }: props) {
  const { scene } = useGLTF("/glb/star.glb");
  const starRef = useRef<Group>(null);

  // Création d'un matériau cristal violet personnalisé
  const crystalMaterial = useMemo(() => {
    return new MeshPhysicalMaterial({
      color: new Color("#a855f7"), // Violet vibrant
      metalness: 0.1,
      roughness: 0.05,
      transmission: 1, // Transparence physique
      thickness: 2, // Épaisseur du verre
      ior: 1.5, // Indice de réfraction
      iridescence: 1,
      iridescenceIOR: 1.3,
      sheen: 1,
      sheenColor: new Color("#d8b4fe"),
      transparent: true,
      opacity: 1,
    });
  }, []);

  // Appliquer le matériau à tous les meshes du modèle
  useMemo(() => {
    scene.traverse((child) => {
      if (child instanceof Mesh) {
        child.material = crystalMaterial;
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
  }, [scene, crystalMaterial]);

  useFrame(() => {
    if (starRef.current) {
      // Rotation simple sur un seul axe (Y) basée sur le scroll
      const rotation = scrollYProgress.get() * Math.PI * 4;
      starRef.current.rotation.y = rotation;
      
      // On retire la rotation Z et le flottement excessif pour rester stable
      starRef.current.rotation.z = 0;
      starRef.current.position.y = 0;
    }
  });

  return (
    <group ref={starRef} scale={[1.6, 1.6, 1.6]} position={[2.0, 0, 0]}>
      <primitive object={scene} />
    </group>
  );
}







