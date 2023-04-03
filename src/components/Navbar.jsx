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
`;

const Logo = styled.img`
  height: 50px;
`;

const List = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const ListItem = styled.li`
  cursor: pointer;
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
           
            <ListItem>Início</ListItem>
          
            <ListItem>Sobre</ListItem>
            <ListItem>Trabalhos</ListItem>
            <ListItem>Contato</ListItem>
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