import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";

function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { name, email, message } = formState;

  // setFormState function to update the formState value for the name property.
  // We assign the value taken from the input field in the UI with e.target.value
  // and assign this value to the property formState.name. We use the spread operator,
  // ...formState, so we can retain the other key-value pairs in this object. Without
  // the spread operator, the formState object would be overwritten to only contain
  // the name: value key pair.

  const [errorMessage, setErrorMessage] = useState("");

  function handleChange(e) {
    // email validation function, returns Boolan
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      // console.log(isValid);
      if (!isValid) {
        setErrorMessage("Your email is invalid.");
      } else {
        if (!e.target.value.length) {
          setErrorMessage(`${e.target.name} is required.`);
        } else {
          setErrorMessage("");
        }
      }
      // console.log("errorMessage", errorMessage);
    }

    // The name property of target in the preceding expression actually refers to the
    // name attribute of the form element.
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }

  // console.log(formState);

  function handleSubmit(e) {
    e.preventDefault();
    // console.log(formState);
  }

  return (
    <section>
      <h1>Contact me</h1>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            defaultValue={name}
            onBlur={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email address:</label>
          <input
            type="email"
            name="email"
            defaultValue={email}
            onBlur={handleChange}
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            rows="5"
            defaultValue={message}
            onBlur={handleChange}
          />
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default ContactForm;
