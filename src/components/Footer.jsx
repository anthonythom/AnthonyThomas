import React from 'react'
import styled from "styled-components";




const Section = styled.div`
  height: 500px;
  display: block;


`;

const Container = styled.div`
  width: 100vh;

  display: flex;
 
  flex-wrap: wrap;

  background-color: #535252;
  
  @media only screen and (max-width: 768px) {
    width: 100%;
  
  }
`;

const Left = styled.div`
  flex: 1;
  color: whitesmoke;
  @media only screen and (max-width: 768px) {
    display: none;
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


const Footer = () => {
  return (
   <Section>
    <Container>
       <Left> <h1>ANTHONY THOMAS
        <br />
A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product</h1></Left>
       <Right></Right>
    </Container>
   </Section>

  )
}

export default Footer