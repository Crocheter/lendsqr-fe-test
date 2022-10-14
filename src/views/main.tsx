import { Routes, Route, Link } from "react-router-dom";
import Login from "./auth/login";

export default function Main(){
    return(
        <div>
            <Routes>
                <Route path="/" element={<Login />} />
            </Routes>
            <Login />
        </div>
    )
}