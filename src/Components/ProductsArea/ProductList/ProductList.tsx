import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import ProductModel from "../../../Models/ProductModel";
import notifyService from "../../../Services/NotifyService";
import productsService from "../../../Services/ProductsService";
import usePageTitle from "../../../Utils/usePageTitle";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductList.css";


function ProductList(): JSX.Element {
    
    usePageTitle("Product List");

    const [products, setProducts] = useState<ProductModel[]>([]);

    useEffect(() => {
        productsService.getAllProducts()
            .then(products => setProducts(products))
            .catch(err => notifyService.error(err));
    }, []);

    return (
        <div className="ProductList">

            <NavLink to="/products/new">➕</NavLink>

            {products.map(p => <ProductCard key={p.id} product={p} />)}

        </div>
    );
}

export default ProductList;
