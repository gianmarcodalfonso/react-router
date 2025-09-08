import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/Aboutus";
import ProductsPage from "./pages/ProductsPage";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/" element={<AboutUs />} />
				<Route path="/" element={<ProductsPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
