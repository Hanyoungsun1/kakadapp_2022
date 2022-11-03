import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



function Auth() {
  
  const onSocialClick = (e) => {
    //console.log(e.target.name);
    const {target: {name}} = e;
    let provider
    if(name === "google"){
        provider = new GoogleAuthProvider();
    }
    const data = signInWithPopup(authService, provider);
    //console.log(data);
  } 

  return (
    <div className="authContainer">
        <AuthForm />
        <div className="authBtns">
            <button onClick={onSocialClick} name="google" className="authBtn">
              Continue with Google<FontAwesomeIcon icon="fa-brands fa-google" />
              </button>
        </div>
    </div>
  )
}

export default Auth