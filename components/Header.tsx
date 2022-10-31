import {FC} from "react";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Image from "next/image";

const Header: FC = () => (
    <>
            <Navbar collapseOnSelect expand="lg" variant="dark" bg='dark' className={"navbar"}>
                <Container>
                    <Navbar.Brand href="/"><Image src='/Logo.png' alt={'Flag'} width={290} height={90}/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/faq">FAQ</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    </>
);

export default Header;