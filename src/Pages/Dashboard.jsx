
import supabase from '../client';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

// Components
import AppNavBar from '../Components/AppNavBar';

function Dashboard({token}) {

    let navigate = useNavigate()
    const [updatedPoints, setUpdatedPoints] = useState(token.user.user_metadata.points)

    function handleLogOut() {
        sessionStorage.removeItem('token')
        navigate('/login')
    }

    async function handleIncrementPoints() {
      try {
        const newPoints = token.user.user_metadata.points + 1;
    
        // Update the user metadata in Supabase
        const { error } = await supabase.auth.updateUser({
          data: { points: newPoints },
        });
    
        if (error) {
          // Handle error
          console.log(error);
        } else {
          // Update the state with the new points value
          setUpdatedPoints(newPoints);
    
          // Update the user object with the new points value
          const updatedUser = { ...token.user, user_metadata: { ...token.user.user_metadata, points: newPoints } };
    
          // Update the token in session storage with the updated user object
          const updatedToken = { ...token, user: updatedUser };
          sessionStorage.setItem('token', JSON.stringify(updatedToken));
        }
      } catch (error) {
        // Handle error
        console.log(error);
      }
    }
    

    
  return (
    <div>
      <AppNavBar onClick={handleLogOut}/>
        <div>
          <h1>Welcome, {token.user.user_metadata.full_name}</h1>
          <p>You have {updatedPoints} points</p>
          <button onClick={handleIncrementPoints}>Increment points</button>

        </div>
    </div>
  )
}

export default Dashboard