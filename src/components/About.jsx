import React, { useState } from "react";
import styled from "styled-components";

const Section = styled.div`
  height: 1400px;
  width: 100%;
  justify-content: center;
  text-align: center;
  align-items: center;
`;

const Container = styled.div`
  margin-top: 150px;
  display: flex;
  text-align: center;
  align-items: center;

  justify-content: space-evenly;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const AboutMe = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
`;

const Left = styled.div`
  width: 25%;
`;
const Right = styled.div`
  width: 50%;
`;

const Title = styled.h1`
  font-size: 3rem;
  text-transform: uppercase;

  font-weight: 800;

  font-family: "Source Sans Pro", sans-serif;

  @media only screen and (max-width: 768px) {
    font-size: 40px;
  }
`;
const Title2 = styled.h1`
  font-size: 2rem;
  text-transform: uppercase;

  font-weight: 800;

  font-family: "Source Sans Pro", sans-serif;

  @media only screen and (max-width: 768px) {
    font-size: 40px;
  }
`;

const PhotoContainer = styled.div`
  position: relative;
  margin: 10px;
  overflow: hidden;
  cursor: pointer;
  text-align: center;
`;

const PhotoImage = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${PhotoContainer}:hover & {
    transform: scale(1.1);
  }
`;

const PhotoOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  opacity: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 24px;
  font-weight: bold;
  transition: opacity 0.3s ease;
`;

const PhotoName = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #000000;
  font-size: 30px;
  font-weight: bold;
  opacity: ${(props) => (props.show ? 1 : 0)};
  transition: opacity 0.3s ease;
`;

const Desc = styled.h1`
  width: 50%;
  margin-top: 10px;
  text-align: center;
  font-size: 24px;
  font-family: "Source Sans Pro", sans-serif;
`;
const DescSobre = styled.p`
  margin-top: 10px;
  text-align: center;
  font-size: 24px;
  font-family: "Source Sans Pro", sans-serif;
`;

const Skills = styled.div`
  .about__content-title {
    font-size: 2rem;
    text-transform: uppercase;
    font-weight: 800;
    font-family: "Source Sans Pro", sans-serif;
  }
`;
const SkillStyle = styled.div`
  display: flex;
  flex-wrap: wrap;


.skills__skill2{
  padding: 1rem 2rem;
    margin-bottom: 1.5rem;
    margin-right: 1.5rem;
    font-size: 1rem;
    background: #e6e29c;
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
    border-radius: 5px;
    font-weight: 600;
    color: #ffffff;
  }



.skills__skill1{
  padding: 1rem 2rem;
    margin-bottom: 1.5rem;
    margin-right: 1.5rem;
    font-size: 1rem;
    background: #b7e69c;
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
    border-radius: 5px;
    font-weight: 600;
    color: #ffffff;
  }




  .skills__skill {
    padding: 1rem 2rem;
    margin-bottom: 1.5rem;
    margin-right: 1.5rem;
    font-size: 1rem;
    background: #a984f8;
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(13.5px);
    -webkit-backdrop-filter: blur(13.5px);
    border-radius: 10px;
    border: 1px solid rgba(251, 249, 249, 0.18);
    padding: 20px;
    border-radius: 4px;
    display: flex;
    flex-direction: column;

    position: relative;
    display: block;
    transition: 0.1s;

    ::after {
      position: absolute;

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
    
    border-radius: 5px;
    font-weight: 600;
    color: #ffffff;
  }
`;

const Line = styled.img`
  height: 10px;
`;

const Subtitle = styled.h2`
  color: #e5de93;
`;

const Description = styled.p`
  width: 900px;

  font-size: 1.5rem;

  max-width: 900px;

  font-size: 24px;

  text-align: justify;
  font-family: "Playfair Display SC", serif;

  color: #ffffff;

  line-height: 26px;
  padding-bottom: 20px;

  @media (max-width: 768px) {
    width: 90%;
    margin: auto;
    font-size: 15px;

    text-align: center;
  }
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
  border-radius: 50px;
  border-color: #a984f8;
  color: #e1e1e6;
  background: #a984f8;
  text-transform: uppercase;
  transition: all 0.3s ease;

  @media (min-width: 320px) {
    padding: 12px 24px;
    justify-content: center;
  }

  :hover {
    color: white;
    background-color: #a984f8;
    box-shadow: rgb(100 100 111 / 50%) 0 7px 29px 0;
  }
`;

const About = () => {
  const [showName, setShowName] = useState(false);
  const handleMouseEnter = () => {
    setShowName(true);
  };
  const handleMouseLeave = () => {
    setShowName(false);
  };

  return (
    <Section id="about" className="header_link">
      <AboutMe>
        <Title>Sobre Mim</Title>
        <Line src="./img/line.png" />
        <Desc>
          Aqui você irá encontrar mais informações sobre mim, o que faço e
          minhas habilidades atuais, principalmente em termos de programação e
          tecnologia.
        </Desc>
      </AboutMe>
      <Container>
        <Right>
          <Title2>Me Conheça</Title2>
          <PhotoContainer
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <PhotoImage src="./img/fotoperfil.jpg" />
            <PhotoName show={showName}> @anthonythomas.jpg </PhotoName>
            <PhotoOverlay> </PhotoOverlay>
          </PhotoContainer>
          <DescSobre>
            <p>
              Olá! Meu nome é Anthony Thomas, tenho 22 anos e sou um entusiasta
              da tecnologia. Atualmente, estou cursando Análise e
              Desenvolvimento de Sistemas e Desenvolvimento Java, buscando aprimorar meus conhecimentos
              e habilidades nessa área em constante evolução.
            </p>
            <p>
              Tive a oportunidade de me formar em Desenvolvimento Web FullStack pela
              Resilia Educação, o que me proporcionou uma base sólida e
              conhecimentos práticos nessa área. Durante esse percurso, descobri
              minha verdadeira paixão por explorar soluções tecnológicas e criar
              experiências digitais inovadoras.
            </p>

            <p>
              Estou aberto a novas oportunidades de trabalho onde consiga
              contribuir, aprender e crescer. Se você tiver uma boa oportunidade
              que combine com minhas habilidades e experiência, não hesite em me
              chamar!
            </p>
          </DescSobre>

          <a href="mailto:anthonythomascontato@gmail.com" target="_blank">
            <Button>Contrate agora!</Button>
          </a>
        </Right>

        <Left>
          <Skills class="about__content-skills">
            <h3 class="about__content-title">Hard Skills</h3>
            <SkillStyle class="skills">
              <div class="skills__skill1">HTML</div>
              <div class="skills__skill">CSS</div>
              <div class="skills__skill2">JavaScript</div>
              <div class="skills__skill1">React</div>
              <div class="skills__skill">Three.js</div>
              <div class="skills__skill2">GIT</div>
              <div class="skills__skill">Github</div>
              <div class="skills__skill1">MySQL</div>
              <div class="skills__skill2">MongoDB</div>
              <div class="skills__skill1">SEO</div>
              <div class="skills__skill2">Java</div>
              <div class="skills__skill">Express</div>
              <div class="skills__skill1">Node</div>
            </SkillStyle>
          </Skills>

          <Skills class="about__content-skills">
            <h3 class="about__content-title">Soft Skills</h3>
            <SkillStyle class="skills">
              <div class="skills__skill">Scrum</div>
              <div class="skills__skill1">Kaban</div>
            </SkillStyle>
          </Skills>
        </Left>
      </Container>
    </Section>
  );
};

export default About;
