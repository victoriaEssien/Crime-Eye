
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

function SignUp() {
  return (
    <div>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="text" size='lg' placeholder="Enter your full name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" size='lg' placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" aria-describedby='passwordHelpBlock' size='lg' placeholder="Enter your password" />
            </Form.Group>

            <Form.Text id="passwordHelpBlock" muted>
            Your password must be 8-16 characters long, contain letters and numbers, and must not contain spaces or emoji.
            </Form.Text>

            <div className='d-grid'>
                <Button type='submit'>Create Account</Button>
            </div>
            <p>Already have an account? <Link to="/login">Log in</Link></p>
        </Form>
    </div>
  )
}

export default SignUp