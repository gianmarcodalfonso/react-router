import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetailPage = () => {
	const { id } = useParams();
	const [product, setProduct] = useState({});

	useEffect(() => {
		axios.get(`https://fakestoreapi.com/products/${id}`).then((resp) => {
			setProduct(resp.data);
		});
	}, [id]);

	return (
		<div className="container">
			<div className="row">
				<div className="col-12">
					<h1>Dettaglio prodotto</h1>
				</div>
				<div className="col-12">
					<div className="card">
						<div className="card-header">{product.title}</div>
						<div className="card-body">
							<img src={product.image} alt={product.title} />
							<p>{product.category}</p>
							<p>{product.price}</p>
							<p>{product.description}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductDetailPage;
