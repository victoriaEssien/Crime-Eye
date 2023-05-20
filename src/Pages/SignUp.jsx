
import { useState } from "react"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

import InputGroup from 'react-bootstrap/InputGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'

function SignUp() {

    // const [formError, setFormError] = useState(null)

    const [passwordVisible, setPasswordVisible] = useState(false)


    function handlePasswordVisibility() {
        setPasswordVisible(!passwordVisible)
    }

  return (
    <div className="form-container">
        <Form>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Full Name</Form.Label>
                <Form.Control className="input" type="text" size='lg' placeholder="Enter your full name" required/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control className="input" type="email" size='lg' placeholder="Enter email" required/>
            </Form.Group>

            <Form.Label htmlFor="pass">Password</Form.Label>
            <InputGroup className="mb-3" size="lg">
            <Form.Control id="pass" className="pass-input" type={passwordVisible ? "text" : "password"} name="password" size="lg" required/>
            <InputGroup.Text>
              <FontAwesomeIcon className="password-icon" onClick={handlePasswordVisibility} icon={passwordVisible ? faEyeSlash : faEye} />
            </InputGroup.Text>
            </InputGroup>

            <Form.Text id="passwordHelpBlock" className="form-text" muted>
            Your password must be 8-16 characters long, contain letters and numbers, and must not contain spaces or emoji.
            </Form.Text>

            <div className='d-grid'>
                <Button type='submit' className="auth-btn">Create Account</Button>
            </div>
            <p className="helper-text">Already have an account? <Link className="helper-link" to="/login">Log in</Link></p>
        </Form>
    </div>
  )
}

export default SignUp