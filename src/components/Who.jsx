import React, { Suspense } from "react";
import styled from "styled-components";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Cube from "./Cube";

const Section = styled.div`
margin-top: 10rem;
  height: 100vh;
  /* scroll-snap-align: center; */
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  height: 100vh;
  /* scroll-snap-align: center; */
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


`;

const Subtitle = styled.h1`

  font-weight: 800;


  flex: 1;
  background: #000000;
  padding: 20px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;

position: relative;
display: block;
transition: 1.5s;

::after{
 
 position: absolute;
 content: "_";
 width: 100%;
 height: 100%;
 top: 100%;
 left: 0;
 transition: transform 1.5s;
 transform: scaleX(1);
 transform-origin: left;
}

:hover{
 color: #6231cd;
 transition: width 0.6s cubic-bezier(0.25, 1, 0.5, 1) 0s;
}
:hover::after{
  transform: scaleX(15);
  transform-origin: left;
  cursor: pointer;
 
}

 
  
  margin-bottom: 25px;
  position: relative;

  :before {
  content: "";
  display: block;
  width: 4px;
  height: 20px;
  background: linear-gradient(#b6f829, #67dd0a);
  position: absolute;
  left: -2px;
}
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
            
            <Subtitle>Hard Skills</Subtitle>
          </WhatWeDo>
          <Desc>
         
            <div>
              <li> <strong>HTML</strong> </li>
              <li> <strong>CSS</strong> </li>
              <li> <strong>JavaScript</strong> </li>
              <li> <strong>Bootstrap</strong> </li>
            </div>

            <div>
              <li> <strong>React.js</strong>  </li>
              <li>Next.js </li>
              <li>Three.js </li>
              <li> Tailwind CSS </li>
            </div>


            <div>
              <li> MySQL </li>
              <li> MongoDB </li>
              <li> Power BI </li>
              <li>JavaScript   </li>
            </div>
            <div>
              <li> REST APIs </li>
              <li> jQuery </li>
              <li> Express </li>
              <li> Node.js  </li>
            </div>



          </Desc>


          <WhatWeDo>
           
            <Subtitle>Soft Skills</Subtitle>
          </WhatWeDo>
          <Desc>
            <div>
              <li> Inteligência Emocional  </li>
              <li> Vontade de aprender </li>
              <li>  </li>
              <li>  </li>
            </div>

          
            <div>
              <li> Resiliência</li>
              <li> Proatividade </li>
              <li>  </li>
              <li>  </li>
            </div>

            <div>
              <li> Kanban </li>
              <li> Scrum </li>
              <li>  </li>
              <li>  </li>
            </div>

            <div>
              <li>   </li>
              <li>   </li>
              <li>   </li>
              <li>   </li>
            </div>


          </Desc>



       


        
        </Right>
      </Container>
    </Section>
  );
};

export default Who;