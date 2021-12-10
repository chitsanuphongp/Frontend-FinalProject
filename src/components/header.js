import React from 'react'
import { Navbar, Container, Nav, Button, NavDropdown, } from 'react-bootstrap'
import { BsFillHouseFill, BsBasketFill, BsSearch, BsDoorOpenFill, BsClipboardCheck } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";

export default function Header() {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => ({...state}));
    console.log(user)

    const logout = () => {
        dispatch({
            type: 'LOGOUT',
            payload: null
        })
    }

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
                            {!user && (
                                <Button className="m-2 me-0 mt-0" variant="dark" href="/login">ลงชื่อเข้าใช้</Button>
                            )}
                            {user && (
                                <NavDropdown
                                align= "end"
                                title= {user.user}
                                >
                                    <NavDropdown.Item href="/history"><BsClipboardCheck  style={{ margin:3 }}/> ประวัติการสั่งซื้อ</NavDropdown.Item>
                                    <NavDropdown.Item variant="danger" onClick={logout}><BsDoorOpenFill style={{ margin:3 }}/> ลงชื่อออก</NavDropdown.Item>
                                </NavDropdown> 
                            )} 
                            </Nav>
                        </Container>
                    </Navbar.Collapse>
                    
                </Container>

                </Navbar>

        ) 
    
}
