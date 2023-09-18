import React, { Suspense } from "react";
import styled from "styled-components";


const Section = styled.div`
  height: 100vh;
 

  display: flex;
  justify-content: center;
  @media only screen and (max-width: 768px) {
    margin-bottom: 1000px;
  }
`;

const Container = styled.div`
  height: 100vh;
 
  width: 100vw;

 
  color:  #e1e1e6;

`;




const FormacaoContainer = styled.div`

display: grid;

grid-template-columns: 15fr 1fr;
gap: 0px;
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
  font-size: 24px;


font-family: 'Playfair Display SC', serif;
  @media only screen and (max-width: 768px) {
    padding: 20px;
    text-align: center;
    margin: auto;
    width: 30%;
  }

line-height: 1.33;
max-width: 100ch;
margin-bottom: 60px;
color:  #e1e1e6;
`


const List = styled.ul`

  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 60px;
 
    




  @media only screen and (max-width: 768px) {
   display: flex;
   flex-direction: column;
   justify-content: center;
   margin: auto;
   width: 30%;
   padding: 50px;
   gap: 30px;
  }
`;
const ListItemFac = styled.li`

flex: 1;
background: rgba( 255, 255, 255, 0.35 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 13.5px );
    -webkit-backdrop-filter: blur( 13.5px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
  padding: 20px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;

position: relative;
display: block;
transition: 0.1s;

::after{
 
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

:hover{
 color: #e5de93;
 transition: transform 0.1s;
 background: rgba( 0, 0, 0, 0.35 );
    box-shadow: 0 8px 32px 0 rgba( 17, 17, 17, 0.37 );
    backdrop-filter: blur( 4.5px );
    -webkit-backdrop-filter: blur( 13.5px );
    border-radius: 10px;
    border: 1px solid rgba( 16, 16, 16, 0.35 );
}
:hover::after{
  transform: scaleX(26);
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
font-size: 1rem;
text-transform: uppercase;
font-weight: bold;
color: #ffffff;
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
  background: linear-gradient(#e5de93, #ddcb0a);
  position: absolute;
  left: -24px;
}
  `
const FacInstitu = styled.span`  
  font-size: 1.125rem;
  color: #ffffff;`


const FormacaoExtra = styled.h3`  
  font-size: 0.875rem;
  line-height: 1.4;
  color:  #e1e1e6;
  text-transform: uppercase;
  margin-bottom: 30px;
  position: relative;
  
li{
   font-size: 1.125rem;
  line-height: 1.0;
  margin-bottom: 1rem;
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


@media only screen and (max-width: 768px) {
   display: flex;
   flex-direction: column;

   margin: auto;
   width: 30%;
   padding: 50px;
   gap: 30px;
  }
`
const Idiomas = styled.div`  
@media only screen and (max-width: 768px) {
   
  

   margin: auto;
  



  }

`

const Span = styled.h6`  

  color: #ffffff;`






















const Title = styled.h1`
  
  font-size: 3rem;
    text-transform: uppercase;
    
   margin-left: 15rem;
   
    font-weight: 800;
    
 
  
    font-family: 'Source Sans Pro',sans-serif;

  @media only screen and (max-width: 768px) {
    font-size: 50px;
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
 margin-left: 70rem;
 margin-bottom: 20px;
 height: 50px;
    cursor: pointer;
    font-size: 14px;
    font-weight: 700;
    line-height: 19px;
    text-align: center;
    border: 1px;
    border-style: solid;
    border-radius: 50px;
    border-color:#a984f8; 
    color:  #e1e1e6;
    background: #a984f8; 
    text-transform: uppercase;
    transition: all .3s ease;
 

  @media (min-width: 320px){
    padding: 12px 24px;
    justify-content: center;
}

:hover {
    color: white;
    background-color:#a984f8; ;
    box-shadow: rgb(100 100 111 / 50%) 0 7px 29px 0;
  }
  
`;

const Degree = () => {
  return (
    <Section id="formacao" className="header_link">
      <Container>

        <Right>
          <Title>Formação</Title>

          <Desc>
       
              <FormacaoContainer>


                <div>
                  <FormacaoTexto>
                    Minha mais recente experiência acadêmica é o curso de <strong>Desenvolvimento Java</strong> 
                    🎓 que estou cursando atualmente no instituto de ensino <strong>Proa</strong> em parceria com o <strong>Senac
                      </strong>. Além disso, me mantenho sempre atualizado com cursos intensivos online.

                  </FormacaoTexto>

                  <a href="./AnthonyThomasCV.pdf" download>
            <Button>
              Baixar CV
            </Button></a>

                  <List>
                    <ListItemFac>
                      <FacTipo>Graduação</FacTipo>
                      <FacCurso>Análise e Desenvolvimento de Sistemas</FacCurso>
                      <FacInstitu>Universidade Unyleya</FacInstitu>
                    </ListItemFac>

                    <ListItemFac>
                      <FacTipo>Bootcamp</FacTipo>
                      <FacCurso> Desenvolvimento Web Full-Stack </FacCurso>
                      <FacInstitu>Resilia Educação</FacInstitu>
                    </ListItemFac>
                    <ListItemFac>
                      <FacTipo>Profissionalizante</FacTipo>
                      <FacCurso>Desenvolvimento Java</FacCurso>
                      <FacInstitu>Proa + Senac</FacInstitu>
                    </ListItemFac>
                    <ListItemFac>
                      <FacTipo>Bootcamp</FacTipo>
                      <FacCurso>AWS Fundamentos</FacCurso>
                      <FacInstitu>Escola da Nuvem</FacInstitu>
                    </ListItemFac>
                  </List>

                  <FormacaoExtra>
                    <Cursos>
                      <h3>Cursos Intensivos</h3>
                      <ul>
                        <li>UX Design & UI Design <Span>56h</Span></li>
                        <li>Front End para Iniciantes <Span>72h</Span></li>
                        <li> Agilidade: promovendo a transformação ágil <Span>16h</Span></li>
                        
                        
                       
                        
                      </ul>
                      <ul>

                      </ul>

                    </Cursos>

                    <Idiomas>
                      <h3>Idiomas</h3>
                      <ul>

                        <li>Inglês <Span>/ Intermediário</Span></li>
                        <li>Espanhol <Span>/Basico </Span></li>
                      </ul>
                    </Idiomas>
                  </FormacaoExtra>
                </div>
              </FormacaoContainer>
          


          </Desc>
         
        </Right>
      </Container>
    </Section>
  );
};

export default Degree;