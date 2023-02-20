import React, { useContext, useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../firebase.config';
import Home from '../Home'

const Login = () => {

const [value, setValue] = useState("");

  const handleGoogleSignIn = () => {
   signInWithPopup(auth, provider).then((data) => {
    setValue(data.user.email);
    localStorage.setItem("email", data.user.email)
   })
  }

  useEffect(() => {
    setValue(localStorage.getItem("email"))
  }, [])


  return (
    <div>
      {value ? <Home /> 
      : 
     <div className="login-page container">
      <div className="row align-items-center" style={{ height: "85vh" }}>
        <div className="col-md-8 shadow p-5">
          <div>
            <form  action="">
                <input className='form-control' type="text" name="name" placeholder='Your Name' />

              
              <br />
              <input className='form-control' type="text"  name="email" placeholder='Your Email' required /><br />
              <input className='form-control' type="password"  name="password" placeholder='Your Password' required />
              
              <br />
              <div className='d-flex justify-content-center'><input type="submit" className='btn btn-primary'  /></div>
            
            </form>
          </div>
          <div className="from-group mt-5 d-flex justify-content-between flex-wrap">
            <button className="btn btn-primary" onClick={handleGoogleSignIn} > 
            
            <FontAwesomeIcon icon={faGoogle} />
              &nbsp;&nbsp;Sign in</button>
            <button className="btn btn-primary" >
            <FontAwesomeIcon icon={faFacebook} />
              &nbsp;&nbsp;Sign in</button>
          </div>
        </div>
      </div>
    </div>
  }
    </div>
  );
};

export default Login;