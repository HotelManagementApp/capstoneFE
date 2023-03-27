import React from "react"

const Footer = () =>{
    return(
        <>
        
        <div className="footer bg-dark mt-5">
            <div className="foot row">
            <div className="col-7">
                    <h5 className="text-white">CAPSTONE HOTEL</h5>
                    <li><a href="/"  >Home</a></li>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Rooms</a></li>
                    <li><a href="/">Contact</a></li>
                    <li><a href="/">Book Online</a></li>
                </div>
            
                <div className="col-4">
                    <p>Have questions?</p>
                    <p>0046790078</p>
                    <p><a href=".">capstone.hotels.com</a></p>

                </div>
            </div>
                

            </div>
      
        </>
    );
}
export default Footer;