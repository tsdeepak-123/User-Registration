import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { userApi } from "../../store/Api";

function Signup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [streetname, setStreetname] = useState("");
  const [district, setDistrict] = useState("");
  const [state, setState] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("image", image);
      formData.append("username", username);
      formData.append("phone", phone);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("streetname", streetname);
      formData.append("district", district);
      formData.append("state", state);
  
      axios.post(
        `${userApi}signup`,
  
        formData,
        { withCredentials: true }
      );
      navigate('/login')
    } catch (error) {
      
    }
 
  };
  const handleImage = (event) => {
    const file = event.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setImage(file);
    }
  };

  return (
    <div>
      <div class="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
        <div class="row gx-lg-5 align-items-center mb-5">
          <div class="col-lg-6 mb-5 mb-lg-0" style={{ zIndex: 10 }}>
            <h1
              class="my-5 display-5 fw-bold ls-tight"
              style={{ color: "BLACK" }}
            >
              WELCOME ! <br />
              <span style={{ color: "BLACK" }}>SIGN UP TO CONTINUE</span>
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

            <div class="card bg-glass ">
              <div class="card-body px-4 py-4 px-md-5">
                <form onSubmit={handleSubmit}>
                  <h1>SIGN UP</h1>
                  <div class="row">
                    <div class="col-md-6 mb-4">
                      <div class="form-outline">
                        <input
                          value={username}
                          onChange={(e) => {
                            setUsername(e.target.value);
                          }}
                          type="text"
                          id="form3Example1"
                          class="form-control"
                        />
                        <label class="form-label" for="form3Example1">
                          Name
                        </label>
                      </div>
                    </div>
                    <div class="col-md-6 mb-4">
                      <div class="form-outline">
                        <input
                          value={phone}
                          onChange={(e) => {
                            setPhone(e.target.value);
                          }}
                          type="text"
                          id="form3Example1"
                          class="form-control"
                        />
                        <label class="form-label" for="form3Example1">
                          Phone Number
                        </label>
                      </div>
                    </div>
                    <div class="form-outline mb-4">
                      <input
                        value={streetname}
                        onChange={(e) => {
                          setStreetname(e.target.value);
                        }}
                        type="text"
                        id="form3Example3"
                        class="form-control"
                      />
                      <label class="form-label" for="form3Example3">
                        Street Address
                      </label>
                    </div>

                    <div class="col-md-6 mb-4">
                      <div class="form-outline">
                        <input
                          value={district}
                          onChange={(e) => {
                            setDistrict(e.target.value);
                          }}
                          type="text"
                          id="form3Example1"
                          class="form-control"
                        />
                        <label class="form-label" for="form3Example1">
                          District
                        </label>
                      </div>
                    </div>
                    <div class="col-md-6 mb-4">
                      <div class="form-outline">
                        <input
                          value={state}
                          onChange={(e) => {
                            setState(e.target.value);
                          }}
                          type="text"
                          id="form3Example1"
                          class="form-control"
                        />
                        <label class="form-label" for="form3Example1">
                          State
                        </label>
                      </div>
                    </div>
                  </div>

                  <div class="form-outline mb-4">
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
                  <div class="form-outline mb-4">
                    <input
                      name="image"
                      encType="multipart/form-data"
                      onChange={handleImage}
                      type="file"
                    />
                    <label class="form-label" for="form3Example4">
                      image
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
                    Sign up
                  </button>
                </form>
              </div>
              <p>
                Already have an account{" "}
                <span
                  onClick={() => {
                    navigate("/login");
                  }}
                  style={{ color: "blue", cursor: "pointer" }}
                >
                  Login
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
