
import { Link } from "react-router-dom"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

// Components

import NavBar from "../Components/NavBar";


function HeroSection() {
  return (
    <div className="hero-section">
      <NavBar />
      <Container fluid='md' className="hero-container">
            <Row>
                <Col>
                    <h1 className="hero-header">Equipping users to <span className="red">outsmart scammers</span></h1>
                    <p className="hero-subheader">Crime Eye helps users to stay one step ahead of scammers by providing an easy-to-use platform for learning about their latest tricks and reporting to the authorities.</p>
                    <div className="hero-cta">
                        <Link to="/register" className='navigation-link'>
                        <button className="primary-btn">Get Started</button>
                        </Link>
                        <Link to="/login" className='navigation-link'>
                        <button className="secondary-btn">Log in</button>
                        </Link>
                    </div>
                </Col>

                <Col md={6}>
                    <img src="" alt="Hero image" className="hero-img"/>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default HeroSection