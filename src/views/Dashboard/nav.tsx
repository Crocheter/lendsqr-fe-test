import avatar from "../../assets/avatar.svg"
import dropdown from "../../assets/dropdown.svg"
import notification from "../../assets/notification.svg"
import search from "../../assets/search-icon.svg"
import logo from "../../assets/logo.svg"
import "./nav.scss"
export default function Nav(){
    return(
        <div className="nav">
            <img src={logo} className="logo" alt="" />
            <div className="search">
                <input type="text" placeholder="Search for anything"/>
                <img src={search} className="icon" alt="" />
            </div>
            <div className="nav-items">
                <p className="docs">Docs</p>
                <img src={notification} alt="" className="notify"/>
                <div className="profile">
                    <img src={avatar} alt="" />
                    <p>Adedeji</p>
                    <img src={dropdown} className="dropdown" alt="" />
                </div>
            </div>
        </div>
    )
}