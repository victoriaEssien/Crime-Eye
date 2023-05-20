
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

import InputGroup from 'react-bootstrap/InputGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'


function Login() {

  // const [email, setEmail] = useState('')
  // const [password, setPassword] = useState('')
  const [passwordVisible, setPasswordVisible] = useState(false)


  function handlePasswordVisibility() {
    setPasswordVisible(!passwordVisible)
  }


  return (
    <div className='form-container'>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control className='input' type="email" size='lg' placeholder="Enter email" required/>
            </Form.Group>

            <Form.Label htmlFor="pass">Password</Form.Label>
            <InputGroup className="mb-3" size="lg">
            <Form.Control id="pass" className="pass-input" type={passwordVisible ? "text" : "password"} size="lg" required/>
            <InputGroup.Text>
              <FontAwesomeIcon className="password-icon" onClick={handlePasswordVisibility} icon={passwordVisible ? faEyeSlash : faEye} />
            </InputGroup.Text>
            </InputGroup>

            <div className='d-grid'>
                <Button type='submit' className='auth-btn'>Login</Button>
            </div>
            <p className='helper-text'>Don&apos;t have an account? <Link to="/register" className='helper-link'>Register</Link></p>
        </Form>
    </div>
  )
}

export default Login