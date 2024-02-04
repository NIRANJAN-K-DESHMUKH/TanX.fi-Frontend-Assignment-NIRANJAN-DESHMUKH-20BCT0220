import "./productcardcontainer.css";
import ProductCard from "../productcard/ProductCard.jsx";
import axios from "axios";
import { useEffect, useState } from "react";


const ProductCardContainer = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const res = await axios.get("http://localhost:5000/products");
            
            setProducts(res.data);
        };
        fetchProducts();
    }, []);

    return (
        <div className="productCardsContainer">
            {
                products.map((p)=> {
                    return (
                        <ProductCard 
                            key={p.id}
                            product={p}
                        />
                    )
                })
            }
        </div>
    );
};

export default ProductCardContainer;