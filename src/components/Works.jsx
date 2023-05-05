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
font-size: 8rem;
    text-transform: uppercase;
    letter-spacing: 3px;
 
    color: #111;
    font-weight: 800;
    margin-left: 1rem;
    font-family: sans-serif;
  
    font-family: 'Source Sans Pro',sans-serif;


  
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


flex-direction:column;
  align-items: center;
 


  border-radius: 20px;
  
  box-shadow: rgb(100 100 111 / 20%) 0 7px 29px 0;
    background: #fff;

    @media only screen and (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
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

  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const DivB = styled.div`



margin-bottom: 20px;




`;
const Works = () => {
  return (
    <Section id="works" className="header_link">
      <Container>

        <Title>PORTFOLIO</Title>

        <Div1>



          {/* <div className="1">
            <WhatWeDo>
              <Image src="./img/project1.png" />


              <Subtitle>Zumbilandia</Subtitle>
              <Desc>
                feito em 2022
              </Desc>

              <DivB>

                <div>

                  <a href="public/CV_AnthonyThomas.pdf" target="_blank">
                    <Button>



                      Ver mais
                    </Button>
                  </a>
                </div>


              </DivB>

            </WhatWeDo>


          </div> */}

          <div className="2">
            <WhatWeDo>
              <Image src="./img/projeto 2.png" />
              <Subtitle>Game of Spin-Off</Subtitle>
              <Desc>
                feito em 2022


              </Desc>
              <DivB>
                <div>
                  <a href="https://github.com/hugolegramandi/SpinOff_GoT" target="_blank">
                    <Button>
                      Ver mais
                    </Button>
                  </a>

                </div>

              </DivB>
            </WhatWeDo>
          </div>

          <div className="3">
            <WhatWeDo>
              <Image src="./img/projeto 3.png" />
              <Subtitle>Astronomy Picture of The Day</Subtitle>
              <Desc>
                feito em 2022
              </Desc>

              <DivB>

                <div>

                  <a href="https://anthonythom.github.io/projeto-APOD/" target="_blank">
                    <Button>



                      Ver mais
                    </Button>
                  </a>
                </div>


              </DivB>
            </WhatWeDo>
          </div>

          <div className="4">
            <WhatWeDo>
              <Image src="./img/projeto 4.png" />
              <Subtitle>FrontEnders</Subtitle>
              <Desc>
                feito em 2022
              </Desc>

              <DivB>

                <div>

                  <a href="https://brunoblanquez.github.io/FrontEnders/index.html" target="_blank">
                    <Button>



                      Ver mais
                    </Button>
                  </a>
                </div>


              </DivB>
            </WhatWeDo>
          </div>


          
          <div className="5">

            <WhatWeDo>
              <Image src="./img/tatuaria.png" />
              <Subtitle>Tatuaria</Subtitle>
              <Desc>
                feito em 2022
              </Desc>

              <DivB>

                <div>

                  <a href="public/CV_AnthonyThomas.pdf" target="_blank">
                    <Button>



                      Ver mais
                    </Button>
                  </a>
                </div>


              </DivB>
            </WhatWeDo>
          </div>


        </Div1>




        <Div>




          {/* <div className="6">

            <WhatWeDo>
              <Image src="img\work.png" />
              <Subtitle>Proximos projetos</Subtitle>
              <Desc>
                em progresso
              </Desc>

              <DivB>

                <div>

                  <a href="public/CV_AnthonyThomas.pdf" target="_blank">
                    <Button>



                      Ver mais
                    </Button>
                  </a>
                </div>


              </DivB>
            </WhatWeDo>
          </div>


          <div className="7">
            <WhatWeDo>
              <Image src="img\work.png" />
              <Subtitle>Proximos projetos</Subtitle>
              <Desc>
                em progresso
              </Desc>

              <DivB>

                <div>

                  <a href="public/CV_AnthonyThomas.pdf" target="_blank">
                    <Button>



                      Ver mais
                    </Button>
                  </a>
                </div>


              </DivB>
            </WhatWeDo>
          </div>


          <div className="8">

            <WhatWeDo>
              <Image src="img\work.png" />
              <Subtitle>Proximos projetos</Subtitle>
              <Desc>
                em progresso
              </Desc>

              <DivB>
                <div>

                  <a href="public/CV_AnthonyThomas.pdf" target="_blank">
                    <Button>



                      Ver mais
                    </Button>
                  </a>
                </div>


              </DivB>
            </WhatWeDo>
          </div> */}

        </Div>
      </Container>
    </Section>
  );
};

export default Works;