import { Link } from "react-router-dom"

export const Footer = ()=>{
    return(
        <section id="footer">
            <div className="container-fluid">

                <span className="montserrat">subscribe for news & updates</span>
                
                <div>
                    <input type="email" placeholder="enter email address"/>
                </div>
                <div>
                    <button className="btn btn-primary">subscribe</button>
                </div>
                    
                    
                <div>
                    <Link>FAQ</Link> <Link>About Us</Link> <Link>Terms & Conditions</Link>
                </div>

                <div>
                    <div>
                        <span className="montserrat">Contact us</span>
                    </div>
                    <div className="footerFlex"> <ion-icon name="call-outline"></ion-icon> 08800292</div>
                    <div className="footerFlex"> <ion-icon name="mail-outline"></ion-icon> ourmail.com</div>
                    <div className="footerFlex"> <ion-icon name="location-outline"></ion-icon>lagos, lagos, lagos Nigeria</div>
                </div>
            </div>
        </section>
    )
}