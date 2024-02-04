import { useDispatch } from "react-redux";
import "./logincard.css";
import { logIn } from "../../actions/Actions";
import { Link } from "react-router-dom";
import { useState } from "react";

const LoginCard = () => {

    const dispatch = useDispatch();

    const handleLogin = (event) => {
        dispatch(logIn({
            email: event.target.email.value,
            password: event.target.email.password
        }));
    }

    return (
        <div className="loginCard">
            <form action="" className="loginForm" onSubmit={handleLogin}>
                <span className="loginTitle formItem">Login</span>
                <input type="text" className="formItem inpt" name="email" placeholder="Email Address"/>
                <input type="password" className="formItem inpt" name="password" placeholder="Password"/>
                <div className="formItem loginFormBtm">
                    <Link to="/register" style={{ textDecoration: "none" }}>
                        <span className="registerLink">New User? Create an account</span>                   
                    </Link>
                    
                    <Link to="/home" style={{ textDecoration: "none" }}>
                        <button type="submit" className="loginBtn">Login</button>                   
                     </Link>
                </div>
            </form>
            
        </div>
    );
};

export default LoginCard;