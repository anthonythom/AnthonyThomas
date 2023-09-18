import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";

const Section = styled.div`
  height: 100vh;
  
`;

const Container = styled.div`
  margin-top: 250px;
  width: 100%;
  height: 87%;
  display: flex;

  justify-content: space-between;
  gap: 50px;
`;

const Left = styled.div`
  background-color: #a984f8;
  box-shadow: 0 8px 32px 0 rgba(17, 17, 17, 0.37);
  backdrop-filter: blur(4.5px);
  -webkit-backdrop-filter: blur(13.5px);
  border-radius: 10px 10px 0px 0px;
  border: 1px solid rgba(16, 16, 16, 0.35);
  display: flex;
  justify-content: center;
  width: 37%;
  height: 100%;
  border-radius: 5px;
  margin: 5rem auto 0 auto;

  @media (max-width: 768px) {
    width: 100%;
    height: 150%;
    border-radius: 10px;
  }
`;

const Title = styled.h1`
  margin-top: 35px;
  display: flex;
  font-size: 3rem;
  font-weight: 200px;
  justify-content: center;
  color: #ffffff;
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
color: white;
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
  background-color: #cbb3fe52;
  border: none;
  border-radius: 5px;
  color: #fcfcfc;
`;

const TextArea = styled.textarea`
  padding: 20px;
  border: none;
  border-radius: 5px;
   color: #fcfcfc ;
  background-color: #cbb3fe52;
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
  color: #fcfcfc;
  background: #b7e69c;
  text-transform: uppercase;
  transition: all 0.3s ease;

  @media (min-width: 320px) {
    padding: 12px 24px;
    justify-content: center;
  }

  :hover {
    color: #ffffff;
    background-color: #ebf884;
    border-color: #ebf884;
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
              Sinta-se à vontade para entrar em contato comigo enviando o
              formulário abaixo e retornarei o mais breve possível.
            </Desc>
            <Input placeholder="Nome" name="name" />
            <Input placeholder="Email" name="email" />
            <TextArea
              placeholder="Escreva sua mensagem:"
              name="message"
              rows={7}
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
