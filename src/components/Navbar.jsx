import React, { useState } from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";

const Section = styled.div`
  display: flex;
 
  justify-content: center;
  width: 100%;

  margin-top: 50px;

  @media (max-width: 768px) {

display: flex;
align-items: center;
 flex-direction: column;

 
  
   
  }

`;

const Container = styled.div`
  display: flex;
  position: fixed;
  align-items: center;
  width: 50%;
  justify-content: space-around;
  margin-top: 50px;

margin-left: 25%;

  padding: 10px;
  border-radius: 50px 50px 50px 50px;
  color: #ffffff;
  background-image: conic-gradient(
    from 90deg at 50% 100%,
    #ffffff 0deg,
    #b7e69c 90deg,
    #b7e69c 1.9turn
  );
  box-shadow: 0 4px 4px 2px rgba(113, 113, 115, 0.5);

  @media (max-width: 768px) {

display: flex;


  
 
  
   
  }

`;

const Links = styled.div`
  display: flex;
  margin-top: 0.5rem;
  cursor: pointer;
  font-size: 14px;
    font-weight: 700;
    line-height: 19px;
    text-align: center;
  
    
   
    color:  #f9f9f9;
   
   
   
  transition: width 0.6s cubic-bezier(0.25, 1, 0.5, 1) 0s;

  font-family: "Source Sans Pro", sans-serif;

  @media (max-width: 768px) {

display: none;
  
 
  
   
  }
`;

const Logo = styled.img`
  height: 3rem;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const List = styled.ul`
  display: flex;
  gap: 20px;
`;

const ListItem = styled.li`
  cursor: pointer;
  font-size: 20px;
  font-weight: 400;
  line-height: 19px;
  text-align: center;

  font-family: "Source Sans Pro", sans-serif;

  @media only screen and (max-width: 768px) {
    font-size: 15px;
  }

  position: relative;
  display: block;
  transition: 1.5s;

  ::after {
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

  :hover {
    color: #a984f8;
    transition: width 0.6s cubic-bezier(0.25, 1, 0.5, 1) 0s;
  }
  :hover::after {
    transform: scaleX(15);
    transform-origin: left;
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

const Navbar = () => {
  return (
    <Section>
      <Container className="navbar  fixed-top">
        <a class="nav-link" href="./#hero">
          <Logo src="./img/logo.png" />
        </a>
        <Links>
          <List class="nav-link">
            <a class="nav-link" href="./#hero">
              <ListItem>Início</ListItem>
            </a>

            <a class="nav-link" href="./#about">
              <ListItem>Sobre</ListItem>
            </a>
            <a class="nav-link" href="./#formacao">
              <ListItem>Formação</ListItem>
            </a>
            <a class="nav-link" href="./#works">
              <ListItem>Trabalhos</ListItem>
            </a>
            <a class="nav-link" href="./#contact">
              <ListItem>Contato</ListItem>
            </a>
          </List>
        </Links>

        <a href="mailto:anthonythomascontato@gmail.com" target="_blank">
          <Button>Contrate agora!</Button>
        </a>
      </Container>
    </Section>
  );
};

export default Navbar;
