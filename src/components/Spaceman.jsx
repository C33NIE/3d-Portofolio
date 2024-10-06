import { useAnimations, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import spacemanScene from "../assets/3d/plane.glb";
import CanvasLoader from "./Loader";

const Spaceman = ({ scale, position, rotation }) => {
  const spacemanRef = useRef();
  const { scene, animations } = useGLTF(spacemanScene);
  const { actions } = useAnimations(animations, spacemanRef);

  useEffect(() => {
    actions["Take 001"].play();
  }, [actions]);

  return (
    <mesh ref={spacemanRef} position={position} scale={scale} rotation={rotation}>
      <primitive object={scene} />
    </mesh>
  );
};

const SpacemanCanvas = ({ scrollContainer }) => {
  const [rotationX, setRotationX] = useState(0);
  const [rotationY, setRotationY] = useState(0);
  const [scale, setScale] = useState([3, 3, 3]);
  const [position, setPosition] = useState([-5, 0, 0]); // Start from the left

  // Animation state for the plane's movement
  const speed = 0.02; // Speed of the plane movement

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = scrollContainer.current.scrollTop;
      const rotationXValue = scrollTop * -0.0006;
      const rotationYValue = scrollTop * -0.00075;
      setRotationX(rotationXValue);
      setRotationY(rotationYValue);
    };

    const handleResize = () => {
      if (window.innerWidth < 768) {
        setScale([1, 1, 1]);
        setPosition([-2, 0, 0]); // Adjust for mobile
      } else if (window.innerWidth < 1024) {
        setScale([1.33, 1.33, 1.33]);
        setPosition([-3, 0, 0]); // Adjust for tablet
      } else {
        setScale([2, 2, 2]);
        setPosition([-5, 0, 0]); // Adjust for desktop
      }
    };

    handleResize();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    // Move the plane continuously from left to right
    const animate = () => {
      setPosition((prevPosition) => {
        if (prevPosition[0] > 5) {
          return [-5, 0, 0]; // Reset position to the left side
        }
        return [prevPosition[0] + speed, prevPosition[1], prevPosition[2]];
      });
      requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [scrollContainer]);

  return (
    <Canvas className={`w-full h-screen bg-transparent z-20`} camera={{ near: 0.1, far: 1000 }}>
      <Suspense fallback={<CanvasLoader />}>
        <directionalLight position={[1, 1, 1]} intensity={2} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 5, 10]} intensity={2} />
        <spotLight position={[0, 50, 10]} angle={0.15} penumbra={1} intensity={2} />
        <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1} />

        {/* Adjust the rotation to face right */}
        <Spaceman rotation={[0, Math.PI / 2, 0]} scale={scale} position={position} />
      </Suspense>
    </Canvas>
  );
};

export default SpacemanCanvas;
