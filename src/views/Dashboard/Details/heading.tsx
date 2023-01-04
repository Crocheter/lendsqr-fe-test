import "./heading.scss"
import back from "../../../assets/back.svg"
export default function Heading() {
    return (
        <div className="headings">
            <div className="go-back">
                <img src={back} alt="" />
                <h6>Back to User</h6>
           </div>
           <div className="heading">
                <h5>User Details</h5>
                <div className="state-buttons">
                    <button className="blacklist">BLACKLIST USER</button>
                    <button className="activate">ACTIVATE USER</button>
                </div>
            </div> 
        </div>
    )
}