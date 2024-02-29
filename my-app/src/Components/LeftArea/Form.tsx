import { useState, ChangeEvent, FormEvent } from "react";
import FinalResultLogo from "../Logo/Pic";
import './Form.css'

export default function WrittingArea() {
    const [firstName, setFirstName] = useState('');
    const [errorValue1, setErrorValue1] = useState('');
    const handleEventFirstName = (event: ChangeEvent<HTMLInputElement>) => {
        setFirstName(event.target.value);
    }

    const [lastName, setLastName] = useState('');
    const [errorValue2, setErrorValue2] = useState('');
    const handleEventLastName = (event: ChangeEvent<HTMLInputElement>) => {
        setLastName(event.target.value);
    }

    const [email, setEmail] = useState('');
    const [errorValue3, setErrorValue3] = useState('');
    const handleEventEmail = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    }

    const [password, setPassword] = useState('');
    const [errorValue4, setErrorValue4] = useState('');
    const handleEventPassword = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    }

    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [errorValue5, setErrorValue5] = useState('');
    const handleEventPasswordConfirmation = (event: ChangeEvent<HTMLInputElement>) => {
        setPasswordConfirmation(event.target.value);
    }

    const [isAccepted, setIsAccepted] = useState(false);

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();

        if (firstName.length > 8) {
            setErrorValue1('The first name must be 8 characters at maximum');
            return;
        } else {
            setErrorValue1('');
        }

        if (lastName.length > 10) {
            setErrorValue2('The last name must be 10 characters at maximum');
            return;
        } else {
            setErrorValue2('');
        }

        if (!/^\S+@\S+\.\S+$/.test(email)) {
            setErrorValue3('Invalid email format');
            return;
        } else {
            setErrorValue3('');
        }

        if (password.length < 7) {
            setErrorValue4('Password must be 7 characters at least');
            return;
        } else {
            setErrorValue4('');
        }

        if (passwordConfirmation !== password) {
            setErrorValue5('Passwords do not match');
            return;
        } else {
            setErrorValue5('');
        }

        if (!isAccepted) {
            alert("Please accept the terms and conditions.");
            return;
        }

    }

    return (
        <div className="Leftpart">
            <FinalResultLogo/>
            <h1>Create your account</h1>
            <span>Fill the form below to create an account</span>
            
        <form onSubmit={handleSubmit} >
            <div className="Form-1st-part">
               <label htmlFor="firstName">Full Name:</label>
               <input id="firstName" type="text" value={firstName} onChange={handleEventFirstName} />
               <p className="error">{errorValue1}</p>
               <label htmlFor="lastName">Last Name:</label>
               <input id="lastName" type="text" value={lastName} onChange={handleEventLastName} />
               <p className="error">{errorValue2}</p>
            </div>

  <div className="Form-2nd-part">
    <label htmlFor="email">Email:</label>
    <input id="email" type="email" value={email} onChange={handleEventEmail} placeholder="example@gmail.com" />
       <p className="error">{errorValue3}</p>
   </div>

       <div className="Form-3rd-part">
             <label htmlFor="password">Password:</label>
            <input id="password" type="password" value={password} onChange={handleEventPassword} />
             <p className="error">{errorValue4}</p>

            <label htmlFor="passwordConfirmation">Password Confirmation:</label>
            <input id="passwordConfirmation" type="password" value={passwordConfirmation} onChange={handleEventPasswordConfirmation} />
            <p className="error">{errorValue5}</p>
    </div>
                <p className="Description">We want you to know how our service works and why need your datails.
                    Please confirm that you have read, understood and accept the terms and conditions
                    <input type="checkbox" checked={isAccepted} onChange={() => setIsAccepted(!isAccepted)} />
                </p>
                <button type="submit" disabled={!isAccepted}>Next</button>
            </form>
            
        </div>
    );
}
