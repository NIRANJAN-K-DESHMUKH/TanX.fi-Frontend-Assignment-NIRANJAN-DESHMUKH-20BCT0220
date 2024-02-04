import { useSelector } from "react-redux";
import CartCard from "../../components/cartcard/CartCard";
import Topbar from "../../components/topbar/Topbar";
import "./cartpage.css";

const CartPage = (user) => {

    const cart = useSelector((state) => {
        return state.Reducers.cart
    });

    return (
        <>
            <Topbar isLoggedIn={true} badge={cart.length}/>
            <div className="cartContainer">
                <div className="cartItems">
                    <span className="cartTitle">My Cart</span>
                    {   cart.length===0 
                        ? <div className="emptyAlert">Your cart is Empty :(</div>
                        : cart.map((c) => {
                            return (
                                <CartCard 
                                    key={c.id}
                                    item={c}
                                />
                            );
                        })
                    }
                </div>
                <div className="cartPrice">
                    <span className="cartPriceTitle">Price Details</span>
                    <div className="cartPriceDetails">
                        <span>Price</span>
                        <span>2150</span>
                    </div>
                    <div className="cartPriceDetails">
                        <span>Discount Price</span>
                        <span>100</span>
                    </div>
                    <div className="cartPriceDetails">
                        <span>Delivery Charge</span>
                        <span>50</span>
                    </div>
                    <hr />
                    <div className="cartPriceDetails totalPrice">
                        <span>Total</span>
                        <span>2100</span>
                    </div>

                    <button className="placeBtn">Place Order</button>

                </div>
                
            </div>
                 
        </>
    );
};

export default CartPage;