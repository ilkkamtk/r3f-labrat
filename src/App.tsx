import { Canvas } from '@react-three/fiber';

import './App.css';
import Box from './components/Box';
import Ground from './components/Ground';
import { PointerLockControls, Stats } from '@react-three/drei';

const App = () => {
  return (
    <section className="three-canvas">
      <Canvas>
        <PointerLockControls />
        <Stats />
        <ambientLight />
        <pointLight position={[1, 1, 1]} decay={5} />
        <Box rotation={[0, 1, 0]} position={[-1, 0, 0]} scale={[4, 4, 4]} />
        {Array.from({ length: 100 }).map((_, index) =>
          Array.from({ length: 100 }).map((_, jindex) => (
            <Ground position={[index + 1, -2, jindex + 1]} />
          )),
        )}
      </Canvas>
    </section>
  );
};

export default App;
