import { compose } from "recompose";

import withTextFieldState from "./withTextFieldState";
import withEmailError from "./withEmailError";
import withPasswordError from "./withPasswordError";
import withConfirmPasswordError from "./withConfirmPasswordError";
import withSubmitForm from "./withSubmitForm";

export default compose(
    withTextFieldState,
    withEmailError,
    withPasswordError,
    withConfirmPasswordError,
    withSubmitForm
);