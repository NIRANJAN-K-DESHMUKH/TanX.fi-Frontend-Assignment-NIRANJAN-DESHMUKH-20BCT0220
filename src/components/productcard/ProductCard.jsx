import "./productcard.css";
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useDispatch } from "react-redux";
import {addProduct} from "../../actions/Actions.jsx";

const ProductCard = (props) => {
    const product = props.product;
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(addProduct(product));
    };

    return (
        <div className="productCard">
            <img className="productImg" src={product.image} alt="" />
            <div className="productCardInfo">
                <span className="infoDiv infoTitle">{product.title}</span>
                <span className="infoDiv">₹ {product.amount}</span>
                <div className="productRating infoDiv">{product.rating}</div>
                <div className="productCardBtm infoDiv">
                    <FavoriteIcon  className="productIcon"/>
                    <AddShoppingCartOutlinedIcon className="productIcon" onClick={handleClick}/>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;