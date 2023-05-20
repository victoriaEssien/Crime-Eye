
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" size='lg' placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" aria-describedby='passwordHelpBlock' size='lg' placeholder="Enter your password" />
            </Form.Group>

            <div className='d-grid'>
                <Button type='submit'>Login</Button>
            </div>
            <p>Don&apos;t have an account? <Link to="/register">Register</Link></p>
        </Form>
    </div>
  )
}

export default Login