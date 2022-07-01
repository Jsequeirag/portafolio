import React from "react";
import "./contact.css";
export default function contact() {
  return (
    <div className="contact" id="contact">
      <h1 className="title">Contact me</h1>
      <div className="row">
        <div className="col-lg-3 paper-plane">
          <img src="./img/paper-plane.png" alt="asd" height={300} width={280} />
        </div>
        <div className="form-container col-lg-6 ">
          <form className="d-flex justify-content-center flex-column">
            <div class="">
              <label for="exampleInputEmail1" class="form-label ">
                Email address
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" class="form-text ">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div class="">
              <label for="exampleInputPassword1" class="form-label ">
                Message
              </label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
            <div className="text-center">
              <button>Send</button>
            </div>
          </form>
        </div>
        <div className="col-lg-3"></div>
      </div>
    </div>
  );
}
