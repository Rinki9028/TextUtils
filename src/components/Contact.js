import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";

const Contact = () => {
  const handleMobileInputChange = (event) => {
    const inputValue = event.target.value;

    // Check if the input alphabets (A-Z)
    if (/[^0-9]/.test(inputValue)) {
      alert("You can type only numbers (0-9) for the mobile number.");
      event.target.value = inputValue.replace(/[^0-9]/g, ""); // Remove any non-numeric characters
      event.target.focus(); // Set focus back to the input field
    }

    // Check if the input has exceeded 10 digits
    if (inputValue.length >= 10) {
      event.target.value = inputValue.slice(0, 10); // Limit the input to 10 digits
      alert("Mobile number should be only 10 digits.");
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const emailInput = document.getElementById("email");
    const emailValue = emailInput.value.trim();

    // Validate email format
    if (!validateEmail(emailValue)) {
      alert("Invalid email format. Please enter a valid email address.");
      emailInput.focus();
      return;
    }
  };

  return (
    <>
      {" "}        <h1 className="text-center my-3 py-4">
          {" "}
          Contact Us For Query...
        </h1>
      <div
        className="container"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/Images/contact.webp)`,
        }}
      >
        {" "}

        <div className="row py-4">
          <div className="col-md-6 mx-auto">
            <form onSubmit={handleSubmit} action="/">
              <div className="form-group">
                <label htmlFor="name" className="label">
                  Your Name:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="form-group py-2">
                <label htmlFor="email" className="label">
                  Your Email:
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="form-group py-2">
                <label htmlFor="mobile" className="label">
                  Your Mobile Number:
                </label>
                <input
                  type="tel"
                  pattern="[0-9]{10}"
                  className="form-control"
                  id="mobile"
                  placeholder="Enter your mobile number"
                  onChange={handleMobileInputChange}
                  required
                />
                <small className="form-text text-muted">
                  Maximum 10 digits, numbers only.
                </small>
              </div>

              <div className="form-group py-2">
                <label htmlFor="message" className="label">
                  Your Message:
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="4"
                  placeholder="Write your message here"
                  required
                ></textarea>
              </div>
              <br />
              <button
                type="submit"
                className="btn btn-primary button btn-block"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-6 mx-auto text-white text-center">
            <b className="mb-3">Or reach out to us directly:</b>
            <h4>
              Email:{" "}
              <Link to="https://www.linkedin.com/in/rinki-kumari-39a74a249/">
                info@textutils.com
              </Link>
            </h4>
            <h6>
              Phone: <Link to="tel:+1234567890">+1 (234) 567-890</Link>
            </h6>
            <br />
            <br />
          </div>
        </div>
      </div> <br /> <br />
    </>
  );
};

export default Contact;
