import React from 'react'
import styled from "styled-components";




const Section = styled.div`
 
  display: block;
  margin-top: 20vh;
    color: #fff;
`;

const Container = styled.div`
  width: 100%;
  padding: 3rem 0;
  background-color: #000000;
  
  @media only screen and (max-width: 768px) {
    width: 100%;
  
  }
`;
const Div = styled.div`

      display: flex;
      align-items: baseline;
    justify-content: space-between;
 
margin-bottom: 30px;

`;
const Left = styled.div`
    font-size: 1.5rem;
margin-left: 10vh;
font-size: small;
line-height: 1.7;
  
`;

const Right = styled.div`
      
margin-right: 10vh;

`;




const DivF = styled.div`
background-color: #000000;
padding: 2rem 0;
    border-top: 1px solid #444;
    color: #eee;
    font-size: 1rem;
    text-align: center;
`;



const Footer = () => {
  return (
    <Section>
      <Container>
        <Div>

          <Left>

            <h1>Anthony Thomas</h1>
            <h2>
              Um desenvolvedor Web focado em Frontend, construindo o Frontend<br /> de sites e
              aplicativos que levam ao sucesso do produto geral.
            </h2>
          </Left>



          <Right>
            <div>
              <h1>Social</h1>
            </div>
            <div>

              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" width={20} />

              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" width={20} />

              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" width={20} />

              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" width={20} />

              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" width={20} />
            </div>
          </Right>



        </Div>




        <DivF>

          <span>© Copyright 2023. Feito por</span><a rel="noreferrer" target="" href="https://portfolioanthonythomas.vercel.app"> Anthony Thomas </a>


        </DivF>


      </Container>
    </Section>

  )
}

export default Footer






