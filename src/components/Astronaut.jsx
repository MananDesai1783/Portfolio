// Astronaut.jsx
import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export function Astronaut(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    "/models/tenhun_falling_spaceman_fanart.glb"
  );
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    if (animations.length > 0) {
      const action = actions[animations[0].name];
      if (action) {
        action.play();
      } else {
        console.warn("Animation action not found");
      }
    } else {
      console.warn("No animations found");
    }
  }, [actions, animations]);

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
              <skinnedMesh
                name="Mesh_Body"
                geometry={nodes.Mesh_Body.geometry}
                material={materials.Material}
                skeleton={nodes.Mesh_Body.skeleton}
              />
              <skinnedMesh
                name="Mesh_Cloth"
                geometry={nodes.Mesh_Cloth.geometry}
                material={materials.ClothMaterial}
                skeleton={nodes.Mesh_Cloth.skeleton}
              />
              <skinnedMesh
                name="Mesh_Visor"
                geometry={nodes.Mesh_Visor.geometry}
                material={materials.VisorMaterial}
                skeleton={nodes.Mesh_Visor.skeleton}
              />
              {/* Add more skinnedMeshes here if your model has them */}
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

export function AstronautWrapper(props) {
  const gltf = useGLTF("/models/tenhun_falling_spaceman_fanart.glb");
  if (!gltf) return null; // Wait until model is loaded
  return <Astronaut {...props} />;
}

useGLTF.preload("/models/tenhun_falling_spaceman_fanart.glb");
