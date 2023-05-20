import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
    display:flex;
    justify-content:center;
`

const Container = styled.div`
    width: 1400px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding: 10px;
`
const Links = styled.div`
    display:flex;
    align-items:center;
    gap:50px;
`

const Icons = styled.div`
   
`

const Logo = styled.img`
   height: 50px;
`

const List = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
    display:flex;
    gap: 20px;
`
const ListItem = styled.li`
margin: 0 0 10px 0;
`

const Icon = styled.img`
   
`

const Button = styled.button`
   
`
const Navbar = () => {
  return (
    <Section>
        <Container>
            <Links>
            <Logo src="./img/logo.png"/>
            
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Studio</ListItem>
                <ListItem>Works</ListItem>
                <ListItem>Contact</ListItem>
            </List>
            </Links>
            <Icons>
                <Icon src="./img/search.png" />
                <Button>Hire Now</Button>
            </Icons>
        </Container>
    </Section>
  )
}

export default Navbar