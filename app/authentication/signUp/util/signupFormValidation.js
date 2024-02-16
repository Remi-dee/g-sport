function signupFormValidation(user) {
  const errors = {};

  const regxEmail = /^([a-zA-Z0-9\.]+)@([a-zA-Z]+)\.([a-z]+)(\.[a-z]+)?$/;
  const trimmedEmail = user.email.trim();
  if (!trimmedEmail) {
    errors.email = "Please enter your email address";
  } else if (!regxEmail.test(trimmedEmail)) {
    errors.email = "Please enter a valid email address";
  }

  const regxUsername = /^[a-zA-Z0-9_]{3,20}$/;
  const trimmedUserName = user.username.trim();
  if (!trimmedUserName) {
    errors.username = "Please enter your username";
  } else if (!regxUsername.test(trimmedUserName)) {
    errors.username = "Please enter a valid username";
  }

  const regxPassword =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
  const trimmedPassword = user.password.trim();
  if (!trimmedPassword) {
    errors.password = "Please enter a password";
  } else if (trimmedPassword.length < 8 || trimmedPassword.length > 20) {
    errors.password = "Please enter a password between 8 and 15 characters";
  } else if (!regxPassword.test(trimmedPassword)) {
    errors.password =
      "Password must contain one digit, one lowercase letter, one uppercase letter, and one special character";
  }

  return errors;
}
export { signupFormValidation };
