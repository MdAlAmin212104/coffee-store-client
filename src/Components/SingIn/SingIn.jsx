import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const SingIn = () => {

      const { singIn } = useContext(AuthContext);

      const handleSingIn = e => {
            e.preventDefault();
            const form = e.target;
            const email = form.email.value;
            const password = form.password.value;
            console.log(email, password);
            singIn(email, password)
                  .then(res => {
                        console.log(res.user);
                        const user = {
                              email,
                              lastLoggedAt: res.user?.metadata?.lastSignInTime

                        }
                        // update last logged at in database
                        fetch('http://localhost:5000/user', {
                              method: 'PATCH',
                              headers: { 'Content-Type': 'application/json' },
                              body: JSON.stringify(user)
                        })
                              .then(res => res.json())
                              .then(data => {
                                    console.log(data);
                              })
                  })
                  .catch(err => console.error(err));
      }
      return (
            <div className="hero bg-base-200">
            <div className="hero-content flex-col">
            <div className="text-center">
                  <h1 className="text-5xl font-bold">Sing In!</h1>
            </div>
            <div className="card shrink-0 w-full  shadow-2xl bg-base-100">
                  <form onSubmit={handleSingIn} className="card-body">
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
                        <button className="btn btn-primary">Sing In</button>
                        </div>
                  </form>
            </div>
            </div>
            </div>
      );
};

export default SingIn;