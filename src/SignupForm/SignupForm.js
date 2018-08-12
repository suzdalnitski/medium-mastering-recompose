import React from "react";
import { TextField, Button, Grid } from "@material-ui/core";
import withFormLogic from "./logic";

const SignupForm = ({
    email, onChangeEmail, emailError,
    password, onChangePassword, passwordError,
    confirmPassword, onChangeConfirmPassword, confirmPasswordError,
    onSubmit
}) => (
  <Grid container spacing={16}>
    <Grid item xs={4}>
      <TextField
        label="Email"
        value={email.value}
        error={!!emailError}
        helperText={emailError}
        onChange={onChangeEmail}
        margin="normal"
      />

      <TextField
        label="Password"
        value={password.value}
        error={!!passwordError}
        helperText={passwordError}
        type="password"
        onChange={onChangePassword}
        margin="normal"
      />

      <TextField
        label="Confirm Password"
        value={confirmPassword.value}
        error={!!confirmPasswordError}
        helperText={confirmPasswordError}
        type="password"
        onChange={onChangeConfirmPassword}
        margin="normal"
      />

      <Button
        variant="contained"
        color="primary"
        onClick={onSubmit}
        margin="normal"
      >
        Sign Up
      </Button>
    </Grid>
  </Grid>
);

export default withFormLogic(SignupForm);
