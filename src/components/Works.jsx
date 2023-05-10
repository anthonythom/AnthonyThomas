import React, { useState } from "react";
import styled from "styled-components";
import Carousel from 'react-bootstrap/Carousel';

const Section = styled.div`
  height: 150vh;

  display: flex;
position: relative;
align-items: baseline;

`;

const Container = styled.div`
  width: 100%;
 
  display: flex;

  flex-wrap: wrap;
  
  @media only screen and (max-width: 768px) {
    width: 100%;
  
  }
`;

const Title = styled.h1`
font-size: 5rem;
    text-transform: uppercase;
 
    color: #111;
    font-weight: 800;
    margin-left: 5rem;
    font-family: sans-serif;
  
    font-family: 'Source Sans Pro',sans-serif;


  
  @media only screen and (max-width: 768px) {
    font-size: 15px;
  }
`;

const Div1 = styled.div`
display: flex;
align-items: center;

margin-bottom: 5vh;

`;
const Div = styled.div`


display: flex;
align-items: center;

margin-bottom: 5vh;




`;

const WhatWeDo = styled.div`

margin-top: 3vh;
margin-left: 3vh;
margin-right: 5vh;
  display: flex; 


flex-direction:column;
  align-items: center;
 


  border-radius: 20px;
  
  box-shadow: rgb(100 100 111 / 20%) 0 7px 29px 0;
    background: #fff;

    @media only screen and (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;
const Left = styled.div`



 `
const Image = styled.img`



`;

const Subtitle = styled.h2`
  color: #0bb0de;
`;

const Desc = styled.p`
margin-top: 20px;
margin-bottom: 20px;
display: flex;
  font-size: 24px;
  color: #26bed8;
 text-align: center;

`;

const Button = styled.button`
  background-color: #0bb0de;
  color: white;
  font-weight: 500;

  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;


const Works = () => {
  return (
    <Section id="works" className="header_link">
      <Container>

        <Title>PORTFOLIO</Title>



      
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="./img/project1.png"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h1>Zumbilandia</h1>
                    <p>Jogo de escolhas feito utilizando HTML/CSS e JavaScript.</p>
                    <a href="https://github.com/hugolegramandi/SpinOff_GoT" target="_blank">
                    <button type="button" class="btn btn-outline-light">Ver mais.</button>
                  </a>

                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="public/img/projeto 2.png"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h1>Game of Spin-Off</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <a href="https://github.com/hugolegramandi/SpinOff_GoT" target="_blank">
                    <button type="button" class="btn btn-outline-light">Ver mais.</button>
                  </a>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-"
                    src="public/img/projeto 3.png"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h1>Third slide label</h1>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                    <a href="https://github.com/hugolegramandi/SpinOff_GoT" target="_blank">
                    <button type="button" class="btn btn-outline-light">Ver mais.</button>
                  </a>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="public/img/projeto 4.png"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h1>FrontEnders</h1>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    <a href="https://github.com/hugolegramandi/SpinOff_GoT" target="_blank">
                    <button type="button" class="btn btn-outline-light">Ver mais.</button>
                  </a>

                </Carousel.Caption>
            </Carousel.Item>


            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="public/img/tatuaria.png"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h1>Tatuaria</h1>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    <a href="https://github.com/hugolegramandi/SpinOff_GoT" target="_blank">
                    <button type="button" class="btn btn-outline-light">Ver mais.</button>
                  </a>
                </Carousel.Caption>
            </Carousel.Item>

        </Carousel>
    );





      </Container>
    </Section>
  );
};

export default Works;