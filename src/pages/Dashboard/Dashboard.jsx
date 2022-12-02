import React from "react";
import { motion } from "framer-motion";

import StyledDashboard from "./StyledDashboard";
import Header from "./Header/Header";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";

const Dashboard = ({ user, setUser }) => {
	const navigate = useNavigate();

	const handleLogout = () => {
		localStorage.removeItem("@TOKEN");
		localStorage.removeItem("@USERID");

		setUser("");
		navigate("/");
	};

	return (
		<motion.div
			initial={{ x: "-100%" }}
			animate={{ x: "0%" }}
			transition={{ duration: 0.75, type: "spring", ease: "easeOut" }}
			exit={{ x: "100%" }}
		>
			<StyledDashboard>
				<header>
					<div className="container">
						<nav>
							<h1>Kenzie hub</h1>
							<Button callback={handleLogout} className="dark">
								Sair
							</Button>
						</nav>
					</div>
					<Header user={user} />
				</header>

				<main></main>
			</StyledDashboard>
		</motion.div>
	);
};

export default Dashboard;
