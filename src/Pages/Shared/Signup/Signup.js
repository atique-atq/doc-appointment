import React, { useState } from "react";
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { AuthContext } from "../../../contexts/AuthProvier/AuthProvider";
import Loading from "../Loading/Loading";
import useToken from "../../../hooks/useToken";

const SignUp = () => {
  const [error, setError] = useState("");
  const { createUser, loading } = useContext(AuthContext);
  const [createdUserEmail, setCreatedUserEmail] = useState('');
  const [token] = useToken(createdUserEmail);
  const navigate = useNavigate();

  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  if(token){
      navigate(from, { replace: true });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value.toLowerCase();
    const confirm = form.confirmPassword.value;

    if (password.length < 6) {
      setError("Password should be 6 characters or more.");
      toast.error("Password should be 6 characters or more.");
      return;
    }

    if (password !== confirm) {
      toast.error("Your Password did not match");
      setError("Your Password did not match");
      return;
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
        form.reset();
        saveUser(name, email);
          toast.success("Registration Successful", {
          position: "top-right",
        });
        toast.success("Registration Successful", {
          position: "top-right",
        });
        form.reset();
      })
      .catch((e) => {
        toast.error(e.message);
        setError(e.message);
      });
  };

  const saveUser = (name, email) => {
    const user = { name, email };
    fetch("https://doctor-appointment-server-eight.vercel.app/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        setCreatedUserEmail(email);
      });
  };

  return (
    <div className="my-8" style={{ minHeight: "100vh" }}>
      <>{loading && <Loading></Loading>}</>
      <div className="hero w-full my-5 rounded-lg">
        <div className="hero-content flex-col lg:flex-row justify-center">
          <div className="card w-96 flex-shrink-0 max-w-sm shadow-2xl bg-base-100 py-6">
            <h6 className="text-3xl text-center font-bold py-0 my-0 text-green-700">
              Register/ Sign UP
            </h6>
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <input
                  type="text"
                  name="name"
                  placeholder="your name"
                  className="input input-bordered rounded-none"
                  required
                />
              </div>

              <div className="form-control">
                <input
                  type="email"
                  name="email"
                  placeholder="your email"
                  className="input input-bordered rounded-none"
                  required
                />
              </div>

              <div className="form-control">
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered rounded-none"
                  required
                />
              </div>

              <div className="form-control">
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm password"
                  className="input input-bordered rounded-none"
                  required
                />
              </div>

              <div className="form-control py-0 my-0">
                <input
                  className="btn btn-info hover:bg-success rounded-none"
                  type="submit"
                  value="Sign Up"
                />
              </div>
            </form>
            <p className="text-red-500 font-bold text-center">{error}</p>
            <p className="text-center mb-2 mt-0">
              Already Have an Account?{" "}
              <Link className="text-green-700 text-lg font-bold" to="/login">
                Login
              </Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
