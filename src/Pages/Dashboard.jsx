
import { useNavigate } from 'react-router-dom';

// Components
import AppNavBar from '../Components/AppNavBar';
import QuizCard from '../Components/QuizCard';

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'


function Dashboard({token}) {

    let navigate = useNavigate()
  
    function handleLogOut() {
        sessionStorage.removeItem('token')
        navigate('/login')
    }
    
  return (
    <div className='dash-body-whole'>
      <AppNavBar onClick={handleLogOut}/>
        <div className='dashboard'>
          <h6 className='user-name'>Welcome, {token.user.user_metadata.full_name}</h6>
          <div className="quiz-headings">
            <h1 className='dash-header'>Your Dashboard</h1>
            <p>{token.user.user_metadata.points} points <FontAwesomeIcon className='star' icon={faStar}></FontAwesomeIcon></p>
          </div>
          <section className='quiz-body'>
            <div className="quiz-box">
              <h3 className='recent'>Quizzes</h3>
            </div>
            <div className='quizzes'>
              <div className='quiz-grid'>
                <QuizCard title="Phishing Scam" description="How much do you know about Phishing?" destination="/phishing"/>
                <QuizCard title="Identity Theft" description="How much do you know about Identity Theft?"/>
                <QuizCard title="Credit Card Fraud" description="How much do you know about Credit Card Fraud?"/>
                <QuizCard title="Donation Scam" description="How much do you know about Donation Scam?"/>
                <QuizCard title="Investment Fraud" description="How much do you know about Investment Fraud?"/>
                <QuizCard title="Romance Scam" description="How much do you know about Romance Scam?"/>
              </div>
            </div>
          </section>

        </div>
    </div>
  )
}

export default Dashboard