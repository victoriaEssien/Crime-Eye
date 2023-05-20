
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div>
        <Navbar expand="lg" className="nav-bar">
            <Container>
            <Navbar.Brand href="#home" className='logo'>Crime Eye</Navbar.Brand>
            <Navbar.Toggle className='menu' aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto links">
            <Nav.Link href="#home" className='nav-links'>Home</Nav.Link>
            <Nav.Link href="#link" className='nav-links'>About</Nav.Link>
            <Nav.Link href="#link" className='nav-links'>User guide</Nav.Link>
            <Nav.Link href="#link" className='nav-links'>Features</Nav.Link>
            </Nav>
            <Nav className='ms-auto links'>
                <Link to="/register">
                    <button type="button" className='nav-btn'>Get Started</button>
                </Link>
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default NavBar