import { useState } from "react";
import emailjs from "@emailjs/browser";
import { AlertTitle, Alert, Snackbar } from "@mui/material";

import classes from "./Form.module.css";

const Form = () => {
  const [successAlert, setSuccessAlert] = useState(false);
  const [errorAlert, setErrorAlert] = useState(false);
  const [name, setName] = useState("");
  // const [nameWasTouched, setNameWasTouched] = useState(false)

  const [email, setEmail] = useState("");
  const [emailWasTouched, setEmailWasTouched] = useState(false);

  const [message, setMessage] = useState("");
  const [messageWasTouched, setMessageWasTouched] = useState(false);

  const emailIsValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
    email
  );
  const emailIsInvalid = !emailIsValid && emailWasTouched;

  const messageIsValid = message.trim() !== "";
  const messageIsInvalid = !messageIsValid && messageWasTouched;

  let formIsValid = false;

  if (emailIsValid && messageIsValid) {
    formIsValid = true;
  }

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const emailBlurHandler = (event) => {
    setEmailWasTouched(true);
  };

  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  const messageChangeHandler = (event) => {
    setMessage(event.target.value);
  };

  const messageBlurHandler = (event) => {
    setMessageWasTouched(true);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    setEmailWasTouched(true);
    setMessageWasTouched(true);

    if (!formIsValid) {
      return;
    }

    emailjs
      .send(
        "service_tgavkeq",
        "template_h534dyk",
        { email: email, message: message },
        "4X12NJD-Kp2Bhqm3M"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccessAlert(true);
        },
        (error) => {
          console.log(error.text);
          setErrorAlert(true);
        }
      );

    console.log(name, email, message);
    setName("");
    setEmail("");
    setEmailWasTouched(false);
    setMessage("");
    setMessageWasTouched(false);
  };

  const handleClose = () => {
    setSuccessAlert(false);
    setErrorAlert(false);
  };

  const emailInvalidClass = emailIsInvalid ? classes.invalid : "";
  const messageInvalidClass = messageIsInvalid ? classes.invalid : "";

  return (
    <>
      <form
        className={classes["contact-form"]}
        onSubmit={formSubmissionHandler}
      >
        <div className={classes["control-group"]}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={nameChangeHandler}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
            className={emailInvalidClass}
          />
        </div>
        <div className={classes["control-group"]}>
          <textarea
            placeholder="Message"
            value={message}
            onChange={messageChangeHandler}
            onBlur={messageBlurHandler}
            className={messageInvalidClass}
          />
        </div>
        <div className={classes["form-action"]}>
          <button>Send message</button>
        </div>
      </form>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={successAlert}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert severity="success" sx={{ width: "100%" }}>
          <AlertTitle>Success</AlertTitle>
          Thank you for your message! :)
        </Alert>
      </Snackbar>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={errorAlert}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert severity="error" sx={{ width: "100%" }}>
          <AlertTitle>Error</AlertTitle>
          Something went wrong! Please try again!
        </Alert>
      </Snackbar>
    </>
  );
};

export default Form;
