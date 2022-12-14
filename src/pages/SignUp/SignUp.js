import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import img from "../../assets/images/login/login.svg";
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
const SignUp = () => {
    const {createUser} = useContext(AuthContext)
    const handleSignup = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email,password)
        .then(result => {
            const user = result.user;
            console.log(user)
        })
        .catch(err=>console.error(err))
    }
    return (
        <div className="hero my-20">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left w-1/2">
          <img className="p-20" src={img} alt="" />
        </div>
        <div className="card w-1/2 flex-shrink-0 max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSignup} className="card-body">
            <h1 className="text-5xl font-bold text-center py-5">Sign Up</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name='name'
                placeholder="Your Name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                name='email'
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                name='password'
                placeholder="password"
                className="input input-bordered"
                required
              />
              
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-primary text-white bg-orange-600 border-none" type="submit" value="Signup" />
            </div>
          </form>
          <p className="text-center font-semibold mb-10">Already have an account? <Link className="text-orange-600" to='/login'>Login</Link></p>
        </div>
      </div>
    </div>
    );
};

export default SignUp;