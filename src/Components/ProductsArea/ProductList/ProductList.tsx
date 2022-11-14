import { useEffect, useState } from "react";
import ProductModel from "../../../Models/ProductModel";
import notifyService from "../../../Services/NotifyService";
import productsService from "../../../Services/ProductsService";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductList.css";

function ProductList(): JSX.Element {

    const [products, setProducts] = useState<ProductModel[]>([]);

    useEffect(() => {
        productsService.getAllProducts()
            .then(products => setProducts(products))
            .catch(err => notifyService.error(err));
    }, []);

    return (
        <div className="ProductList">
            {products.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
    );
}

export default ProductList;
