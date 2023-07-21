import React from 'react'

function ProfilePage() {
  return (
    <div>
    <section className="section">
      <div class="container rounded bg-white mt-5 mb-5">
        <div class="row">
          <div class="col-md-3 border-right">
            
            <div class="d-flex flex-column align-items-center text-center p-3 py-5">
              <img
                class="rounded-circle mt-5"
                width="150px"
                src=""
              />
              
              <span> </span>
            </div>

            <input  encType="multipart/form-data"onChange="" type="file" />
          </div>
          <div class="col-md-5 border-right">
            <div class="p-3 py-5">
              <div class="d-flex justify-content-center align-items-center mb-3">
                <h4 class="text-right">PROFILE</h4>
              </div>
              <div class="row mt-2">
                <div class="col-md-12">
                  <label class="labels">Name</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="first name"
                    value=""
                  />
                </div>
              </div>
              <div class="row mt-3">
                <div class="col-md-12">
                  <label class="labels">Mobile Number</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="enter phone number"
                    value=""
                  />
                </div>
                <div class="col-md-12">
                  <label class="labels">Email ID</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="email"
                    value=""
                  />
                </div>
                <div class="col-md-12">
                  <label class="labels">Address</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Address"
                    value=""
                  />
                </div>
              </div>
              <div class="mt-5 text-center">
                <button class="btn btn-primary profile-button" onClick="" type="button">
                  Update Profile
                </button>
              </div>
              <span style={{color:"green",marginLeft:"10px",fontWeight:"bold"}}></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);
}

export default ProfilePage
