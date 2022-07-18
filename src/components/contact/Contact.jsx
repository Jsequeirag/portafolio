import { useState, React } from "react";
import "./contact.css";
import axios from "axios";
export default function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const submit = async (data) => {
    data.preventDefault();
    alert(process.env.REACT_APP_NODEMAIL);
    console.log(process.env.REACT_APP_NODEMAIL);
    await axios
      .post(process.env.REACT_APP_NODEMAIL, {
        companyemail: email,
        text: message,
      })
      .then((res) => {
        alert(res.data.message);
      })
      .catch((e) => {
        alert(e);
      });
  };
  return (
    <div className="contact" id="contact">
      <h1 className="title">Contact me</h1>
      <div className="row">
        <div className="col-lg-3 paper-plane">
          <img src="./img/paper-plane.png" alt="asd" height={300} width={280} />
        </div>
        <div className="form-container col-lg-6 ">
          <form
            className="d-flex justify-content-center flex-column"
            onSubmit={submit}
            defaul
          >
            <div class="">
              <label for="exampleInputEmail1" class="form-label ">
                Email address
              </label>
              <input
                type="email"
                class="form-control"
                name="email"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                required
                onChange={(e) => {
                  setEmail(e.target.value);
                  console.log(e.target.value);
                }}
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
                name="message"
                required
                onChange={(e) => {
                  setMessage(e.target.value);
                  console.log(e.target.value);
                }}
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
