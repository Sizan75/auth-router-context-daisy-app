import React, { useContext } from 'react';
import { Form, Link } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';

const Register = () => {
    const {createUser,signInWithGoogle}=useContext(AuthContext)
    const handleSubmit = event =>{
        event.preventDefault();
        const form = event.target;
        const name= form.name.value;
        const email= form.email.value;
        const password= form.password.value;
        console.log(email, password,name)
        createUser(email,password)
        .then(result =>{
            const user=result.user;
            console.log(user)
        })
        .catch(error => {
            console.error(error)
        })
    }
    const handlesignInWithGoogle = () =>{
        signInWithGoogle()
        .then(result =>{
            const user=result.user;
            console.log(user)
        })
        .catch(error =>console.error(error)) 
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register now!</h1>

                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <Form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                     
                        <label className="label">
                        <p><small>Already have an account?</small>
                                    <Link to="/login" className="text-blue-500 link link-hover">Log In</Link>
                                    </p>
                                </label>

                            </div>
                        </Form>
                        <button onClick={handlesignInWithGoogle} className="btn btn-active btn-accent">Google</button>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Register;