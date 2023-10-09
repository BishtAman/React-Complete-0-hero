import FormInput from "../form-input/form-input.component";
import './sign-up-form.styles.scss'
import { Fragment, useContext, useState } from "react"
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import Button from "../button/button.component";
import { UserContext } from "../../contexts/user.context";
const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () =>{

    const [formFields, setFormFields] = useState(defaultFormFields);
    const {displayName, email, password, confirmPassword} = formFields;
    console.log(formFields)
const {setCurrentUser} = useContext(UserContext)
    const handleChange = (event) =>{
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value}) // here we are spreading up the object and changing only the specific field
    }

    const clearFormFields = () =>{
        setFormFields(defaultFormFields)
    }

    const submitFormFields = async (event) =>{
        event.preventDefault()
        if(password!== confirmPassword || password.length<6){
            alert('passwords should be at least 6 characters and should match with confirm password')
        }
        else{
            try{
                const {user} = await createAuthUserWithEmailAndPassword(email, password);
                console.log(user)
                setCurrentUser(user)
                await createUserDocumentFromAuth(user, {displayName})
                clearFormFields();
            }catch(error){
                if(error.code === 'auth/email-already-in-use'){
                    alert('Cannot create user, email already in use')
                }
                else{
                    console.log(error.message)
                }
            }
        }
    }
    return(
        <Fragment>
            <div className="sign-up-container">
                <h2>Don't have an account?</h2>
                <span>Sign up with your email and password</span>
                <form onSubmit={submitFormFields}>
                    <FormInput label = 'Display Name' type="text" required onChange={handleChange} name="displayName" value={displayName}/>

                    <FormInput label = 'Email' type="email" required onChange={handleChange} name="email" value={email}/>

                    <FormInput label = 'Password' type="password" required onChange={handleChange} name="password" value={password}/>

                    <FormInput label = 'Confirm Password' type="password" required onChange={handleChange} name="confirmPassword" value={confirmPassword}/>

                    <Button type="submit">Sign Up</Button>
                </form>
            </div>
        </Fragment>
    )
}
export default SignUpForm