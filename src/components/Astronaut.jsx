import React, { useEffect, useRef, useState } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useMotionValue, useSpring } from "motion/react";
import { useFrame } from "@react-three/fiber";

export function Astronaut(props) {
  const group = useRef();
  const { nodes, materials, animations, scene } = useGLTF(
    "/models/tenhun_falling_spaceman_fanart.glb"
  );
  const { actions } = useAnimations(animations, group);
  const [isLoaded, setIsLoaded] = useState(false);

  // Ensure scene is fully loaded before playing animations or rendering
  useEffect(() => {
    if (
      scene &&
      materials["AstronautFallingTexture.png"] &&
      nodes?.Cube001_0?.geometry &&
      animations.length > 0
    ) {
      setIsLoaded(true);
      actions[animations[0].name]?.play();
    }
  }, [scene, nodes, materials, actions, animations]);

  const yPosition = useMotionValue(5);
  const ySpring = useSpring(yPosition, { damping: 30 });

  useEffect(() => {
    ySpring.set(-1);
  }, [ySpring]);

  useFrame(() => {
    if (group.current) {
      group.current.position.y = ySpring.get();
    }
  });

  if (!isLoaded) return null; // Don't render until fully ready

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      rotation={[-Math.PI / 2, -0.2, 2.2]}
      scale={props.scale || 0.3}
      position={props.position || [1.3, -1, 0]}
    >
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model">
          <group name="Root">
            <group name="metarig">
              <primitive object={nodes.metarig_rootJoint} />
              {Object.keys(nodes).map((key) => {
                const node = nodes[key];
                if (node.isSkinnedMesh) {
                  return (
                    <skinnedMesh
                      key={key}
                      name={node.name}
                      geometry={node.geometry}
                      material={materials["AstronautFallingTexture.png"]}
                      skeleton={node.skeleton}
                    />
                  );
                }
                return null;
              })}
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

// Preload model early to improve loading reliability
useGLTF.preload("/models/tenhun_falling_spaceman_fanart.glb");

