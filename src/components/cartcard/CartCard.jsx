import { useDispatch } from "react-redux";
import "./cartcard.css";
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';
import { deleteProduct } from "../../actions/Actions";

const CartCard = (props) => {
    const item = props.item;
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteProduct(item.id));
    };

    return (
        <div className="itemCard">
            <img src={item.data.image} alt="" className="cartImg"/>
            <div className="itemDetails">
                <span className="itemCardItem">{item.data.title}</span>
                <div className="itemPrice itemCardItem">
                    <span>₹ {item.data.amount}</span>
                    <HighlightOffOutlinedIcon className="delIcon" onClick={handleDelete}/>
                </div>
                
                <div className="incDec itemCardItem">
                    <span className="dec">-</span>
                    <input type="text" className="itemCount" value="1"/>
                    <span className="inc">+</span>
                </div>
            </div>
            
        </div>
    );
};

export default CartCard;
                    



                    