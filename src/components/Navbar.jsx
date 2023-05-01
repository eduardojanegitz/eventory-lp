import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
    display: flex;
    justify-content: center;
`;

const Container = styled.div`
    width: 920px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0px;
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;

const Logo = styled.img`
      height: 50px;
`;

const List = styled.ul`
      display: flex;
      gap: 20px;
      list-style: none;
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
      width: 134px;
      padding: 10px;
      background-color: #da4ea2;
      color: #FFF;
      border: none;
      cursor: pointer;
      border-radius: 5px;
`;

const Navbar = () => {
    return (
        <Section>
            <Container>
                <Links>
                    <Logo src="./img/logo.png" />
                    <List>
                        <ListItem>Home</ListItem>
                        <ListItem>Studio</ListItem>
                        <ListItem>Trabalho</ListItem>
                        <ListItem>Contato</ListItem>
                    </List>
                </Links>
                <Icons>
                    <Icon src="./img/search.png" />
                    <Button>Contate-nos agora</Button>
                </Icons>
            </Container>
        </Section>
    )
}

export default Navbar;
