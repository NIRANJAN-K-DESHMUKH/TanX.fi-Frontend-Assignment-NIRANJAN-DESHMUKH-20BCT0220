import { useSelector } from "react-redux";
import LoginCard from "../../components/logincard/LoginCard.jsx";
import Topbar from "../../components/topbar/Topbar.jsx";
import "./loginpage.css";

const LoginPage = (user) => {
    const cart = useSelector((state) => {
        return state.Reducers.cart
    });
    return (
        <>
            <Topbar isLoggedIn={false} badge={cart.length}/>
            <div className="loginCardContainer">
                <LoginCard />
            </div>
                 
        </>
    );
};

export default LoginPage;