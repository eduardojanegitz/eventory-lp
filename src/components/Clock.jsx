/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 Clock.glb --transform
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/Clock-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes['Analog_clock_Circle001-Mesh'].geometry} material={materials.FFFFFF} />
      <mesh geometry={nodes['Analog_clock_Circle001-Mesh_1'].geometry} material={materials['795548']} />
      <mesh geometry={nodes['Analog_clock_Circle001-Mesh_2'].geometry} material={materials['1A1A1A']} />
    </group>
  )
}

useGLTF.preload('/Clock-transformed.glb')
