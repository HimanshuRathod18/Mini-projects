import * as THREE from "three";
const HeroLights = () => {
  return (
    <>
      <spotLight
        position={[2, 5, 0]}
        intensity={100}
        angle={0.15}
        color="white"
        penumbra={0.2}
      />
      <spotLight
        position={[4, 5, 0]}
        intensity={80}
        angle={0.3}
        color="#4cc9f0"
        penumbra={0.5}
      />
      <spotLight
        position={[10, 8, 8]}
        intensity={100}
        angle={0.4}
        color="#9d43dd"
        penumbra={1}
      />
      <primitive
        object={new THREE.RectAreaLight("#A259FF", 8, 3, 2)}
        position={[1, 3, 1]}
        intensity={15}
        rotation={[-Math.PI / 4, Math.PI / 4, 0]}
      />
      <pointLight position={[0, 1, 0]} intensity={50} color="#0d00a4" />
    </>
  );
};

export default HeroLights;
