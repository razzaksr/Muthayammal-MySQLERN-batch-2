import { Container, Nav, Navbar } from "react-bootstrap"

const ReactMenu=()=>{
    return(
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="/">React Menu</Navbar.Brand>
                    <Navbar.Toggle aria-controls="mymenu" />
                    <Navbar.Collapse id="mymenu">
                    <Nav className="ms-auto">
                        <Nav.Link href="/who">Name</Nav.Link>
                        <Nav.Link href="/skill">Expertise</Nav.Link>
                        <Nav.Link href="/role">Role</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default ReactMenu