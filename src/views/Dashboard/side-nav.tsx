import "./side-nav.scss"
import drop from "../../assets/drop.svg"
import briefcase from "../../assets/briefcase.svg"
import home from "../../assets/home.svg"
import users from "../../assets/users.svg"
import guarantors from "../../assets/guarantors.svg"
import sack from "../../assets/sack.svg"
import handshake from "../../assets/handshake.svg"
import piggybank from "../../assets/piggy-bank.svg"
import loan from "../../assets/loan-requests.svg"
import whitelist from "../../assets/whitelist.svg"
import karma from "../../assets/karma.svg"
import savings from "../../assets/savings-products.svg"
import coin from "../../assets/coins-solid.svg"
import transactions from "../../assets/transactions.svg"
import services from "../../assets/services.svg"
import userAccount from "../../assets/user-account.svg"
import settlements from "../../assets/settlements.svg"
import reports from "../../assets/reports.svg"
import preferences from "../../assets/preferences.svg"
import fees from "../../assets/fees.svg"
import audits from "../../assets/audit.svg"
import systems from "../../assets/system.svg"
import signOut from "../../assets/sign-out.svg"



export default function Side() {
    return(
        <div className="container">
            <div className="switching">
                <img src={briefcase} alt="" />
                <h6>Switch Organistaion</h6>
                <img src={drop} alt="" />
            </div>
            <div className="components">
                <img src={home} alt="" />
                <h6>Dashboard</h6>
            </div>
                <h6 className="heading">CUSTOMERS</h6>
                <div className="components users">
                    <img src={users} alt="" />
                    <h6>Users</h6>
                </div>
                <div className="components">
                    <img src={guarantors} alt="" />
                    <h6>Guarantors</h6>
                </div>
                <div className="components">
                    <img src={sack} alt="" />
                    <h6>Loans</h6>
                </div>
                <div className="components">
                    <img src={handshake} alt="" />
                    <h6>Decision Models</h6>
                </div>
                <div className="components">
                    <img src={piggybank} alt="" />
                    <h6>Savings</h6>
                </div>
                <div className="components">
                    <img src={loan} alt="" />
                    <h6>Loans Requests</h6>
                </div>
                <div className="components">
                    <img src={whitelist} alt="" />
                    <h6>Whitelist</h6>
                </div>
                <div className="components">
                    <img src={karma} alt="" />
                    <h6>Karma</h6>
                </div>
                <h6 className="heading">BUSINESSES</h6>
                <div className="components">
                    <img src={briefcase} alt="" />
                    <h6>Organisation</h6>
                </div>
                <div className="components">
                    <img src={loan} alt="" />
                    <h6>Loan Product</h6>
                </div>
                <div className="components">
                    <img src={savings} alt="" />
                    <h6>Savings Product</h6>
                </div>
                <div className="components">
                    <img src={coin} alt="" />
                    <h6>Fees and Charges</h6>
                </div>
                <div className="components">
                    <img src={transactions} alt="" />
                    <h6>Transactions</h6>
                </div>
                <div className="components">
                    <img src={services} alt="" />
                    <h6>Services</h6>
                </div>
                <div className="components">
                    <img src={userAccount} alt="" />
                    <h6>Service Account</h6>
                </div>
                <div className="components">
                    <img src={settlements} alt="" />
                    <h6>Settlements</h6>
                </div>
                <div className="components">
                    <img src={reports} alt="" />
                    <h6>Reports</h6>
                </div>
                <h6 className="heading">SETTINGS</h6>
                <div className="components">
                    <img src={preferences} alt="" />
                    <h6>Preferences</h6>
                </div>
                <div className="components">
                    <img src={fees} alt="" />
                    <h6>Fees and Pricing</h6>
                </div>
                <div className="components">
                    <img src={audits} alt="" />
                    <h6>Audit Logs</h6>
                </div>
                <div className="components">
                    <img src={systems} alt="" />
                    <h6>System Messages</h6>
                </div>
                <div className="components">
                    <img src={signOut} alt="" className="signout"/>
                </div>
                <hr />
                <h6>Logout</h6>
        </div>
    )
}