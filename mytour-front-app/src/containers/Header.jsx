//import React from 'react'
import {Navbar, Nav, NavDropdown, Form, FormControl, Container} from 'react-bootstrap'

const Header = () => {
    return (
      <Navbar 
        bg="light" 
        expand="lg"
        sticky="top">
        <Container style={{justifyContent: 'space-around'}}>
          <Navbar.Brand href="/">MYTOUR</Navbar.Brand>
          <Nav>
            <Nav.Link href="/review">리뷰</Nav.Link>
            <Nav.Link href="/mytour">MYTOUR계획</Nav.Link>
            <Nav.Link href="/login">로그인</Nav.Link>
            <Nav.Link href="/signup">회원가입</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    )
}


export default Header;