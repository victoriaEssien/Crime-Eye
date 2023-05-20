
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"

import { SignUp, Login, HeroSection } from "./index"

function LandingPage() {
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
                <Route path="/login" element={<Login />} />
            </Routes>
        </div>
    </Router>
  )
}

export default LandingPage