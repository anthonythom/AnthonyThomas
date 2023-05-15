import React, { Suspense } from "react";
import styled from "styled-components";


const Section = styled.div`
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
  color:  #e1e1e6;
background-color:  #121214;
`;




const FormacaoContainer = styled.div`

display: grid;

grid-template-columns: 2fr 2fr;
gap: 100px;
position: relative;
:after {
  content: "";
  display: block;
  width: 130px;
  height: 100px;

  position: absolute;
  bottom: -50px;
  left: 20px;
}
  @media (max-width: 800px) {
   
    grid-template-columns: 1fr;
    padding: 60px 20px;
    gap: 40px;
}
` 
 

const FormacaoTexto = styled.div`
font-size: 1.5rem;
line-height: 1.33;
max-width: 40ch;
margin-bottom: 60px;
color: #a3a3a3;` 


const List = styled.ul`

  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 60px;
 
    




  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
const ListItemFac = styled.li`

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
 
}


  
`;






// .formacao .subtitulo {
//   color: #000000;
//   max-width: 5ch;
// }


  


// .formacao-texto strong {
//   color: #ffffff;
// }


const FacTipo = styled.h1`  
font-size: 0.875rem;
text-transform: uppercase;
color: #a3a3a3;
margin-bottom: 10px;`

const FacCurso = styled.h1`  
  flex: 1;
  font-size: 1.125rem;
  line-height: 1.4;
  margin-bottom: 40px;
  position: relative;

  :before {
  content: "";
  display: block;
  width: 4px;
  height: 20px;
  background: linear-gradient(#b6f829, #67dd0a);
  position: absolute;
  left: -24px;
}
  `
const FacInstitu = styled.span`  
  font-size: 1.125rem;
  color: #a3a3a3;`


const FormacaoExtra= styled.h3`  
  font-size: 0.875rem;
  line-height: 1.4;
  color: #8f8f8f;
  text-transform: uppercase;
  margin-bottom: 30px;
  position: relative;
  
li{ font-size: 1.125rem;
  line-height: 1.1;
  margin-bottom: 20px;}

  span{
    color: #8f8f8f;
  }


  :before {
  display: block;
  content: "";
  width: 24px;
  height: 24px;
  position: absolute;
  left: -36px;
  top: -4px;

  
}
  `
const Cursos = styled.div`  
margin-bottom: 60px;

li {
  display: flex;
  justify-content: space-between;
}


:before {
 background: url("./img/cursos.svg") no-repeat center center;
}
`
const Idiomas = styled.div`  

:before {
 background: url("./img/idiomas.svg") no-repeat center center;
}
`

const Span = styled.h6`  

  color: #ffffff;`






















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

          <Desc>
            <section class="formacao" id="formacao" aria-label="Formação">
              <FormacaoContainer>


                <div>
                  <FormacaoTexto>
                    Minha mais recente experiência acadêmica foi o curso de <strong>Web Desenvolvimento</strong> 🎓 que fiz na instituição de ensino <strong>Alura</strong> em parceria com a <strong>Oracle</strong>. Além disso me mantenho sempre atualizado com cursos intensivos online.
                  </FormacaoTexto>

                  <List>
                    <ListItemFac>
                      <FacTipo>Graduação</FacTipo>
                      <FacCurso>Analise e Desenvolvimento de Sistemas</FacCurso>
                      <FacInstitu>Universidade Unyleya</FacInstitu>
                    </ListItemFac>

                    <ListItemFac>
                      <FacTipo>Bootcamp</FacTipo>
                      <FacCurso>Web Desenvolvimento </FacCurso>
                      <FacInstitu>Resilia Educação</FacInstitu>
                      </ListItemFac>
                      <ListItemFac>
                      <FacTipo>Bootcamp</FacTipo>
                      <FacCurso>Web Desenvolvimento</FacCurso>
                      <FacInstitu>Alura + Oracle</FacInstitu>
                      </ListItemFac>
                  </List>

                  <FormacaoExtra>
                    <Cursos>
                      <h3>Cursos Intensivos</h3>
                      <ul>
                        <li>UX Design & UI Design <Span>56h</Span></li>
                        <li>Front End para Iniciantes <Span>72h</Span></li>
                      </ul>
                    </Cursos>

                    <Idiomas>
                      <h3>Idiomas</h3>
                      <ul>
                        <li>Inglês <Span>/ Fluente</Span></li>
                        <li>Espanhol <Span>/ Intermediário</Span></li>
                      </ul>
                    </Idiomas>
                  </FormacaoExtra>
                </div>
              </FormacaoContainer>
            </section>


          </Desc>






          {/* <WhatWeDo>
            <Line src="./img/line.png" />
            <Subtitle>Idiomas</Subtitle>
          </WhatWeDo>
          <Desc> <li><b>Português</b> / Nativo <br /></li>
            <li><b>Inglês</b> / Intermediario <br /></li>



          </Desc> */}



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