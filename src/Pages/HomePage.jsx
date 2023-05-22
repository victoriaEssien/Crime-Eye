

import { Link, useNavigate } from 'react-router-dom';

function HomePage({token}) {

    let navigate = useNavigate()

    function handleLogOut() {
        sessionStorage.removeItem('token')
        navigate('/login')
    }
    
  return (
    <div>
        <h1>Welcome, {token.user.user_metadata.full_name}</h1>
        <Link as={Link} to="/login" onClick={handleLogOut} className='log-in-link'>Log out</Link>
    </div>
  )
}

export default HomePage