import React, { useContext } from 'react';
import { AuthContext } from '../../context/UserContext';

const Home = () => {
    const {user} = useContext(AuthContext)
    return (
        <div>
            <h1>Home</h1>
            {user?.email &&<span>Welcome {user.email} </span>}
        </div>
    );
};

export default Home;