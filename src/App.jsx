import { Routes, Route, useLocation, Router } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Dashboard from "./pages/Dashboard/Dashboard";
import ProtectedRoute from "./pages/ProtectedRoute/ProtectedRoute";

const AnimatedRoutes = () => {
	const location = useLocation();

	return (
		<AnimatePresence mode="wait">
			<Routes location={location} key={location.pathname}>
				<Route index path="/" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route element={<ProtectedRoute />}>
					<Route path="/dashboard" element={<Dashboard />} />
				</Route>
			</Routes>
		</AnimatePresence>
	);
};

function App() {
	return (
		<BrowserRouter>
			<AnimatedRoutes />
			<ToastContainer
				position="top-right"
				autoClose={2000}
				closeOnClick
				theme="dark"
			/>
		</BrowserRouter>
	);
}

export default App;
