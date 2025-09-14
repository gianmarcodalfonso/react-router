import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";

const ProductsPage = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		axios.get("https://fakestoreapi.com/products").then((resp) => {
			setProducts(resp.data);
		});
	}, []);

	return (
		<>
			<div className="container">
				<div className="row">
					<div className="col-12">
						<h1>Pagina prodotti</h1>
					</div>
					{products.map((product) => {
						return (
							<div className="col-4 my-3" key={product.id}>
								<div className="card h-100">
									<div className="card-header">{product.title}</div>
									<div className="card-body">
										<p>{product.category}</p>
										<p>
											<em>{product.price}&euro;</em>
										</p>
									</div>
									<div className="card-footer">
										<Link to={`/products/${product.id}`}>Dettaglio</Link>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
};

export default ProductsPage;
