import { Link } from "react-router-dom";
import "./topbar.css";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Topbar = (topbarProps) => {
    const isLoggedIn = topbarProps.isLoggedIn;
    return (
        <div className="topbarContainer">
            <div className="topbarLeft">
            <Link to="/home" style={{ textDecoration: "none" }}>
                <span className="topbarTitle">ShopKart.</span>
            </Link>
                
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    <Link to="/home" style={{ textDecoration: "none" }}>
                        <span className="topbarLink">Products</span>
                    </Link>
                    <Link to="/login" style={{ textDecoration: "none" }}>
                        <span className="topbarLink">{isLoggedIn ? <>Logout</> : <>Login</>}</span>
                    </Link>                    
                    <div className="topbarLink">
                        <div className="topbarCartIcon">
                            <Link to="/cart" style={{ textDecoration: "none" }}>
                                <ShoppingCartIcon />
                                <span className="topbarCartIconNotify">
                                    {topbarProps.badge}
                                </span>                    
                            </Link>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Topbar;