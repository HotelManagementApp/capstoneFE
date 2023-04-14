import React from "react";
import "../../src/components/card.css"

const Card = ({img,title,text,price})=>{
  
    return(
      <>
    
       <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <div className="card crd shadow rounded-2">
                  <img src={img} alt="" className="image" />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{text}</p>
                        <p className="card-price">{price}</p>
                    </div>
                </div>   
      </div>
      </>
    );
}
export default Card 