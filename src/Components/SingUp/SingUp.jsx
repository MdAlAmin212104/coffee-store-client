import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const SingUp = () => {
      const {createUser} = useContext(AuthContext)

      const handleSingUp = e => {
            e.preventDefault();
            const form = e.target;
            const email = form.email.value;
            const password = form.password.value;
            console.log(email, password);
            createUser(email, password)
                  .then(res => {
                        console.log(res.user)
                        const createdAt = res.user?.metadata?.creationTime;
                        const user = { email, createdAt: createdAt }
                        fetch('http://localhost:5000/user', {
                              method: 'POST',
                              headers: {
                                    'Content-Type': 'application/json'
                              },
                              body: JSON.stringify(user)
                        })
                              .then(res => res.json())
                              .then(data => {
                                    console.log(data);
                              })
                  })
                  .catch(err => console.error(err))
            form.reset();

      }
      return (
            <div className="hero bg-base-200">
            <div className="hero-content flex-col">
            <div className="text-center">
                  <h1 className="text-5xl font-bold">Sing Up!</h1>
            </div>
            <div className="card shrink-0 w-full  shadow-2xl bg-base-100">
                  <form onSubmit={handleSingUp} className="card-body">
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
                        <label className="label">
                              <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                        </div>
                        <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                        </div>
                  </form>
            </div>
            </div>
            </div>
      );
};

export default SingUp;