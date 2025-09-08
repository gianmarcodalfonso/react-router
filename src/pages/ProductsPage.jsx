import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const ProductsPage = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		axios.get("https://fakestoreapi.com/products").then((resp) => {
			console.log(resp.data);
		});
	}, []);

	return (
		<div className="container">
			<div className="row">
				<div className="col-12">
					<h1>Homepage</h1>
				</div>
			</div>
		</div>
	);
};

export default ProductsPage;
