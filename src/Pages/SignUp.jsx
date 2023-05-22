
import supabase from "../Client";
import { useEffect, useState } from "react"
import { Link, useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';

import InputGroup from 'react-bootstrap/InputGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'

function SignUp() {

    let navigate = useNavigate()

    const [formError, setFormError] = useState(null)
  
    const [formData, setFormData] = useState({
      fullName: '',email: '',password: ''
    })
  
    const [passwordVisible, setPasswordVisible] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        let timer
        if(formError) {
          timer = setTimeout(() => {
            setFormError(null)
          }, 3000)
        }
        return() => {
          clearTimeout(timer)
        }
      }, [formError])
    
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
        } else {
          try {
            setIsLoading(true)
            // eslint-disable-next-line no-unused-vars
            const { data, error } = await supabase.auth.signUp(
              {
                email: formData.email,
                password: formData.password,
                options: {
                  data: {
                    full_name: formData.fullName,
                  }
                }
              }
            )
            setIsLoading(false)
            if (error) throw error
            navigate('/verify', {replace: true})
        
          } catch(error) {
            setFormError("Password is too short")
            setIsLoading(false)
          }
        }
      
      }


    function handlePasswordVisibility() {
        setPasswordVisible(!passwordVisible)
    }


  return (
    <div className="form-container">
        <Form>
            {formError && <p className="error">{formError}</p>}
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Full Name</Form.Label>
                <Form.Control className="input" type="text" name="fullName" onChange={handleChange} size='lg' placeholder="Enter your full name" required/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control className="input" type="email" name="email" onChange={handleChange} size='lg' placeholder="someone@gmail.com" required/>
            </Form.Group>

            <Form.Label htmlFor="pass">Password</Form.Label>
            <InputGroup className="mb-3" size="lg">
            <Form.Control id="pass" className="pass-input" type={passwordVisible ? "text" : "password"} name="password" onChange={handleChange} size="lg" required/>
            <InputGroup.Text>
              <FontAwesomeIcon className="password-icon" onClick={handlePasswordVisibility} icon={passwordVisible ? faEyeSlash : faEye} />
            </InputGroup.Text>
            </InputGroup>

            <Form.Text id="passwordHelpBlock" className="form-text" muted>
            Your password must be 8-16 characters long, contain letters and numbers, and must not contain spaces or emoji.
            </Form.Text>

            <div className='d-grid'>
                <button type='submit' className="auth-btn" onClick={handleSubmit} disabled={isLoading}>
                  {isLoading ? 'Loading...' : 'Create Account'}
                </button>
            </div>
            <p className="helper-text">Already have an account? <Link className="helper-link" to="/login">Log in</Link></p>
        </Form>
    </div>
  )
}

export default SignUp