import { Link } from "react-router-dom";
import { useWebshop } from '../../contexts/WebshopContext';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Searchbar from "./Searchbar";
import ShoppingCartHeader from './ShoppingCartHeader';

export default function Navigation() {
    
    const {loggedIn, logOut} = useWebshop();

    const handleClick = (e) => {
        e.preventDefault();
        logOut();
    }

    return(
            <Navbar bg="light" variant="light">

                <Navbar.Brand as={Link} to="/">
                    TopStyle
                </Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to="/clothes">
                        Kläder
                    </Nav.Link>
                    <Nav.Link as={Link} to="/shoes">
                        Skor
                    </Nav.Link>
                    {loggedIn && <Nav.Link as={Link} to="/account">Konto</Nav.Link>}
                    {loggedIn && <Nav.Link as={Link} to="/" onClick={handleClick}>Logga ut</Nav.Link>}
                    {!loggedIn && <Nav.Link as={Link} to="/create-user">Skapa konto</Nav.Link>}
                    {!loggedIn && <Nav.Link as={Link} to="/login">Logga in</Nav.Link>}
                    <Nav.Link as={Link} to="/shopping-cart">
                        <ShoppingCartHeader />
                    </Nav.Link>
                </Nav>
                <Searchbar />
           </Navbar>
    );
}