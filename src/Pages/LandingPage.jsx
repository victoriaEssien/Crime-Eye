
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import { useEffect, useState } from "react"
import { SignUp, Login, HeroSection, VerifyEmail, Dashboard, Phishing } from "./index"

function LandingPage() {

    const [token, setToken] = useState(false)

    if(token) {
        sessionStorage.setItem('token', JSON.stringify(token))
    }

    useEffect(() => {
        if (sessionStorage.getItem('token')) {
            let data = JSON.parse(sessionStorage.getItem('token'))
            setToken(data)
        }
    },[])

  return (
    <Router>
        <div>
            <Routes>
                <Route exact path="/" element={
                    <>
                        <HeroSection />
                    </>
                }>
                </Route>
                <Route path="/register" element={<SignUp />}/>
                <Route path="/login" element={<Login setToken={setToken}/>} />
                {token?<Route path="/home" element={<Dashboard token={token}/>} />:""}
                <Route path="/verify" element={<VerifyEmail />} />
                <Route path="/phishing" element={<Phishing />} />
                {/* {token?<Route path="/phishing-one" element={<Phishing token={token}/>} />:""} */}
            </Routes>
        </div>
    </Router>
  )
}

export default LandingPage