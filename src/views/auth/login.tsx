import React, { ReactNode } from "react"
import { Routes, Route, Link } from "react-router-dom";
import logo from "../../assets/logo.svg"
import heroImage from "../../assets/pablo-hero.svg"
import "./login.scss"
import Dashboard from "../Dashboard";


class Login extends React.Component<any,any>{
    render(){
        return(
            <div className="row">
                <div className="left-side">
                    <header>
                        <img src={logo} alt="Company logo" className="logo"/>
                    </header>
                    <div>
                        <img src={heroImage} alt="Hero" className="hero"/>
                    </div>
                </div>
                <div className="right-side">
                    <form action="">
                        <h3>Welcome!</h3>
                        <p>Enter details to login</p>
                        <label htmlFor="">
                            <input type="email" placeholder="Email"/>
                        </label>
                        <label htmlFor="">
                            <input type="password" placeholder="Password"/>
                        </label>
                        <h6>FORGOT PASSWORD?</h6>
                        <button><Link to="/dashboard">LOG IN</Link></button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login