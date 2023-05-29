

import { useNavigate } from 'react-router-dom';

import AppNavBar from '../Components/AppNavBar';

function Dashboard({token}) {

    let navigate = useNavigate()

    function handleLogOut() {
        sessionStorage.removeItem('token')
        navigate('/login')
    }
    
  return (
    <div>
      <AppNavBar onClick={handleLogOut}/>
        <div>
          <h1>Welcome, {token.user.user_metadata.full_name}</h1>
        </div>
    </div>
  )
}

export default Dashboard