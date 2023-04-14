import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import facebook from "./assets/facebook.png";
import social from "./assets/social.png";
import twitter from "./assets/twitter.png";
import style from "./login.module.css"

function Login() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState(" ");
    const [isTermsAgreed, setIsTermsAgreed] = useState(false);
    const [isFormValid, setIsFormValid] = useState(false);
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

    
    const handleFirstNameChange = (e) => {
        setFirstName(e.target.value);
    };
    const handleLastNameChange = (e) => {
        setLastName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleTermsChange = (e) => {
        setIsTermsAgreed(e.target.checked);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validation logic
        if (!firstName.trim() || !lastName.trim() || !email.trim()) {
            alert("Please fill in all the required fields.");
            return;
        }

        if (!isTermsAgreed) {
            alert("Please agree to the terms and privacy policy.");
            return;
        }

        setIsFormValid(true);
    };
    React.useEffect(() => {
        setIsButtonDisabled(!firstName || !lastName || !email || !isTermsAgreed);
      }, [firstName, lastName, email, isTermsAgreed]);
    return (
        <div>
            <h1 className={style.head}>Create Account</h1>
            <div className={style.icons}>
                <img className={style.icon} src={facebook} alt="Facebook-logo" />
                <img className={style.icon} src={social} alt="Google-logo" />
                <img className={style.icon} src={twitter} alt="Twitter-logo" />
            </div>
            <p>OR</p>
            <div className={style.main}>
                <form onSubmit={handleSubmit}>
                    <div className={style.wrapper}>
                        <input className={style.name1} type="text" placeholder="First Name" value={firstName}
                            onChange={handleFirstNameChange}
                            required />
                        <input className={style.name1} type="text" placeholder="Last Name" value={lastName}
                            onChange={handleLastNameChange}
                            required />
                    </div>
                    <input className={style.email} type="email" placeholder="Email" value={email}
                        onChange={handleEmailChange}
                        required />
                    <div className={style.care}>
                        <input className={style.checkbox} type="checkbox" checked={isTermsAgreed}
                            onChange={handleTermsChange}
                            required />
                        <p>I agree to the <span style={{ color: '#e74646' }}>Terms </span> and {" "}<span style={{ color: '#e74646' }}>Privacy Policy</span>.</p>
                    </div>
                    {isFormValid ?
                        <Link to={`/cropper`}><button className={style.btn} type="submit">Sign Up</button></Link> :
                        <button className={style.btn} type="submit" >Sign Up</button>
                    }
                    {/* <Link to={`/cropper`}><button className={style.btn} type="submit">Sign Up</button></Link> */}
                </form>
            </div>
        </div>
    )
}

export default Login;