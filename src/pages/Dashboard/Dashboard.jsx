import React, { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { UserContext } from "../../Provider/Context/UserContext";

import StyledDashboard from "./StyledDashboard";
import Header from "./Header/Header";
import Button from "../../components/Button/Button";
import { ModalContext } from "../../Provider/Context/ModalContext";
import Modal from "../../components/Modal/Modal";
import { TechContext } from "../../Provider/Context/TechContext";
import { Navigate, useNavigate } from "react-router-dom";

const Dashboard = () => {
	const { user, handleLogout } = useContext(UserContext);
	const { deleteTech } = useContext(TechContext);
	const { setActive } = useContext(ModalContext);

	console.log(user);

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
					<Header />
				</header>

				<main className="container">
					<div className="list-header">
						<h2>Tecnologias</h2>
						<Button callback={() => setActive(true)} className="dark">
							+
						</Button>
					</div>

					<motion.ul
						initial={{ opacity: 0, y: -100 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{
							duration: 1,
							delay: 0.4,
							type: "spring",
						}}
					>
						{user.techs?.length > 0 ? (
							user.techs.map(({ title, status, id }) => (
								<li key={id}>
									<h3>{title}</h3>
									<span>{status}</span>
									<Button callback={() => deleteTech(id)} className="delete" />
								</li>
							))
						) : (
							<p>Nenhuma tecnologia registrada</p>
						)}
					</motion.ul>
				</main>
				<Modal />
			</StyledDashboard>
		</motion.div>
	);
};

export default Dashboard;
