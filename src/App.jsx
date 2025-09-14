import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import ProductsPage from "./pages/ProductsPage";
import DeafaultLayout from "./layouts/DeafaultLayout";
import ProductDetailPage from "./pages/ProductDetailPage";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<DeafaultLayout />}>
					<Route path="/" element={<HomePage />} />
					<Route path="/aboutus" element={<AboutUs />} />
					<Route path="/products">
						<Route index element={<ProductsPage />} />
						<Route path=":id" element={<ProductDetailPage />} />
					</Route>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
