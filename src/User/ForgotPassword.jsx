import { useState } from "react"
import { UseContextAuth } from "../ContextFolder/Context/UseContextAuth";
import { message } from "antd";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../App";

 export const ForgotPassword = ()=>{
    const [email,setEmail] = useState('');
    const {dispatch} = UseContextAuth();
    const handlePasswordReset = async (e) => {
        e.preventDefault();
        dispatch({type:'loading', payload:true})

        try {
            await sendPasswordResetEmail(auth, email);
            message.success('Password reset email sent! Please check your inbox.');
            setEmail('');
            
        } catch (error) {
            console.error('Password Reset Error:', error);
            message.error('Error sending password reset email.');
        } finally {
            dispatch({type:'loading', payload:false})
        }
    };

    return(
        <section>
            <div className="container-fluid">
                <form className="registerForm">
                    <h1 className="monserrat">forgot password</h1>
                    <div>
                        <label htmlFor="email">Email</label>
                    </div>
                    <input placeholder="email" required type="email"
                            name="email" autoComplete="new-email"
                            onChange={e=>setEmail(e.target.value)}
                    />
                    <button onClick={handlePasswordReset} type="submit">send reset email</button>
                </form>
            </div>
        </section>
    )
 }