import { Routes, Route, useLocation, Router } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Dashboard from "./pages/Dashboard/Dashboard";
import { useState } from "react";

const AnimatedRoutes = () => {
	const location = useLocation();
	const [user, setUser] = useState("");

	return (
		<AnimatePresence mode="wait">
			<Routes location={location} key={location.pathname}>
				<Route index path="/" element={<Login setUser={setUser} />} />
				<Route path="/register" element={<Register />} />
				<Route path="/dashboard" element={<Dashboard user={user} />} />
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
