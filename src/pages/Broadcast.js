import React, { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import "./Broadcast.css";

const Broadcast = () => {
  const Model = (props) => {
    // const { scene } = useGLTF("/mb_a45_amg_2018/scene.gltf");

    const { scene } = useGLTF("/mclaren_mp4-12c/scene.gltf");

    return <primitive object={scene} />;
  };

  return (
    <>
      <Canvas
        pixelRatio={[1, 2]}
        // camera={{ position: [5, 5, 2], fov: 7 }}
        camera={{ position: [25, 5, 5] }}
        frameloop="demand"
      >
        <ambientLight intensity={0.8} />
        <directionalLight intensity={0.8} />
        <Suspense fallback={null}>
          <Model />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </>
  );
};

export default Broadcast;
