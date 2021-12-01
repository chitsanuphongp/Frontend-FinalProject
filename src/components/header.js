import React from 'react'
import { Navbar, Container, Nav, Button, } from 'react-bootstrap'
import { BsFillHouseFill, BsBasketFill, BsSearch } from "react-icons/bs";

export default function Header() {

       return (
                <Navbar expand="md" bg="light" variant="light" fixed="top" >
                <Container>
                    <Navbar.Brand href="/"><h3>LOTTO</h3></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Container className="d-flex justify-content-end text-end">
                            <Nav>
                            <Nav.Link href="/"><BsFillHouseFill style={{ margin:3 }}/> หน้าหลัก </Nav.Link>
                            <Nav.Link href="/lottery"><BsBasketFill style={{ margin:3 }}/> ซื้อลอตเตอรี่ </Nav.Link>
                            <Nav.Link href="/checkprize"><BsSearch style={{ margin:3 }}/> ตรวจรางวัล </Nav.Link>
                            <Button className="m-2 me-0 mt-0" variant="dark" href="/login">ลงชื่อเข้าใช้</Button>
                            </Nav>  
                        </Container>
                    </Navbar.Collapse>
                    
                </Container>

                </Navbar>

        ) 
    
}
