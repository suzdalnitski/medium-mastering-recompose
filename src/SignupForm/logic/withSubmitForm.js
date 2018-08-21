import { withProps } from "recompose";
import axios from "axios";

const handleSubmit = ({
  email,
  password,
  emailError,
  passwordError,
  confirmPasswordError
}) => {
  if (emailError || passwordError || confirmPasswordError) {
    return;
  }

  const data = {
    email: email.value,
    password: password.value
  };

  axios.post(`https://mywebsite.com/api/signup`, data);
};

const withSubmitForm = withProps(ownerProps => ({
  onSubmit: () => { handleSubmit(ownerProps) }
}));

export default withSubmitForm;