import { ThreeElements } from '@react-three/fiber';
import useTextures from '../hooks/TextureHooks';

const Box = (props: ThreeElements['mesh']) => {
  const { metalTexture } = useTextures();
  return (
    <mesh {...props}>
      {/* <boxGeometry args={[1, 1, 1]} /> */}
      <meshStandardMaterial {...metalTexture} metalness={0.5} roughness={0.4} />
    </mesh>
  );
};

export default Box;
