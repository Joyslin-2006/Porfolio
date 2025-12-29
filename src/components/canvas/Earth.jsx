import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Earth = () => {
  const earth = useGLTF("./planet/scene.gltf");
  return <primitive object={earth.scene} scale={2.5} />;
};

const EarthCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    setIsMobile(mq.matches);

    const handler = (e) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);

    return () => mq.removeEventListener("change", handler);
  }, []);

  // 🚫 Disable Earth 3D on mobile
  if (isMobile) return null;

  return (
    <Canvas
      shadows
      frameloop="demand"
      dpr={[1, 1.5]}          // lighter
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
      style={{ width: "100%", height: "100%", minHeight: "100svh" }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default EarthCanvas;
