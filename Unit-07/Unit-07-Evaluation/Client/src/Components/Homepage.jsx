import React from 'react'
import { LoginContext } from '../Context/LoginContext';

function Homepage() {
  const {user} = React.useContext(LoginContext);
  return (
    <div>
        <div className='user-box'>
            {
                user ? "Logged In" : "Not Logged In"
            }
        </div>
    </div>
  )
}

export default Homepage