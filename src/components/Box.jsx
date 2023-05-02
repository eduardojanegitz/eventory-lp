import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, RenderTexture, Text } from '@react-three/drei';
import Cube from './Cube';
import styled from 'styled-components';

const Container = styled.div`
    height: 100vh;
    width: 100%;
    scroll-snap-align: center;
`

const Box = () => {
    return (
        <Container>
            <Canvas>
                <OrbitControls enableZoom={false} />
                <ambientLight intensity={1} />
                <directionalLight position={[3, 2, 1]} />
                <Cube />
            </Canvas>
        </Container>
    )
}

export default Box