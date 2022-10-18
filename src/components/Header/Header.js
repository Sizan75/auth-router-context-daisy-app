import { signOut } from 'firebase/auth';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';

const Header = () => {
    const {user, logOut}= useContext(AuthContext)
    console.log(user)
    const handleLogOut = () =>{
        logOut()
        .then(()=>{
            console.log('log out successfully')
        })
        .catch(error => console.log(error))
    }
    return (
        <div>
            <div className="navbar bg-primary text-primary-content">
          <Link to='/' className="btn btn-ghost normal-case text-xl">Awsome Auth</Link>
        <Link to='/' className="btn btn-ghost normal-case text-xl">Home</Link>
        <Link to='/login' className="btn btn-ghost normal-case text-xl" >Log In</Link>
        <Link to='/register'className="btn btn-ghost normal-case text-xl">Register</Link>
        {user?.email &&<span>Welcome {user.email} </span>}
        {user?.email ? 
            <button onClick={handleLogOut}className="btn btn-primary">LogOut</button>
        : <Link to='/login'><button className="btn btn-primary">LogIn</button></Link>
        }
       </div>
        </div>
    );
};

export default Header;