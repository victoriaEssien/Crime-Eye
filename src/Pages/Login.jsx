
import supabase from '../Client';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';

import InputGroup from 'react-bootstrap/InputGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'


function Login({setToken}) {

  let navigate = useNavigate()
  const [formError, setFormError] = useState(null)
  const [authError, setAuthError] = useState(null)
  const [passwordVisible, setPasswordVisible] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const [formData, setFormData] = useState({
    email: '',password: ''
  })

  useEffect(() => {
    let timer
    if(authError) {
      timer = setTimeout(() => {
        setAuthError(null)
      }, 3000)
    }
    return() => {
      clearTimeout(timer)
    }
  }, [authError])

  function handleChange(event){
    setFormData((prevFormData)=>{
      return{
        ...prevFormData,
        [event.target.name]:event.target.value
      }

    })
  }

  async function handleSubmit(e) {
    e.preventDefault()

    let isFormEmpty = false
    for(const field in formData) {
      if (!formData[field]) {
        isFormEmpty = true
        break;
      }
    }
    if (isFormEmpty) {
      setFormError('Please fill in all fields')
      setTimeout(() => {
        setFormError(null)
      }, 3000)
    } else {
      try {
        setIsLoading(true)
        const { data, error } = await supabase.auth.signInWithPassword({
          email: formData.email,
          password: formData.password,
        })
        setIsLoading(false)
        if (error) throw error
        console.log(data)
        setToken(data)
        // navigate('/register')
    
      } catch(error) {
        console.log(error);
        setAuthError("Invalid login details")
        setIsLoading(false)
      }
    }
  
  }

  function handlePasswordVisibility() {
    setPasswordVisible(!passwordVisible)
  }

  return (
    <div className='form-container'>
      {authError && <p className="error">{authError}</p>}
        <Form>
          {formError && <p className="error">{formError}</p>}
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control className='input' type="email" name="email" size='lg' placeholder="Enter email" onChange={handleChange} required/>
            </Form.Group>

            <Form.Label htmlFor="pass">Password</Form.Label>
            <InputGroup className="mb-3" size="lg">
            <Form.Control id="pass" className="pass-input" type={passwordVisible ? "text" : "password"} name="password" size="lg" onChange={handleChange} required/>
            <InputGroup.Text>
              <FontAwesomeIcon className="password-icon" onClick={handlePasswordVisibility} icon={passwordVisible ? faEyeSlash : faEye} />
            </InputGroup.Text>
            </InputGroup>

            <div className='d-grid'>
                <button type='submit' className='auth-btn' onClick={handleSubmit} disabled={isLoading}>
                  {isLoading ? 'Loading...' : 'Login'}
                </button>
            </div>
            <p className='helper-text'>Don&apos;t have an account? <Link to="/register" className='helper-link'>Register</Link></p>
        </Form>
    </div>
  )
}

export default Login