import React, { createContext, useState } from 'react';
import app from '../firebase/firebase.init';
import {createUserWithEmailAndPassword, getAuth} from 'firebase/auth'

export const AuthContext = createContext();

const auth= getAuth(app);
const UserContext = ({children}) => {
    const [user, setUser]= useState({displayName:'Sizan'})
    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const authInfo = {user, createUser}
    return (
                    <AuthContext.Provider value={authInfo}>
                        {children}
            </AuthContext.Provider>
        
    );
};

export default UserContext;