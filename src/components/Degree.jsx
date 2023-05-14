import React, { Suspense } from "react";
import styled from "styled-components";


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
  color:  #e1e1e6;
background-color:  #121214;
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

const Button = styled.button`
 
 height: 50px;
    cursor: pointer;
    font-size: 14px;
    font-weight: 700;
    line-height: 19px;
    text-align: center;
    border: 1px;
    border-style: solid;
    border-radius: 5px;
    border-color:#6231cd ;
    color:  #e1e1e6;
    background: var(--background);
    text-transform: uppercase;
    transition: all .3s ease;


  @media (min-width: 320px){
    padding: 12px 24px;
    justify-content: center;
}

  
    :hover {
    color: white;
    background-color: #6231cd  ;
    box-shadow: rgb(100 100 111 / 50%) 0 7px 29px 0;
  }

`;

const Degree = () => {
  return (
    <Section id="degree" className="header_link">
      <Container>
      
        <Right>
          <Title>Formação</Title>
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



          <a href="./CV_AnthonyThomas.pdf" download>
            <Button>
              Baixar CV
            </Button></a>
        </Right>
      </Container>
    </Section>
  );
};

export default Degree;