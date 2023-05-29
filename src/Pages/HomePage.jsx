

import { Link, useNavigate } from 'react-router-dom';

import AppNavBar from '../Components/AppNavBar';

function HomePage({token}) {

    let navigate = useNavigate()

    function handleLogOut() {
        sessionStorage.removeItem('token')
        navigate('/login')
    }
    
  return (
    <div>
      <AppNavBar onClick={handleLogOut}/>
        <h1>Welcome, {token.user.user_metadata.full_name}</h1>
    </div>
  )
}

export default HomePage