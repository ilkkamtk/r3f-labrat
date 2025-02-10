import { ThreeElements } from '@react-three/fiber';
import useTextures from '../hooks/TextureHooks';

const Ground = (props: ThreeElements['mesh']) => {
  const { stoneTexture } = useTextures();
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} {...props}>
      <planeGeometry args={[1, 1, 100, 100]} />
      <meshStandardMaterial {...stoneTexture} displacementScale={0.08} />
    </mesh>
  );
};

export default Ground;
