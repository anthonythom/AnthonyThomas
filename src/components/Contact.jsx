import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";


const Section = styled.div`
  height: 100vh;
 
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;

  justify-content: space-between;
  gap: 50px;
  
`;

const Left = styled.div`
    box-shadow: rgb(100 100 111 / 20%) 0 7px 29px 0;


    background-color:  #202024;
display: flex;
justify-content: center;
    width: 40%;
    height: 100%;
    border-radius: 5px;
    margin: 5rem auto 0 auto;



  @media only screen and (max-width: 768px) {
    justify-content: center;
  }
`;

const Title = styled.h1`
margin-top: 4.5rem;
display: flex;
font-size: 50px;
  font-weight: 200px;
  justify-content: center;

  
`;
const Line = styled.img`
 width: 30px;
  margin-left: 25vh;
  display: flex;
align-items: center;
 justify-items: center;
  justify-content: center;

`;


const Desc = styled.p`
font-size: 20px;
  

  
  display: flex;
text-align: center;
  
`;
const Form = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 25px;
  @media only screen and (max-width: 768px) {
    width: 300px;
  }
`;

const Input = styled.input`
  padding: 20px;
  background-color:#121214;
  border: none;
  border-radius: 5px;
  color:  #e1e1e6;
`;

const TextArea = styled.textarea`
  padding: 20px;
  border: none;
  border-radius: 5px;
   color:  #e1e1e6;
  background-color:#121214;
`;

const Button = styled.button`

width: 100%;
    height: 55px;
    cursor: pointer;
    font-size: 14px;
    font-weight: 700;
    line-height: 19px;
    text-align: center;
    border: 1px;
    border-style: solid;
    border-radius: 5px;
    border-color:#6231cd ;
    color:  #e1e1e6;
    background-color:#121214;
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



const Contact = () => {
  const ref = useRef();
  const [success, setSuccess] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_du2spom",
        "template_v5bjspl",
        ref.current,
        "yM1q9gUGf8cqrIn4F"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
        },
        (error) => {
          console.log(error.text);
          setSuccess(false);
        }
      );
  };
  return (
    <Section id="contact" className="header_link">
      <Container>
        <Left>
          <Form ref={ref} onSubmit={handleSubmit}>
            <Title>Contato</Title>

            <Line src="./img/line.png" />

            <Desc>
              Sinta-se à vontade para entrar em contato comigo enviando o formulário abaixo e retornarei o mais breve possível.</Desc>
            <Input placeholder="Nome" name="name" />
            <Input placeholder="Email" name="email" />
            <TextArea
              placeholder="Escreva sua mensagem:"
              name="message"
              rows={10}
            />
            <Button type="submit">Enviar</Button>
            {success &&
              "Sua mensagem foi enviada com sucesso! Em breve retornaremos :)"}
          </Form>
        </Left>

      </Container>
    </Section>
  );
};

export default Contact;