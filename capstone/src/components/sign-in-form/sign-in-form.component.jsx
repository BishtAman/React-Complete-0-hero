import FormInput from "../form-input/form-input.component";
import "./sign-in-form.styles.scss";
import { Fragment, useState, useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword
} from "../../utils/firebase/firebase.utils";
import Button from "../button/button.component";
const defaultFormFields = {
  email: "",
  password: "",
};
const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  console.log(formFields);
const {setCurrentUser} = useContext(UserContext)
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value }); // here we are spreading up the object and changing only the specific field
  };


  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup(); //when we choose account through google popup we receive the user object
    await createUserDocumentFromAuth(user); // passing it to firebase utils
  };


  const clearFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const submitFormFields = async (event) => {
    event.preventDefault();

    try {
        const {user} = await signInAuthUserWithEmailAndPassword(email,password)
        setCurrentUser(user)
        console.log(user)
      clearFormFields();
    } catch (error) {
        switch(error.code){
            case 'auth/wrong-password':
                alert('incorrect password for email')
                break;
            case 'auth/user-not-found':
                alert('no user associated with this email')
                break;
            default:
                console.log(error)
        }
    }

  };
  return (
    <Fragment>
      <div className="sign-up-container">
        <h2>Already have an account?</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={submitFormFields}>
          <FormInput
            label="Email"
            type="email"
            required
            onChange={handleChange}
            name="email"
            value={email}
          />

          <FormInput
            label="Password"
            type="password"
            required
            onChange={handleChange}
            name="password"
            value={password}
          />

          <div className="buttons-container">
            <Button type="submit">Sign In</Button>
            <Button type="button" buttonType="google" onClick={signInWithGoogle}>
              Google sign in
            </Button>
          </div>
        </form>
      </div>
    </Fragment>
  );
};
export default SignInForm;
