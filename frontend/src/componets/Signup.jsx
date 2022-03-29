import React,{useRef} from 'react';

import styles from '../styles/signup.module.css'
export default function Signup() {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const emailRef = useRef();
  function handleSubmit(e){
    e.preventDefault();
    console.log("submitted");
    console.log(firstNameRef.current.value);
  }
  return (
    <>
      <div className={styles.backgrounds}>
        <div className={styles.backgroundsTwo}>
      <div className={styles.Createheading}>Create new account</div>
      <div className={styles.LoginMessage}> Already A Member <a href="/login">Log In</a> </div>
      <div className={styles.formFileds}>
      <form onSubmit={handleSubmit}>        
      <div className={styles.nameFiled}>
        <input type="text" name="fmane" id="fname" ref={firstNameRef} placeholder="First Name"/>
        <input type="text" name="lname" id="lname" ref={lastNameRef} placeholder="Last Name"/>
      </div>
      <div className={styles.divElements}> <input type="email" name="email" id="email" ref={emailRef} placeholder="Email"/></div>
      <div  className={styles.divElements}> <input type="password" name="paswrd" id="paswrd" ref={passwordRef} placeholder="Password" /></div>
      <div className={styles.divElements}> <input type="password" name="cpaswrd" id="cpaswrd" ref={confirmPasswordRef} placeholder="Confirm Password" /></div> 
      <div className={styles.divElements}>  <input type="submit" value="Create account" /> </div> 
      
      </form>
      </div>
      
      </div>
      </div>
    </>
  )
}
