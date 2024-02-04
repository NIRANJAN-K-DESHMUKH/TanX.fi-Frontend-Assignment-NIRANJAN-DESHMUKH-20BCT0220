import Topbar from "../../components/topbar/Topbar.jsx";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import "./productdetailpage.css";
import { useSelector } from "react-redux";

const ProductDetailPage = (user) => {
    const cart = useSelector((state) => {
        return state.Reducers.cart
    });
    return (
        <>
            <Topbar isLoggedIn={true} badge={cart.length}/>
            <div className="detailPageContainer">
                <div className="detailWrapper">
                    <img src="assets/shrtImg.jpg" alt="" />
                    <div className="detailsDiv">
                        <div className="detailsTop">
                            <div className="detailsTitle detailItem">
                                <span>Ilana</span>
                                <div className="detailIcon">
                                    <FavoriteBorderOutlinedIcon />
                                </div>
                            </div>
                            <span className="detailsDesc detailItem">
                                What does it feel like to witness climate change playing out in real-time? #notcool. Sound the alarm with our Women's Climate Change T-shirt, printed on organic cotton in our Carbon Neutral factory. Plus, when it's worn out you can send it back to us to be remade into something new. That's what real sustainability means to us.
                            </span>
                            <span className="detailsPrice detailItem">₹ 350</span>                            
                        </div>
                        <div className="detailsBtm">
                            <button className="buyBtn">Buy Now</button>
                            <button className="addBtn">Add to Basket</button>
                        </div>
                    </div>
                </div>
            </div>
                 
        </>
    );
};

export default ProductDetailPage;