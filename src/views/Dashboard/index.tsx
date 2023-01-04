import Nav from "./nav"
import Side from "./side-nav"
import Users from "./user"
import DetailsTable from "./details-table"
import PageNav from "./page-nav"
import "./index.scss"
export default function Dashboard() {
    return (
        <div className="dashboard">
            <Nav />
            <div className="body">
                <Side />
                <div className="user-details">
                    <Users />
                    <DetailsTable />
                    <PageNav />
                </div>
            </div>
        </div>
    )
}