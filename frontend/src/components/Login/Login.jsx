import React,{useState} from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { useDispatch } from "react-redux";
import { userApi } from "../../store/Api";
import { userAddDetails } from "../../store/userAuth";

function Login() {
  const navigate=useNavigate()
  const dispatch = useDispatch()
  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")
const handleSubmit=(e)=>{
  e.preventDefault()

  axios.post(`${userApi}login`,{
    email,
    password
  },{ withCredentials: true }).then((response)=>{
    console.log(response);
    const result=response.data
    if(result){
      dispatch(  userAddDetails({username:result.username}))
      navigate('/');
    }
  }).catch((error)=>{
    console.log(error.response.data.error);
  })
}
  return (
    <div>
    <div class="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
      <div class="row gx-lg-5 align-items-center mb-5">
        <div class="col-lg-6 mb-5 mb-lg-0" style={{ zIndex: 10 }}>
          <h1
            class="my-5 display-5 fw-bold ls-tight"
            style={{ color: "black" }}
          >
            WELCOME ! <br />
            <span style={{ color: "black" }}>LOGIN TO CONTINUE</span>
          </h1>
        </div>

        <div class="col-lg-6 mb-5 mb-lg-0 position-relative">
          <div
            id="radius-shape-1"
            class="position-absolute rounded-circle shadow-5-strong"
          ></div>
          <div
            id="radius-shape-2"
            class="position-absolute shadow-5-strong"
          ></div>

          <div class="card bg-glass mt-5">
            <div class="card-body px-4 py-5 px-md-5">

              <form onSubmit={handleSubmit}>
                <h1>LOGIN</h1>
                <div class="form-outline mb-4 mt-4">
                  <input
                   value={email}
                   onChange={(e) => {
                     setEmail(e.target.value);
                   }}
                    type="email"
                    id="form3Example3"
                    class="form-control"
                  />
                  <label class="form-label" for="form3Example3">
                    Email address
                  </label>
                </div>

                <div class="form-outline mb-4">
                  <input
                   value={password}
                   onChange={(e) => {
                     setPassword(e.target.value);
                   }}
                    type="password"
                    id="form3Example4"
                    class="form-control"
                  />
                  <label class="form-label" for="form3Example4">
                    Password
                  </label>
                </div>
                <button
                  type="submit"
                  class="btn btn mb-4"
                  style={{
                    width: 350,
                    marginLeft: 30,
                    backgroundColor: "black",
                    color: "#fff",
                  }}
                >
                  Login
                </button>
              </form>
            </div>
            <p>
              Don't have any account{" "}
              <span
                onClick={() => {
                  navigate("/signup");
                }}
                style={{ color: "blue", cursor: "pointer" }}
              >
                Sign Up
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Login
