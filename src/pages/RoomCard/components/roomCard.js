
import SmallButton from "../../../components/smallButton";
import "../style/style.css"

const RoomCard = ({img,roomType,price,desc}) =>{

    return(
        <>
            <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="card shadow-lg rounded-2" id="room-card">
                    <img src={img} alt ="" className="room-image"/>
                    <div className="card-body">
                        
                        <h5 className="card-title">{roomType}</h5>
                        <p className="card-text">{desc}</p>
                        <p className="card-text">{price}</p>
                        <SmallButton/>
                    </div>
                </div>

            </div>
        </>
    )

}
export default RoomCard;