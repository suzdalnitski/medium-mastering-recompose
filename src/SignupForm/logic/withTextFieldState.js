import { withStateHandlers, compose } from "recompose";

const initialState = {
  email: { value: "" },
  password: { value: "" },
  confirmPassword: { value: "" }
};

const onChangeEmail = props => event => ({
  email: {
    value: event.target.value,
    isDirty: true
  }
});

const onChangePassword = props => event => ({
  password: {
    value: event.target.value,
    isDirty: true
  }
});

const onChangeConfirmPassword = props => event => ({
  confirmPassword: {
    value: event.target.value,
    isDirty: true
  }
});

const withTextFieldState = withStateHandlers(initialState, {
  onChangeEmail,
  onChangePassword,
  onChangeConfirmPassword
});

export default withTextFieldState;