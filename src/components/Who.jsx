import React, { Suspense } from "react";
import styled from "styled-components";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Cube from "./Cube";

const Section = styled.div`
  height: 100vh;

  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  height: 100vh;

  width: 1400px;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 768px) {
    width: 50vw;
    align-items: center;
    justify-content: center;
    margin: auto;
  }
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
  margin-left: 35.5%;

  font-weight: 800;

  font-family: "Source Sans Pro", sans-serif;

  @media only screen and (max-width: 768px) {
    font-size: 40px;
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
    font-size: 15px;
  }
`;

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Line = styled.img``;

const Subtitle = styled.h1`
  font-weight: 800;
  margin-bottom: 55px;

  flex: 1;
  transition: transform 0.1s;
  background: rgba(255, 255, 255, 0.35);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(13.5px);
  -webkit-backdrop-filter: blur(13.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  padding: 20px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;

  position: relative;
  display: block;
  transition: 0.1s;

  ::after {
    position: absolute;
    content: "_";
    width: 100%;
    height: 100%;
    top: 100%;
    left: 0;
    transition: transform 0.1s;
    transform: scaleX(5);
    transform-origin: left;
  }

  :hover {
    color: #e5de93;
    transition: transform 0.1s;
    background: rgba(0, 0, 0, 0.35);
    box-shadow: 0 8px 32px 0 rgba(17, 17, 17, 0.37);
    backdrop-filter: blur(4.5px);
    -webkit-backdrop-filter: blur(13.5px);
    border-radius: 10px;
    border: 1px solid rgba(16, 16, 16, 0.35);
  }
  :hover::after {
    transform: scaleX(26);
    transform-origin: left;
  }

  :before {
    content: "";
    display: block;
    width: 4px;
    height: 20px;
    background: linear-gradient(#e5de93, #ddcb0a);
    position: absolute;
    left: -2px;

    @media only screen and (max-width: 768px) {
    }
  }
`;

const Desc = styled.div`
  font-size: 24px;

  display: flex;
  align-items: center;

  justify-content: space-around;

  list-style: none;

  font-family: sans-serif;

  font-family: "Source Sans Pro", sans-serif;
  @media only screen and (max-width: 768px) {
    font-size: 15px;
  }
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
              <li>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                  width={30}
                />
                <strong>HTML</strong>{" "}
              </li>
              <li>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                  width={30}
                />
                <strong>CSS</strong>{" "}
              </li>
              <li>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg"
                  width={30}
                />
                <strong>JavaScript</strong>{" "}
              </li>
              <li>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
                  width={30}
                />
                <strong>Bootstrap</strong>{" "}
              </li>
            </div>

            <div>
              <li>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                  width={30}
                />
                <strong>React.js</strong>{" "}
              </li>
              <li>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
                  width={30}
                />
                <strong>Java</strong>
              </li>
              <li>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg"
                  width={30}
                />
                Three.js{" "}
              </li>
              <li>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
                  width={30}
                />
                Tailwind CSS{" "}
              </li>
            </div>

            <div>
              <li>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
                  width={30}
                />
                MySQL{" "}
              </li>
              <li>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
                  width={30}
                />
                MongoDB{" "}
              </li>
              {/* <li>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" width={30} />
           Flutter </li> */}
              {/* <li> 
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" width={30}  />
          Java  </li> */}
            </div>
            <div>
              <li>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg"
                  width={30}
                />
                jQuery{" "}
              </li>
              <li>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
                  width={30}
                />
                Express{" "}
              </li>
              <li>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                  width={30}
                />
                Node.js{" "}
              </li>
            </div>
          </Desc>

          <WhatWeDo>
            <Subtitle>Soft Skills</Subtitle>
          </WhatWeDo>
          <Desc>
            <div>
              <li> Inteligência Emocional </li>
              <li> Vontade de aprender </li>
              <li> </li>
              <li> </li>
            </div>

            <div>
              <li> Resiliência</li>
              <li> Proatividade </li>
              <li> </li>
              <li> </li>
            </div>

            <div>
              <li> Kanban </li>
              <li> Scrum </li>
              <li> </li>
              <li> </li>
            </div>

            <div>
              <li> </li>
              <li> </li>
              <li> </li>
              <li> </li>
            </div>
          </Desc>
        </Right>
      </Container>
    </Section>
  );
};

export default Who;
