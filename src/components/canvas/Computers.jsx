import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import Loader from '../Loader';

const Computers = ({ isMobile }) => {
  const computer = useGLTF('./rhetorician/scene.gltf');

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight 
        position={[-2, -3.7, -2]} 
        angle={1} 
        castShadow 
        shadow-mapSize={1024} 
      />
      <primitive 
        object={computer.scene} 
        scale={isMobile ? 0.75 :2 } 
        position={ isMobile? [2,-4.5,-0.4] :[-5, -5, -7]} 
        rotation={[0, 1, 0]} 
      />
    </mesh>
  );
};

const ComputerCanvas = () => {
  const [isMobile, setMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 750px)');

    const handleMediaQueryChange = (event) => {
      setMobile(event.matches);
    };

    setMobile(mediaQuery.matches); // Initial check
    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

  // Log isMobile state for debugging
  useEffect(() => {
    console.log('Is mobile:', isMobile);
  }, [isMobile]);

  return (
    <Canvas 
      shadows 
      camera={{ position: [30, -4.7, -2], fov: 25 }} 
      gl={{ preserveDrawingBuffer: true }} 
    >
      <Suspense fallback={<Loader />}>
        <OrbitControls 
          enableZoom={false} 
          enableRotate={true} 
          maxPolarAngle={Math.PI / 2} 
          minPolarAngle={Math.PI / 2} 
        />
        <Computers isMobile={isMobile} />
      </Suspense>  
      <Preload all />
    </Canvas>
  );
};

export default ComputerCanvas;
