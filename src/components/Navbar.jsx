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
  width: 1100px;
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

const Logo = styled.h2`
  height: 50px;
  margin-top: 20px;
`;

const List = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const ListItem = styled.ul`
  cursor: pointer;
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Icon = styled.img`
  width: 20px;
  cursor: pointer;
`;

const Button = styled.button`
  width: 155px;
  padding: 10px;
  background-color: #0073cf;
  color: #fff;
  border: none;
  cursor: pointer;
  border-radius: 5px;
`;

const Navbar = () => {
  return (
    <Section>
      <Container>
        <Links>
          <Logo>EVENTORY.</Logo>
          <List>
            <ListItem>Home</ListItem>
            <ListItem>Trabalho</ListItem>
            <ListItem>Contato</ListItem>
          </List>
        </Links>
        <Icons>
          {/* <Icon src="./img/search.png" /> */}
          <Button>Contate-nos agora</Button>
        </Icons>
      </Container>
    </Section>
  );
};

export default Navbar;
