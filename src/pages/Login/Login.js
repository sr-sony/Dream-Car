import React from "react";
import { Link } from "react-router-dom";
import img from "../../assets/images/login/login.svg";
const Login = () => {

    const handleLogin = (event) => {
        event.preventDefault();
    }
  return (
    <div className="hero my-20">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left w-1/2">
          <img className="p-20" src={img} alt="" />
        </div>
        <div className="card w-1/2 flex-shrink-0 max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <h1 className="text-5xl font-bold text-center py-5">Login</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-primary text-white bg-orange-600 border-none" type="submit" value="LOGIN" />
            </div>
          </form>
          <p className="text-center font-semibold mb-10">New to Dream Car? <Link className="text-orange-600" to='/signup'>Sign Up</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
