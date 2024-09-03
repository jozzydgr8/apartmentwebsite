import { Input, message } from "antd";
import { createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useState } from "react"
import { auth, userRef } from "../App";
import { UseContextAuth } from "../ContextFolder/Context/UseContextAuth";
import { addDoc } from "firebase/firestore";
export const Register = () => {
    const [registered, setRegistered] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [disable, setDisable] = useState(false);

    //declaration
    const {dispatch} = UseContextAuth();

    const handleSignIn = (e)=>{
      setDisable(true)
      e.preventDefault();
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials)=>{
          const user = userCredentials.user;
          dispatch({type:'signUser', payload:user});
          setEmail('');
          setPassword('');
      }).catch(error=>{
          console.log(error)
          let err = error.message.split('Firebase:')
          setTimeout(()=>{
              message.error('login error');
          }, 2000)
          console.log(err[1])
          setErrorMessage('email or password incorrect');
          setDisable(false)
      })
  }

//// sign up sign up
const handleSignUp= (e)=>{
  setDisable(true);
  e.preventDefault();
  createUserWithEmailAndPassword(auth, 
      email,
      password).then((userCredentials)=>{
          const user = userCredentials.user;
          dispatch({type:'signUser', payload:user});
          sendEmailVerification(user)
          .then(()=>{
              updateProfile(user, {
                  displayName: fname
              })
              .then(()=>{
                  addDoc(userRef, {
                      userName:fname,
                      otherName:lname,
                      userEmail:user.email,
                      userId:user.uid
                  }).then(()=>{
                      setEmail('');
                      setPassword('');
                      setFname('');
                      setLname('')
                      setDisable(false)
                  }).catch(error=>{console.log(error)})

              }).catch(error=>console.log(error))
              

          }).catch(error=>console.log(error))
          

          }).catch(error=>{
          console.log(error);
          let err = error.message.split('Firebase:');
          setTimeout(()=>{
              message.error('error creating account')
          }, 2000)
          console.log(err[1]);
          setErrorMessage('error has occured')
          setDisable(false)
          
          });
  
}
    return (
        <section className="background">
            <div className="container-fluid">
                <form onSubmit={registered ? handleSignIn :  handleSignUp}>
                    {
                        registered ?
                        <>
                            <input 
                                type="email"
                                name="email"
                                autoComplete="new-email"
                                placeholder="Email" 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)} 
                            />
                            <Input.Password 
                                name="password"
                                autoComplete="new-password"
                                placeholder="Type password" 
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} 
                            />
                        </>
                        :
                        <>
                            <input 
                                type="text"
                                name="first-name"
                                autoComplete="given-name"
                                placeholder="First name" 
                                value={fname}
                                onChange={(e) => setFname(e.target.value)} 
                            />
                            <input 
                                type="text"
                                name="last-name"
                                autoComplete="family-name"
                                placeholder="Last name" 
                                value={lname}
                                onChange={(e) => setLname(e.target.value)} 
                            />
                            <input 
                                type="email"
                                name="email"
                                autoComplete="new-email"
                                placeholder="Email" 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)} 
                            />
                            <Input.Password 
                                name="password"
                                autoComplete="new-password"
                                placeholder="Type password" 
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} 
                            />
                        </>
                    }
                    <button type="submit">Submit</button>
                    <div>
                        <span onClick={() => {
                            setRegistered(!registered)
                            setEmail('');
                            setPassword('');
                            setErrorMessage('');
                        }}>
                            {registered ? 'Do not have an account? Sign Up here' : 'Already have an account? Sign in here'}
                        </span>
                    </div>
                </form>
                {errorMessage != ''&&<div>{errorMessage}</div>}
            </div>
        </section>
    )
}
