import React, { useState } from "react";
import "../css/bootstrap.min.css";
import "../css/main.css";
import register from "../img/pexels-photo-6457561.jpeg";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginSuccess } from "../store/redux/authSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Call login API endpoint
    const data = fetch("http://localhost:3000/user/login", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    let res = data.json();
   return dispatch(loginSuccess({res}))
  };

  // navigate
  const userSignIn = () => {
    navigate("/register");
  };
  return (
    <>
      <div class="container-fluid bg-secondary px-0">
        <div class="row g-0">
          <div class="col-lg-6 py-6 px-5">
            <h1 class="display-5 mb-4">Log in</h1>
            <form onSubmit={handleSubmit}>
              <div class="row g-3">
                <div class="col-12">
                  <div class="form-floating">
                    <input
                      required
                      type="email"
                      class="form-control"
                      id="form-floating-2"
                      placeholder="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <label htmlFor="form-floating-2">Email address</label>
                  </div>
                </div>
                <div class="col-12">
                  <div class="form-floating">
                    <input
                      required
                      type="password"
                      class="form-control"
                      id="form-floating-3"
                      placeholder="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <label htmlFor="form-floating-3">Password</label>
                  </div>
                </div>

                <div class="col-12">
                  <ToastContainer />

                  <button class="btn btn-primary w-100 py-3 mt-4" type="submit">
                    Submit
                  </button>
                  <p className="text-center mt-4">
                    {" "}
                    Not a member?{" "}
                    <a
                      class="text-body py-2 "
                      onClick={userSignIn}
                      style={{ textDecoration: "underline", cursor: "pointer" }}
                    >
                      Signup now{" "}
                    </a>
                  </p>
                </div>
              </div>
            </form>
          </div>
          <div class="col-lg-6" style={{ minHeight: "10px" }}>
            <div class="position-relative h-100 ">
              <img src={register} class="img-fluid w-100 h-100" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
