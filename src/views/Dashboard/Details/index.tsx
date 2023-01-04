import Nav from "../nav"
import Side from "../side-nav"
import Heading from "./heading"
import Title from "./title"
import Info from "./info"
import "./index.scss"
export default function Details() {
    return (
        <div>
            <div className="details">
            <Nav />
            <div className="body">
                <Side />
                <div className="user-details">
                    <Heading />
                    <Title />
                    <Info />
                </div>
            </div>
        </div>
        </div>
    )
}