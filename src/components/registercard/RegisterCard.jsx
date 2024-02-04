import { useDispatch } from "react-redux";
import "./registercard.css";
import { logIn } from "../../actions/Actions";
import { Link } from "react-router-dom";


const RegisterCard = () => {

    const dispatch = useDispatch();

    const handleLogin = (event) => {
        dispatch(logIn({
            email: event.target.email.value,
            password: event.target.email.password
        }));
    }

    return (
        <div className="registerCard">
            <form action="" className="registerForm" onSubmit={handleLogin}>
                <span className="registerTitle formItem">Register</span>
                <input type="text" className="formItem inpt" placeholder="Full Name"/>
                <input type="text" className="formItem inpt" name="email"  placeholder="Email Address"/>
                <input type="password" className="formItem inpt" name="password" placeholder="Password"/>
                <div className="formItem registerFormBtm">
                    
                    <Link to="/login" style={{ textDecoration: "none" }}>
                    <span className="registerLink">Already have an account? Login</span>                   
                    </Link>
                    
                    <Link to="/" style={{ textDecoration: "none" }}>
                    <button className="registerBtn">Register</button>                   
                     </Link>
                </div>
            </form>
            
        </div>
    );
};

export default RegisterCard;