import { useSelector } from "react-redux";
import RegisterCard from "../../components/registercard/RegisterCard.jsx";
import Topbar from "../../components/topbar/Topbar.jsx";
import "./registerpage.css";

const RegisterPage = (user) => {
    const cart = useSelector((state) => {
        return state.Reducers.cart
    });
    
    return (
        <>
            <Topbar isLoggedIn={false} badge={cart.length}/>
            <div className="registerCardContainer">
                <RegisterCard />
            </div>
                 
        </>
    );
};

export default RegisterPage;