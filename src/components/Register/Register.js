import React from 'react';
import { Form, Link } from 'react-router-dom';

const Register = () => {

    const handleSubmit = event =>{
        event.preventDefault();
        const form = event.target;
        const name= form.name.value;
        const email= form.email.value;
        const password= form.password.value;
        console.log(email, password,name)
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
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Register;