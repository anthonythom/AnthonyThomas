import React from "react";
import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';


const Section = styled.div`
  display: flex;
  justify-content: center;
  
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Container = styled.div`



  background-color: #121214;
  
  justify-content: space-around;

  align-items: center;
  
  border-bottom: 1px solid #444;

  box-shadow: 0 10px 100px rgba(138, 10, 202, 0.1);

  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
`;

const Links = styled.div`
display: flex;
  margin-top: 0.5rem;
  gap: 10rem;
  color:  #a8a8b3;
  font-size: 16px;


    height: 100%;
    display: flex;
    align-items: center;
    transition: all 0.2s ease 0s;
 
    font-weight: 400;
    line-height: 19px;
    text-align: center;

    

  
    width: 0px;
    height: 2px;
   
    transition: width 0.6s 
    cubic-bezier(0.25, 1, 0.5, 1) 0s;


    font-family: Roboto,sans-serif;
    color: var(--text);


   

   




`;

const Logo = styled.img`
  height: 3rem;
`;

const List = styled.ul`
  display: flex;
  gap: 20px;

  a:visited {
    

}


  @media only screen and (max-width: 768px) {
    display: none;
  }
`;






const ListItem = styled.li`

font-size: 1rem;
    text-transform: uppercase;
    
   

    font-weight: 400;
    
    
  
    font-family: 'Source Sans Pro',sans-serif;

  @media only screen and (max-width: 768px) {
    font-size: 60px;
  }

position: relative;
display: block;
transition: 1.5s;

::after{
 
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

:hover{
 color: #6231cd;
 transition: width 0.6s cubic-bezier(0.25, 1, 0.5, 1) 0s;
}
:hover::after{
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
    border-color:#6231cd ;
    color:  #e1e1e6;
    background: var(--background);
    text-transform: uppercase;
    transition: all .3s ease;
    
  

  @media (min-width: 320px){
    padding: 12px 24px;
    justify-content: center;
}

  :hover {
    color: white;
    background-color: #6231cd  ;
    box-shadow: rgb(100 100 111 / 50%) 0 7px 29px 0;
    
  }
`;






const Navbar = () => {



  return (
    <Section>
      <Container className="navbar  fixed-top">
        <Links >

          <a class="nav-link" href="./#hero">
            <Logo src="./img/logo.png" />
          </a>


          <List class="nav-link">
            <a class="nav-link" href="./#hero" >
              <ListItem>Início</ListItem>
            </a>

            <a class="nav-link" href="./#who">
              <ListItem>Sobre</ListItem>
            </a>
            <a class="nav-link" href="./#works">
              <ListItem>Trabalhos</ListItem>
            </a>
            <a class="nav-link" href="./#contact" >
              <ListItem>Contato</ListItem>
            </a>
          </List>



        </Links>


        <a href="mailto:anthonythomascontato@gmail.com" target="_blank" >
          <Button>
            Contrate agora!
          </Button>
        </a>
      </Container>
    </Section>
  );
};

export default Navbar;



