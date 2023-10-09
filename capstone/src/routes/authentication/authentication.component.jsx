import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import './authentication.styles.scss'
// import {getRedirectResult} from 'firebase/auth'   {The commented code is of the different method of google authentication that is redirect method}

/*
import {
  auth, // keeping track of all the authentication happening in our website
  signInWithGoogleRedirect,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
*/

const SignIn = () => {
/*
  useEffect(()=>{
    const fetchData = async ()=>{ // auth will always keep track
      const response = await getRedirectResult(auth) // response getting from google redirect as same as we were getting from popup 
      if(response){
        const userDocRef = await createUserDocumentFromAuth(response.user);
      }
    }
    fetchData()
  }, [])
*/
/*
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();  //when we choose account through google popup we receive the user object
    const userDocRef = await createUserDocumentFromAuth(user); // passing it to firebase utils
  };
*/
  return (
    <div className="authentication-container">
      {/* <button onClick={logGoogleUser}>Google Popup</button>
      <button onClick={signInWithGoogleRedirect}>Google Redirect</button> */}
      <SignInForm/>
      <SignUpForm/>
    </div>
  );
};
export default SignIn;
