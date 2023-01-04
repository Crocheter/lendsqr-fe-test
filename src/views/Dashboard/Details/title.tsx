import "./title.scss"
import identity from "../../../assets/user.svg"
import star from "../../../assets/star.svg"
import transparent from "../../../assets/transparent-star.svg"
export default function Title() {
    return (
        <div className="title">
            <div className="board">
                <div className="name">
                    <img src={identity} alt="" />
                    <div>
                        <h6>Grace Effiom</h6>
                        <p>LSQFf587g90</p>
                    </div>
                </div>
                <div className="tier">
                    <h6>User's Tier</h6>
                    <div className="stars">
                        <img src={star} alt="" />
                        <img src={transparent} alt="" />
                        <img src={transparent} alt="" />
                    </div>
                </div>
                <div className="amount">
                    <h6>₦200,000.00</h6>
                    <p>9912345678/Providus Bank</p>
                </div>
            </div>
            <div className="details-nav">
                <h6 className="on">General Details</h6>
                <h6>Documents</h6>
                <h6>Bank Details</h6>
                <h6>Loans</h6>
                <h6>Savings</h6>
                <h6>App and System</h6>
            </div>
        </div>
    )
}