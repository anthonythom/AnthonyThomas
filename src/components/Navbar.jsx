import React, { useState } from "react";
import styled from "styled-components";


const Section = styled.div`
  width: 100%;
  margin-top: 50px;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 10px;
  

`;

const Links = styled.div`
  display: flex;

  cursor: pointer;
`;


const Social = styled.div`
  display: flex;

  color: #000000;
  font-size: 16px;

  cursor: pointer;
`;

const Logo = styled.img`
  width: 100px;
   height: 100px;

  cursor: pointer;

  @media only screen and (max-width: 768px) {
   
 
  

 
   width: 100px;
   height: 100px;
 
   }
 
`;

const List = styled.ul`
  display: flex;
  gap: 30px;
  margin-right: 100px;

  list-style: none;
  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};

    flex-direction: column;
   align-items: center;
    width: 100%;
    margin-top: 10px;
    text-transform: none;



  }
`;

const ListSocial = styled.ul`
  display: flex;
 
  gap: 10px;
  @media only screen and (max-width: 768px) {
   

  

    flex-direction: column;
   align-items: center;
    width: 100%;
    margin-top: 10px;
    text-transform: none;
  width: auto;


  }
`;



const ListItem = styled.li`
  font-size: 20px;

  font-weight: 400;
  font-style: normal;
  text-transform: none;
  letter-spacing: 0;
  color: #6b6969;

`;

const MenuButton = styled.button`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    margin-left: ${({ isOpen }) => (isOpen ? "" : "200px")};
    justify-content: space-around;


  }
`;


const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Section>
      <Container>

     <MenuButton onClick={handleMenuToggle}>
          
          
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
</svg></MenuButton>
          <Logo src="./img/logo.png" />
   

        

        <Links>
          <List isOpen={isOpen}>
         
             
           

         
              <ListItem>Sobre</ListItem>
        
          
              <ListItem>Trabalhos</ListItem>
        
         
              <ListItem>Contato</ListItem>
          
          </List>


        
        </Links>

       
      </Container>
    </Section>
  );
};

export default Navbar;