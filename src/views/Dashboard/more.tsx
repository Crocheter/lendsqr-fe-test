import "./more.scss"
export default function More(){
    return (
    <div className="more">
        <div>
            <img src="../../assets/view.svg" alt="" />
            <p>View Details</p>
        </div>
        <div>
            <img src="../../assets/delete.svg" alt="" />
            <p>Blacklist User</p>
        </div>
        <div>
            <img src="../../assets/user.svg" alt="" />
            <p>Activate User</p>
        </div>
    </div>
    )
}