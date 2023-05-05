import React from "react";
import styled from "styled-components";

const Section = styled.div`
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Container = styled.div`
  width: 1400px;
  display: flex;

  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;

   
  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
  :hover{
    color: azure;
  }
`;

const Logo = styled.img`
  height: 50px;
`;

const List = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
  text-decoration: none;


  a:visited {
  color: #000000;
  text-decoration: none;
  list-style: none;
  

 
}

    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 700;
  


  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const ListItem = styled.li`
  cursor: pointer;

  list-style: none;
    display: block;
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;


  
`;




const Button = styled.button`
  width: 150px;
 
  background-color: #24c0d5;
  color: white;
  border: none;
  border-radius: 30px;
  cursor: pointer;


  box-shadow: rgb(100 100 111 / 20%) 0 7px 29px 0;



  font-weight: bold;


  padding: 20px;
`;

const Navbar = () => {
  return (
    <Section>
      <Container>
        <Links>
          <Logo src="./img/logo.png" />
          <List>
            <a href="./">
              <ListItem>Início</ListItem>
            </a>

            <a href="./#who" className="header_link">
              <ListItem>Sobre</ListItem>
            </a>
            <a href="./#works">
              <ListItem>Trabalhos</ListItem>
            </a>
            <a href="./#contact" className="header_link">
              <ListItem>Contato</ListItem>
            </a>
          </List>
        </Links>

        <a href="mailto:anthonythomascontato@gmail.com">
          <Button>
            Contrate agora!
          </Button>
        </a>
      </Container>
    </Section>
  );
};

export default Navbar;