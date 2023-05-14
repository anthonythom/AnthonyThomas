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
  
  font-size: 5rem;
    text-transform: uppercase;
    
   

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
 color: #ad93e5;
  font-weight: 800;
  font-family: sans-serif;
  
  font-family: 'Source Sans Pro',sans-serif;
`;

const Desc = styled.div`
  font-size: 24px;
 

 display: flex;
  align-items: center;

 justify-content: space-around;

list-style: none;

font-family: sans-serif;
  
  font-family: 'Source Sans Pro',sans-serif;
`;



const Who = () => {
  return (
    <Section id="who" className="header_link">
      <Container>
        <Left>
          <Canvas camera={{ position: [5, 5, 5], fov: 25 }}>
            <Suspense fallback={null}>
              <ambientLight intensity={0.5} />
              <directionalLight position={[3, 2, 1]} />
              <Cube />

              <OrbitControls enableZoom={true} autoRotate />
            </Suspense>
          </Canvas>
        </Left>
        <Right>
          <Title>Qualificações</Title>
          <WhatWeDo>
            <Line src="./img/line.png" />
            <Subtitle>Hard Skills</Subtitle>
          </WhatWeDo>
          <Desc>
            <div>
              <li> React.js  </li>
              <li>Next.js </li>
              <li>Three.js </li>
              <li>JavaScript   </li>
            </div>

            <div>
              <li> React.js  </li>
              <li>Next.js </li>
              <li>Three.js </li>
              <li>JavaScript   </li>
            </div>
            <div>
              <li> React.js  </li>
              <li>Next.js </li>
              <li>Three.js </li>
              <li>JavaScript   </li>
            </div>
            <div>
              <li> React.js  </li>
              <li>Next.js </li>
              <li>Three.js </li>
              <li>JavaScript   </li>
            </div>



          </Desc>


          <WhatWeDo>
            <Line src="./img/line.png" />
            <Subtitle>Soft Skills</Subtitle>
          </WhatWeDo>
          <Desc>
            <div>
              <li> Trabalho em equipe  </li>
              <li>Next.js </li>
              <li>Three.js </li>
              <li>JavaScript   </li>
            </div>

            <div>
              <li> React.js  </li>
              <li>Next.js </li>
              <li>Three.js </li>
              <li>JavaScript   </li>
            </div>
            <div>
              <li> React.js  </li>
              <li>Next.js </li>
              <li>Three.js </li>
              <li>JavaScript   </li>
            </div>
            <div>
              <li> React.js  </li>
              <li>Next.js </li>
              <li>Three.js </li>
              <li>JavaScript   </li>
            </div>


          </Desc>



          <WhatWeDo>
            <Line src="./img/line.png" />
            <Subtitle>Idiomas</Subtitle>
          </WhatWeDo>
          <Desc> <li><b>Português</b> / Nativo <br /></li>
            <li><b>Inglês</b> / Intermediario <br /></li>



          </Desc>



        
        </Right>
      </Container>
    </Section>
  );
};

export default Who;