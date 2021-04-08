import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function Navigation() {
    

    return(
        <>
            <Navbar bg="light" variant="light">
                <Navbar.Brand as={Link} to="/">
                    TopStyle
                </Navbar.Brand>
                <Nav.Link as={Link} to="/clothes">
                    Kläder
                </Nav.Link>
                <Nav.Link as={Link} to="/shoes">
                    Skor
                </Nav.Link>
                <Nav.Link as={Link} to="/account">
                    Konto
                </Nav.Link>
                <Nav.Link as={Link} to="/create-user">
                    Skapa konto
                </Nav.Link>
           </Navbar>
        </>
    );
}