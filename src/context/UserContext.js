import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.init';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'

export const AuthContext = createContext();

const auth= getAuth(app);
const UserContext = ({children}) => {
    const [user, setUser]= useState({displayName:'Sizan'})
    const googleProvider =new GoogleAuthProvider()
    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const userSignIn = (email, password) =>{
        return signInWithEmailAndPassword(auth,email,password);
    }
    useEffect(()=>{
        const unsubscribe= onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
            console.log(user)
        })
        return () =>{
            unsubscribe();
        }
    },[ ])

    const signInWithGoogle =() =>{
       return signInWithPopup(auth,googleProvider)
    }
    const logOut = () =>{
        signOut(auth)
    }
    const authInfo = {user, createUser,userSignIn,logOut,signInWithGoogle}
    return (
                    <AuthContext.Provider value={authInfo}>
                        {children}
            </AuthContext.Provider>
        
    );
};

export default UserContext;