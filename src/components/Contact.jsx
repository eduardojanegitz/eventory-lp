import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import Map from './Map';
import emailjs from '@emailjs/browser';


const Section = styled.div`
    height: 100vh;
    scroll-snap-align: center;
`;
const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    gap: 50px;
`;

const Left = styled.div`
   flex: 1;
   display: flex;
   align-items: center;
   justify-content: flex-end;

   @media only screen and (max-width: 768px) {
    justify-content: center;
   }
`;

const Title = styled.h1`
   font-weight: 200;
`;

const Input = styled.input`
   padding: 20px;
   background-color: #F0F0F0;
   border: none;
   border-radius: 5px;
`;

const TextArea = styled.textarea`
   padding: 20px;
   background-color: #F0F0F0;
   border: none;
   border-radius: 5px;
`;

const Button = styled.button`
   background-color: #da4ea2;
   border: none;
   border-radius: 5px;
   color: #FFF;
   font-weight: bold;
   padding: 20px;
   cursor: pointer;
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

const Right = styled.div`
   flex: 1;

   @media only screen and (max-width: 768px) {
    display: none;
   }
`;

const Contact = () => {
  const ref = useRef();
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_b3fkq1m", "template_rg3pq8i", ref.current, "XjIAlJflG5LEd35gy")
      .then((result) => {
        console.log(result.text);
        setSuccess(true)
      }, (error) => {
        console.log(error.text);
        setSuccess(false)
      });
  }
  return (
    <Section>
      <Container>
        <Left>
          <Form ref={ref} onSubmit={handleSubmit}>
            <Title>Contate-nos</Title>
            <Input placeholder="Nome" name="name" />
            <Input placeholder="E-mail" name="email" />
            <TextArea placeholder="Escreva a sua mensagem" rows={10} name="message" />
            <Button type="submit">Enviar</Button>
            {
              success && "Sua mensagem foi enviada. Retornaremos o mais rápido possível :)"
            }
          </Form>
        </Left>
        <Right>
          <Map />
        </Right>
      </Container>
    </Section>
  )
}

export default Contact;