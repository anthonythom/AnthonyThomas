import React, { useState } from "react";
import styled from "styled-components";



const Section = styled.div`
  height: 150vh;

  display: flex;
position: relative;
align-items: baseline;

`;

const Container = styled.div`
  width: 100%;
 
  display: flex;

  flex-wrap: wrap;
  
  @media only screen and (max-width: 768px) {
    width: 100%;
  
  }
`;

const Title = styled.h1`
margin-left: 5vh;
margin-top: 10   vh;
font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 100px;
 color: #0bb0de;

  
  @media only screen and (max-width: 768px) {
    font-size: 15px;
  }
`;

const Div1 = styled.div`
display: flex;
align-items: center;

margin-bottom: 5vh;

`;
const Div = styled.div`


display: flex;
align-items: center;

margin-bottom: 5vh;




`;

const WhatWeDo = styled.div`

margin-top: 3vh;
margin-left: 3vh;
margin-right: 5vh;
  display: flex; 

justify-content: space-around;
flex-direction:column;
  align-items: center;
 


  border-radius: 20px;
  
  box-shadow: rgb(100 100 111 / 20%) 0 7px 29px 0;
    background: #fff;
`;
const Left = styled.div`



 `
const Image = styled.img`

border-radius: 20px;
  height: 200px;

`;

const Subtitle = styled.h2`
  color: #0bb0de;
`;

const Desc = styled.p`
margin-top: 20px;
margin-bottom: 20px;
display: flex;
  font-size: 24px;
  color: #26bed8;
 text-align: center;

`;

const Button = styled.button`
  background-color: #0bb0de;
  color: white;
  font-weight: 500;
  width: 60px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const DivB = styled.div`

display: flex;
justify-content: space-around;
background-color: #c11212;
margin-right: 20px;





`;
const Works = () => {
  return (
    <Section>
      <Container>

        <Title>PORTFOLIO</Title>

        <Div1>



          <div className="1">
            <WhatWeDo>
              <Image src="./img/project1.png" />


              <Subtitle>Zumbilandia</Subtitle>
              <Desc>
                feito em 2022
              </Desc>

              <DivB>

                <div>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" width={20} />
                  <a href="public/CV_AnthonyThomas.pdf" >
                    <Button>



                      Codigo
                    </Button>
                  </a>
                </div>

                <div>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" width={20} />
                  <a href="public/CV_AnthonyThomas.pdf" >
                    <Button>
                      Live
                    </Button>
                  </a>
                </div>
              </DivB>

            </WhatWeDo>


          </div>

          <div className="2">
            <WhatWeDo>
              <Image src="./img/projeto 2.png" />
              <Subtitle>Game of Spin-Off</Subtitle>
              <Desc>
                feito em 2022


              </Desc>

              <div>
                <a href="https://github.com/hugolegramandi/SpinOff_GoT">
                  <Button>
                    Code
                  </Button>
                </a>
                <a href="public/CV_AnthonyThomas.pdf" download>
                  <Button>
                    Live
                  </Button>
                </a>
              </div>
            </WhatWeDo>
          </div>

          <div className="3">
            <WhatWeDo>
              <Image src="public/img/projeto 3.png" />
              <Subtitle>Astronomy Picture of The Day</Subtitle>
              <Desc>
                feito em 2022
              </Desc>

              <div className="btn">
                <a href="https://github.com/anthonythom/projeto-APOD">
                  <Button>
                    Code
                  </Button>
                </a>
                <a href="https://anthonythom.github.io/projeto-APOD/">
                  <Button>
                    Live
                  </Button>
                </a>
              </div>
            </WhatWeDo>
          </div>

          <div className="4">
            <WhatWeDo>
              <Image src="public\img\projeto 4.png" />
              <Subtitle>FrontEnders</Subtitle>
              <Desc>
                feito em 2022
              </Desc>

              <div>
                <a href="public/CV_AnthonyThomas.pdf" download>
                  <Button>
                    Code
                  </Button>
                </a>
                <a href="public/CV_AnthonyThomas.pdf" download>
                  <Button>
                    Live
                  </Button>
                </a>
              </div>
            </WhatWeDo>
          </div>

        </Div1>




        <Div>



          <div className="5">

            <WhatWeDo>
              <Image src="public\img\tatuaria.png" />
              <Subtitle>Tatuaria</Subtitle>
              <Desc>
                A proposta deste projeto é: Um CRUD completo com intregração de front e back end. Nesta aplicação é possível registrar, listar, atualizar e deletar
              </Desc>

              <div>
                <a href="public/CV_AnthonyThomas.pdf" download>
                  <Button>
                    Code
                  </Button>
                </a>
                <a href="public/CV_AnthonyThomas.pdf" download>
                  <Button>
                    Live
                  </Button>
                </a>
              </div>
            </WhatWeDo>
          </div>


          <div className="6">

            <WhatWeDo>
              <Image src="public/img/project1.png" />
              <Subtitle>Zumbilandia</Subtitle>
              <Desc>
                jogo de escolhas feito com javascrip
              </Desc>

              <div>
                <a href="public/CV_AnthonyThomas.pdf" download>
                  <Button>
                    Code
                  </Button>
                </a>
                <a href="public/CV_AnthonyThomas.pdf" download>
                  <Button>
                    Live
                  </Button>
                </a>
              </div>
            </WhatWeDo>
          </div>


          <div className="7">

            <WhatWeDo>
              <Image src="public/img/project1.png" />
              <Subtitle>Zumbilandia</Subtitle>
              <Desc>
                jogo de escolhas feito com javascrip
              </Desc>

              <div>
                <a href="public/CV_AnthonyThomas.pdf" download>
                  <Button>
                    Code
                  </Button>
                </a>
                <a href="public/CV_AnthonyThomas.pdf" download>
                  <Button>
                    Live
                  </Button>
                </a>
              </div>
            </WhatWeDo>
          </div>


          <div className="8">

            <WhatWeDo>
              <Image src="public/img/project1.png" />
              <Subtitle>Zumbilandia</Subtitle>
              <Desc>
                jogo de escolhas feito com javascrip
              </Desc>

              <div>
                <a href="public/CV_AnthonyThomas.pdf" download>
                  <Button>
                    Code
                  </Button>
                </a>
                <a href="public/CV_AnthonyThomas.pdf" download>
                  <Button>
                    Live
                  </Button>
                </a>
              </div>
            </WhatWeDo>
          </div>

        </Div>
      </Container>
    </Section>
  );
};

export default Works;