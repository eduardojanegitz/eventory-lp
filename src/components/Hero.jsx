import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import { Canvas } from "@react-three/fiber";
import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";
import TypeWriter from "typewriter-effect";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    height: 200vh;
  }
`;

const Container = styled.div`
  height: 100%;
  scroll-snap-align: center;
  width: 1100px;
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 768px) {
    flex: 1;
    align-items: center;
    margin-bottom: -250px;
  }
`;

const Title = styled.h1`
  font-size: 74px;

  @media only screen and (max-width: 768px) {
    text-align: center;
    font-size: 55px;
  }
`;

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Line = styled.img`
  height: 5px;
`;

const Subtitle = styled.h2`
  color: #0073cf;
`;

const Desc = styled.p`
  font-size: 24px;

  @media only screen and (max-width: 768px) {
    padding: 20px;
    text-align: center;
  }
`;

const Button = styled.button`
  background-color: #0073cf;
  color: #fff;
  font-weight: 500;
  width: 100px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  height: 35px;
`;

const Right = styled.div`
  flex: 3;
  position: relative;

  @media only screen and (max-width: 768px) {
    flex: 1;
    width: 100%;
  }
`;

const Img = styled.img`
  width: 600px;
  height: 450px;
  object-fit: contain;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;

  @keyframes animate {
    to {
      transform: translateY(20px);
    }
  }

  @media only screen and (max-width: 768px) {
    width: 300px;
    margin-top: -20px;
  }
`;

const Hero = () => {
  return (
    <Section>
      <Navbar />
      <Container>
        <Left>
          <Title>
            {""}
            <TypeWriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Pense.")
                  .pauseFor(1200)
                  .deleteAll()
                  .typeString("Analise.")
                  .pauseFor(1200)
                  .deleteAll()
                  .typeString("Decida.")
                  .pauseFor(1200)
                  .deleteAll()
                  .typeString("EVENTORY.")
                  .start();
              }}
            />
          </Title>
          <WhatWeDo>
            <Line src="./img/line.png" />
            <Subtitle>Controle Patrimonial</Subtitle>
          </WhatWeDo>
          <Desc>
            Controle os ativos de sua empresa de forma simplificada e otimizada.
          </Desc>
          {/* <Button>Veja mais</Button> */}
        </Left>
        <Right>
          <Canvas>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={1} />
            <directionalLight position={[3, 2, 1]} />
            {/* <Sphere args={[1, 100, 200]} scale={2.4}>
              <MeshDistortMaterial
                color="#3d1c56"
                attach="material"
                distort={0.5}
                speed={2}
              />
            </Sphere> */}
          </Canvas>
          <Img src="./img/dashboard.svg" />
        </Right>
      </Container>
    </Section>
  );
};

export default Hero;
