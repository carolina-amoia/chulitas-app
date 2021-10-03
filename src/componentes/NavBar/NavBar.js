import React from 'react'

import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'


export const NavBar = ( ) => {


  return (
    <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
    <Navbar.Brand href="#home"> 
    
      <img
        src="https://tse1.mm.bing.net/th?id=OIP.PJCiLflzVUn9-_sT4cn8IQHaH5&pid=Api&P=0&w=300&h=300"
        width="60"
        height="80"
        className="d-inline-block align-top"
        alt="logo"
      />
    </Navbar.Brand>

          <Nav className="barra-navegacion">
            <Nav.Link href="#">Nosotros</Nav.Link>
            <Nav.Link href="#">La Tienda</Nav.Link>
            <Nav.Link href="#">Contacto</Nav.Link>
          </Nav>
          </Container>

          <img
        src="https://images.vexels.com/media/users/3/132104/isolated/preview/5f2ebb95984bf47ea01319291eb81f68-icono-de-silueta-de-carrito-de-compras-by-vexels.png"
        width="100"
        height="80"
        className="d-inline-block align-top"
        alt="logo"
      />
    </Navbar>



  )
}