import { Link } from "react-router-dom"
import { UseContextAuth } from "../ContextFolder/Context/UseContextAuth"

export const SignAd = ()=>{
    const {user} = UseContextAuth();
    if(user){
        return
    }
    return(
        <section>

       
        <div style={{padding:'5% 4% 0 4%'}}>
        <Link to={'register'}>
            <p className="heading montserrat" style={{textAlign:'center', color:'#FF5900'}}>Register now
                 to start booking our luxurious apartment today!
            </p>
        </Link>
        </div>

        </section>
    )
}