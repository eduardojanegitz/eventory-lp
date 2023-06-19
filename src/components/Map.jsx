/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 Map.glb --transform
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('./Map-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes['Node-Mesh'].geometry} material={materials.lambert5SG} />
      <mesh geometry={nodes['Node-Mesh_1'].geometry} material={materials.lambert6SG} />
    </group>
  )
}

useGLTF.preload('/Map-transformed.glb')
