import React, { useState } from "react";
import styled from "styled-components";



const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
position: relative;
align-items: baseline;

`;

const Container = styled.div`
  width: 1400px;
  display: flex;
 
  flex-wrap: wrap;
  
  @media only screen and (max-width: 768px) {
    width: 100%;
  
  }
`;

const Title = styled.h1`
margin-left: 5vh;
margin-top: 2vh;
font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 50px;
 color: #0bb0de;

  
  @media only screen and (max-width: 768px) {
    font-size: 15px;
  }
`;

const Div = styled.div`
display: flex;
margin-bottom: 5vh;

`;

const WhatWeDo = styled.div`
margin-top: 3vh;
margin-left: 5vh;
  display: flex;
  align-items: center;
 
  flex-direction:column;
  background-color: #caedff;
  border-radius: 10px;
  

`;
 const Left = styled.div`



 `
const Image = styled.img`

  height: 200px;
  border-color: aliceblue;
`;

const Subtitle = styled.h2`
  color: #0bb0de;
`;

const Desc = styled.p`
  font-size: 24px;
  color: #26bed8;
 text-align: center;

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
const Works = () => {
  return (
    <Section>
      <Container>
        
        <Title>PORTFOLIO</Title>
        <Div>
        <div> 
          <WhatWeDo>
            <Image src="public\img\project1.png" />

            
            <Subtitle>Zumbilandia</Subtitle>
            <Desc>
              jogo de escolhas feito com javascripoigftoeaghioahgpasgjaogásg´sagjájjgo´sajgajgáojga´gsa´djsa´dja´sdja
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

        <div>
          <WhatWeDo>
            <Image src="public/img/projeto 2.png" />
            <Subtitle>Game of Spin-Off</Subtitle>
            <Desc>
O projeto teve como análise de banco de dados em CSV cruzando com informações do mercado para apresentar um estudo 
de viabilidade de produto de derivagem (spin-off) da série de televisão "Game of Thrones".
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
  
        <div>
          <WhatWeDo>
            <Image src="public/img/projeto 3.png" />
            <Subtitle>Astronomy Picture of The Day</Subtitle>
            <Desc>
            Aplicação para retornar "Foto Astronômica do Dia" de acordo com a
             data buscada pelo usuário, para isso é utilizado a API do projeto APoD da Nasa.
              Projeto desenvolvido com HTML5, CSS3, Javascript,
               e API da Nasa.
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

        <div>
          <WhatWeDo>
            <Image src="public\img\projeto 4.png" />
            <Subtitle>FrontEnders</Subtitle>
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

 <Div>
        <div>

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

        
        <div>

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

        
        <div>

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

        
        <div>

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