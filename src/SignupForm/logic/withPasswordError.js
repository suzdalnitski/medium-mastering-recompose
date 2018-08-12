import { withProps } from "recompose";

const getPasswordError = password => {
  if (!password.isDirty) {
    return "";
  }

  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  const isValidPassword = passwordRegex.test(password.value);
  return !isValidPassword
    ? "The password must contain minimum eight characters, at least one letter and one number."
    : "";
};

const withPasswordError = withProps(ownerProps => ({
  passwordError: getPasswordError(ownerProps.password)
}));

export default withPasswordError;
