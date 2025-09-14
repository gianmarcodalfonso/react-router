import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
	return (
		<header>
			<div className="container-fluid">
				<div className="row">
					<div className="col-12">
						<ul className="list-unstyled d-flex">
							<li className="me-3">
								<NavLink to="/">Homepage</NavLink>
							</li>
							<li className="me-3">
								<NavLink to="/aboutus">Chi siamo</NavLink>
							</li>
							<li className="me-3">
								<NavLink to="/products">Prodotti</NavLink>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
