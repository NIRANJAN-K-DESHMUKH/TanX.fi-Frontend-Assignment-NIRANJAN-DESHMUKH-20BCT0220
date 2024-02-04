import { useSelector } from "react-redux";
import ProductCardContainer from "../../components/productcardcontainer/ProductCardContainer";
import Topbar from "../../components/topbar/Topbar.jsx";
import "./homepage.css";

const HomePage = (user) => {
    const cart = useSelector((state) => {
        return state.Reducers.cart
    });
    return (
        <>
            <Topbar isLoggedIn={true} badge={cart.length}/>
            <ProductCardContainer />  
        </>
    );
};

export default HomePage;