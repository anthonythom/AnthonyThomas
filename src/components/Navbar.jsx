import React, { useState } from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";

const Section = styled.div`
  width: 100%;
  margin-top: 50px;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 10px;
  
background-color: #1c1b1b;
  border-bottom: 1px solid #b5b5b5;

  box-shadow: 0 10px 50px rgba(232, 227, 234, 0.1);
`;

const Links = styled.div`
  display: flex;
  margin-top: 0.5rem;
  gap: 10rem;
  color: #a8a8b3;
  font-size: 16px;
  margin-bottom: 10px;
  cursor: pointer;
  text-transform: uppercase;

  font-size: 22px;
  line-height: 32px;


  height: 100%;
  display: flex;
  align-items: center;
  transition: all 0.2s ease 0s;

  font-weight: 400;
  line-height: 19px;
  text-align: center;

 

  transition: width 0.6s cubic-bezier(0.25, 1, 0.5, 1) 0s;

  font-family: Roboto, sans-serif;
  color: var(--text);

  @media (max-width: 768px) {
    
margin: auto;

padding: 15px;
justify-content: center;
align-items: center;
margin-right: 195px;

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
  font-size: 1rem;
  text-transform: uppercase;

  font-weight: 400;

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
    color: #6231cd;
    transition: width 0.6s cubic-bezier(0.25, 1, 0.5, 1) 0s;
  }
  :hover::after {
    transform: scaleX(15);
    transform-origin: left;
  }
  
`;

const Button = styled.button`
  width: 100%;
  height: 100%;
  cursor: pointer;
  font-size: 12px;
  font-weight: 800;
  line-height: 19px;
  text-align: center;
  border: 1px;
  border-style: solid;
  border-radius: 5px;
  border-color: #6231cd;
  color: #e1e1e6;
  background: var(--background);
  text-transform: uppercase;
  transition: all 0.3s ease;

  @media (min-width: 320px) {
    padding: 12px 24px;
    justify-content: center;
  }
  @media (max-width: 768px) {

display: none;



  }

  :hover {
    color: white;
    background-color: #6231cd;
    box-shadow: rgb(100 100 111 / 50%) 0 7px 29px 0;
  }
`;


const Navbar = () => {

  return (
    <Section>
      <Container className="navbar  fixed-top">
      

        <Links>
          <a class="nav-link" href="./#hero">
            <Logo src="./img/logo.png" />
          </a>

          <List class="nav-link">
            <a class="nav-link" href="./#hero">
              <ListItem>Início</ListItem>
            </a>

            <a class="nav-link" href="./#who">
              <ListItem>Sobre</ListItem>
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
