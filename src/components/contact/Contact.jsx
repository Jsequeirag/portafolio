import { useState, React } from "react";
import "./contact.css";
import axios from "axios";
export default function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [sendingEmail, setSendingEMail] = useState(false);
  const [sendEmail, setSendEmail] = useState(true);
  const [emailSentConfirmation, setemailSentConfirmation] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    e.target.reset();
    setSendingEMail(true);
    setSendEmail(false);
    await axios
      .post(process.env.REACT_APP_NODEMAIL, {
        companyemail: email,
        text: message,
      })
      .then((res) => {
        if (res.data.emailStatus) {
          setSendingEMail(false);
          setemailSentConfirmation(true);
          setTimeout(() => {
            setemailSentConfirmation(false);
          }, 1500);
          setTimeout(() => {
            setSendEmail(true);
          }, 1500);
          setErrorMessage("");
        } else {
          setErrorMessage(res.data.message);
          setSendingEMail(false);
          setSendEmail(true);
        }
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
          {errorMessage && (
            <div className="errorSendingEmail text-center">
              <span>{errorMessage}</span>
            </div>
          )}
          <div class="whatsapp-contact-section">
            <p class="whatsapp-contact-text">
              Prefer to contact me directly on WhatsApp?
            </p>
            <a
              href="https://wa.me/50685022903"
              class="whatsapp-contact-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Chat on WhatsApp
            </a>{" "}
            <p class="whatsapp-email-text">
              Would you like to send me an email?
            </p>
          </div>
          <form
            className="d-flex justify-content-center flex-column"
            onSubmit={submit}
            id="form"
          >
            <div className="">
              <label for="exampleInputEmail1" className="form-label ">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                name="email"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                required
                onChange={(e) => {
                  setEmail(e.target.value);
                  console.log(e.target.value);
                }}
              />
              <div id="emailHelp" className="form-text ">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="">
              <label for="exampleInputPassword1" className="form-label ">
                Message
              </label>
              <textarea
                className="form-control"
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
            {sendingEmail && (
              <div className="sendingEmailState text-center">
                <span>Sending...⌛</span>
              </div>
            )}
            {sendEmail && (
              <div className="text-center">
                <button>Send</button>
              </div>
            )}
            {emailSentConfirmation && (
              <div className="sendingEmailState text-center">
                <span>Email sent ✅</span>
              </div>
            )}
          </form>
        </div>
        <div className="col-lg-3"></div>
      </div>
    </div>
  );
}
