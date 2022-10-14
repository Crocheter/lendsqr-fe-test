import "./user.scss"
import userIcon from "../../assets/user-icon.svg"
import activeUser from "../../assets/active-user.svg"
import loanUser from "../../assets/loan-user.svg"
import savingsUser from "../../assets/savings-user.svg"
export default function Users(){
    return (
        <div>
            <h1>Users</h1>
            <div className="user">
                <div className="user-item">
                    <img src={userIcon} alt="" />
                    <h6>USERS</h6>
                    <h3>2,453</h3>
                </div>
                <div className="user-item">
                    <img src={activeUser} alt="" />
                    <h6>ACTIVE USERS</h6>
                    <h3>2,453</h3>
                </div>
                <div className="user-item">
                    <img src={loanUser} alt="" />
                    <h6>USERS WITH LOANS</h6>
                    <h3>12,453</h3>
                </div>
                <div className="user-item">
                    <img src={savingsUser} alt="" />
                    <h6>USERS WITH SAVINGS</h6>
                    <h3>102,453</h3>
                </div>
            </div>
        </div>
    )
}