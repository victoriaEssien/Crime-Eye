// import supabase from "../client";
import { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom';
import AppNavBar from "../Components/AppNavBar";
import Form from "react-bootstrap/Form"

function ReportPage() {

    let navigate = useNavigate()

    const [currentStep, setCurrentStep] = useState(1);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [formError, setFormError] = useState(null)
    const [wordCount, setWordCount] = useState(0);

    
    useEffect(() => {
      if (description.length > 0 && description.split(' ').length >= 20) {
        setWordCount(description.split(' ').length);
      }

      let timer
      if(formError) {
        timer = setTimeout(() => {
          setFormError(null)
        }, 3000)
      }
      return() => {
        clearTimeout(timer)
      }
    }, [formError, description])


    function handleLogOut() {
        sessionStorage.removeItem('token')
        navigate('/login')
    }

    function handleNext() {
        if (currentStep < 3) {
            setCurrentStep(currentStep + 1)
        }
    }

    function handlePrevious() {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1)
        }
    }

    function handleSubmit(e) {
        e.preventDefault()
        if (currentStep === 3) {
            // save report to supabase
            // add supabase code here
            console.log(title);
            console.log(description);
            console.log(category);
            console.log("Report sent successfully");
            // Navigate to my cases page
        }
    }

  return (
    <div>
        <AppNavBar onClick={handleLogOut}/>
        <div className="form-container">
          <Form>
            {formError && <p className="error">{formError}</p>}
            {currentStep === 1 && (
                <div>
                    <h3>User Details:</h3>
                    <Form.Group className="mb-3">
                    <Form.Label>Project Title</Form.Label>
                    <Form.Control className="input" type="text" value={title} size="lg" placeholder="ex. Hospital Management System" onChange={(e) => setTitle(e.target.value)} required/>
                    </Form.Group>
                    {/* other parts of the 1st step form should be here */}
                </div>
            )}

            {currentStep === 2 && (
                <div>
                    <h3>Incident Details:</h3>
                    <Form.Group className="mb-3">
                    <Form.Label>Project Description (minimum 20 words)</Form.Label>
                    <Form.Control className="input" as="textarea" rows={3} type="text" value={description} size="lg" placeholder="Tell us what your project is about and what it does" onChange={(e) => setDescription(e.target.value)} required/>
                    </Form.Group>
                    {/* other parts of the 2nd step form should be here */}
                </div>
            )}

            {currentStep === 3 && (
                <div>
                <h3>Suspect(s) Information:</h3>
                    <Form.Select size="lg" name="category" className="input" id="Category" onChange={(e) => setCategory(e.target.value)} required>
                    <option value="">Select a category</option>
                    <option value="Web Development">Web Development</option>
                    <option value="Mobile App Development">Mobile App Development</option>
                    <option value="Cyber Security">Cyber Security</option>
                    <option value="Artificial Intelligence">Artificial Intelligence</option>
                    <option value="Networking">Networking</option>
                    </Form.Select>
                    {/* other parts of the 3rd step form should be here */}
                </div>
            )}

            <div className="progress-bar">{currentStep}/3</div>

            {/* Render previous and next buttons */}

            {currentStep !== 1 && (
                <button className="previous-btn" onClick={handlePrevious}>Previous</button>
            )}

            {currentStep !== 3 && (
                <button className="next-btn" onClick={handleNext}>Next</button>
            )}

            {currentStep === 3 && (
                <div className="d-grid">
                  <button type="submit" className="auth-btn" onClick={handleSubmit}>Send report</button>
                </div>
            )}
          </Form>
      </div>
    </div>
  )
}

export default ReportPage