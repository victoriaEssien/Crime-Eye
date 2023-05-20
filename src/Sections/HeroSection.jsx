
import { Link } from "react-router-dom"
import Button from 'react-bootstrap/Button';


function HeroSection() {
  return (
    <div>
        <h1>Welcome to Crime Eye</h1>
        <div>
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