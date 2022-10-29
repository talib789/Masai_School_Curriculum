import React from 'react'
import { Link } from 'react-router-dom';
import { toggleAuth } from '../Redux/action';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
export const Navbar = () => {
    const isLoggedIn = useSelector(store => store.isLoggedIn);
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(toggleAuth());
    }
    return (
        <div>
            <div style={{ display: "flex", gap: "250px", justifyContent: "center", padding: '20px', backgroundColor: 'blue', marginBottom: '10px' }}>
                <Link style={{ color: 'white', textDecoration: 'none' }} to="/">Home</Link>
                <Link style={{ color: 'white', textDecoration: 'none' }} to="/createproduct">Create Product</Link>
                {
                    !isLoggedIn ? (<Link style={{ color: 'white', textDecoration: 'none' }} to="/login">Login</Link>) : <button style={{ border: 'none', fontSize: '16px', cursor: 'pointer', color: 'blue' }} onClick={handleLogout}>Logout</button>
                }
            </div>
        </div>
    )
}
