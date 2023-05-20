
import { Link } from "react-router-dom"
import Button from 'react-bootstrap/Button';

// Components

import NavBar from "../Components/NavBar";


function HeroSection() {
  return (
    <div className="hero-section">
      <NavBar />
        <h1>Equipping Users to Outsmart Scammers</h1>
        <p>Crime Eye helps users to stay one step ahead of scammers by providing an easy-to-use platform for learning about their latest tricks and reporting to the authorities.</p>
        <div className="hero-cta">
        <Link to="/register">
            <Button>Get Started</Button>
        </Link>

        <Link to="/login">
            <Button>Log in</Button>
        </Link>
        </div>
    </div>
  )
}

export default HeroSection