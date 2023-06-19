import React from "react";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Cube from "./Cube";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1100px;
  display: flex;
  justify-content: center;
`;

const Left = styled.div`
  flex: 1;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Title = styled.h1`
  font-size: 50px;

  @media only screen and (max-width: 768px) {
    font-size: 35px;
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
    font-size: 18px;
  }
`;

const Button = styled.button`
  background-color: #0073cf;
  color: #fff;
  font-weight: 500;
  width: 150px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  height: 35px;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;

const Who = () => {
  return (
    <Section>
      <Container>
        <Left>
          <Canvas camera={{ fov: 25, position: [5, 5, 5] }}>
            <OrbitControls enableZoom={false} autoRotate />
            <ambientLight intensity={1} />
            <directionalLight position={[3, 2, 1]} />
            <Cube />
          </Canvas>
        </Left>
        <Right>
          <Title>Quem nós somos.</Title>
          <WhatWeDo>
            <Line src="./img/line.png" />
            <Subtitle>Negócio</Subtitle>
          </WhatWeDo>
          <Desc>
            Soluções em software para a excelência na gestão e conformidade
            empresarial.
          </Desc>
          <WhatWeDo>
            <Line src="./img/line.png" />
            <Subtitle>Missão</Subtitle>
          </WhatWeDo>
          <Desc>
            Inovação em software para excelência e conformidade, impulsionando
            competitividade e sustentabilidade empresarial.
          </Desc>
          <WhatWeDo>
            <Line src="./img/line.png" />
            <Subtitle>Visão</Subtitle>
          </WhatWeDo>
          <Desc>
            Liderança global em excelência empresarial e conformidade,
            promovendo integridade e qualidade.
          </Desc>
          {/* <Button>Veja nosso trabalho</Button> */}
        </Right>
      </Container>
    </Section>
  );
};

export default Who;
