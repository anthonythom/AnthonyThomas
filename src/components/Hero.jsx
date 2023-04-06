import React, { Suspense } from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";

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
  width: 1400px;
  display: flex;
  justify-content: space-between;
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
  }
`;

const Title = styled.h1`
@import url('https://fonts.googleapis.com/css2?family=Oi&display=swap');




font-size: 5rem;
    text-transform: uppercase;
    letter-spacing: 3px;
    text-align: center;
    color: #111;
    font-weight: 800;
    
    font-family: sans-serif;
  
    font-family: 'Source Sans Pro',sans-serif;


  @media only screen and (max-width: 768px) {
   
    
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
  color: #0bb0de;
  text-align: justify;
`;

const Desc = styled.p`
  font-size: 24px;
  color: #000000;

font-family: 'Playfair Display SC', serif;
  @media only screen and (max-width: 768px) {
    padding: 20px;
    text-align: center;
  }
`;

const Button = styled.button`
  background-color:#0bb0de;
  color: white;
  font-weight: 500;
  width: 100px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
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
  width: 800px;
  height: 600px;

  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;
  @media only screen and (max-width: 768px) {
    width: 300px;
    height: 300px;
  }
  @keyframes animate {
    to {
      transform: translateY(30px);
    }
  }
`;

const Hero = () => {
  return (
    <Section>
      <Navbar />
      <Container>
        <Left>
          <Title>Olá, eu sou o Anthony Thomas!</Title>
          <WhatWeDo>
            <Line src="./img/line.png" />
            <Subtitle>Desenvolvedor FullStack</Subtitle>
          </WhatWeDo>
          <Desc>
          Desenvolvedor Full Stack Júnior apaixonado por interfaces interativas.
           Os projetos incluem criação e consumo de APIs, Javascript, Node.js, React, consultas a bancos de dados e muito mais.
          </Desc>
          <Button>Saber mais</Button>
        </Left>
        <Right>
          <Canvas>
            <Suspense fallback={null}>
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={0.20} />
              <directionalLight position={[6, 4, 5]} />
              <Sphere args={[0.9, 100, 100]} scale={2.2}>
                <MeshDistortMaterial
                  color="#0bb0de"
                  attach="material"
                  distort={0.5}
                  speed={2.5}
                />
              </Sphere>
            </Suspense>
          </Canvas>
          {/* <Img src="./img/rick-and-morty-rick-unscreen.gif"/ > */}
        </Right>
      </Container>
    </Section>
  );
};

export default Hero;