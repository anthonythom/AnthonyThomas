import React, { Suspense } from "react";
import styled from "styled-components";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
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
  width: 1400px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Title = styled.h1`
  
  font-size: 3rem;
    text-transform: uppercase;
    
   
    color: #111;
    font-weight: 800;
    
    font-family: sans-serif;
  
    font-family: 'Source Sans Pro',sans-serif;

  @media only screen and (max-width: 768px) {
    font-size: 60px;
  }
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
  color: #000000;
`;

const Button = styled.button`
  background-color: #0bb0de;
  color: white;
  font-weight: 500;
  width: 120px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Who = () => {
  return (
    <Section id="who" className="header_link">
      <Container>
        <Left>
          <Canvas camera={{ position: [5, 5, 5], fov: 25 }}>
            <Suspense fallback={null}>
              <ambientLight intensity={0.7} />
              <directionalLight position={[3, 2, 1]} />
              <Cube />
            
              <OrbitControls enableZoom={true} autoRotate />
            </Suspense>
          </Canvas>
        </Left>
        <Right>
          <Title>Pense fora da caixa.</Title>
          <WhatWeDo>
            <Line src="./img/line.png" />
            <Subtitle></Subtitle>
          </WhatWeDo>
          <Desc>
            Sou curioso por diversas ferramentas de programação, meus conhecimentos atuais são correspondentes aos dois bootcamps que participei.

            Me motivo a crescer a cada oportunidade para colecionar cada vez mais experiências.
          </Desc>
          <a href="./CV_AnthonyThomas.pdf" download>
          <Button>
            Baixar CV
          </Button></a>
        </Right>
      </Container>
    </Section>
  );
};

export default Who;