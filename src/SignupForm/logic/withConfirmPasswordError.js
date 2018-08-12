import { withProps } from "recompose";

const getConfirmPasswordError = (password, confirmPassword) => {
  if (!confirmPassword.isDirty) {
      return "";
  }

  const passwordsMatch = password.value === confirmPassword.value;

  return !passwordsMatch ? "Passwords don't match." : "";
};

const withConfirmPasswordError = withProps(
    (ownerProps) => ({
        confirmPasswordError: getConfirmPasswordError(
            ownerProps.password,
            ownerProps.confirmPassword
        )
    })
);

export default withConfirmPasswordError;