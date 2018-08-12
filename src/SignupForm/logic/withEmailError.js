import { withProps } from "recompose";

const getEmailError = email => {
  if (!email.isDirty) {
    return "";
  }

  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const isValidEmail = emailRegex.test(email.value);
  return !isValidEmail ? "Invalid email." : "";
};

const withEmailError = withProps(ownerProps => ({
  emailError: getEmailError(ownerProps.email)
}));

export default withEmailError;
