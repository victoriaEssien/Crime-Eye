
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function AppNavBar({ onClick }) {
  return (
    <div>
        <Navbar expand="lg" className="navigation-bar">
            <Container>
            <Navbar.Brand href="/" className='logo'>Crime Eye</Navbar.Brand>
            <Navbar.Toggle className='menu' aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto links">
            <Nav.Link href="/home" className='nav-links'>Dashboard</Nav.Link>
            <Nav.Link href="/store" className='nav-links'>Store</Nav.Link>
            </Nav>
            <Nav className='ms-auto links'>
            <Nav.Link as={Link} to="/login" onClick={onClick} className='log-out-link'>Log out</Nav.Link>
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default AppNavBar