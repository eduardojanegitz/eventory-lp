import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";

const Section = styled.div`
    height: 100vh;
    scroll-snap-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;

const Container = styled.div`
    height: 100vh;
    scroll-snap-align: center;
    width: 920px;
    display: flex;
    justify-content: center;
`;

const Left = styled.div`
   flex: 2;
   display: flex;
   flex-direction: column;
   justify-content: center;
   gap: 20px;
`;

const Title = styled.h1`
   font-size: 74px;
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
   color: #da4ea2;
`;

const Desc = styled.p`
   font-size: 24px;
`;

const Button = styled.button`
   background-color: #da4ea2;
   color: #FFF;
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
`;

const Img = styled.img`
    width: 850px;
    height: 500px;
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
            transform: translateY(20px)
        }
    }
`;

const Hero = () => {
    return (
        <Section>
            <Navbar />
            <Container>
                <Left>
                    <Title>Pense. Faça. Solucione.</Title>
                    <WhatWeDo>
                        <Line src="./img/line.png" />
                        <Subtitle>O que nós fazemos.</Subtitle>
                    </WhatWeDo>
                    <Desc>Nós adoramos criar experiências digitais humanas.</Desc>
                    <Button>Veja mais</Button>
                </Left>
                <Right>
                    <Img src="./img/moon.png" />
                </Right>
            </Container>
        </Section>
    )
}

export default Hero;