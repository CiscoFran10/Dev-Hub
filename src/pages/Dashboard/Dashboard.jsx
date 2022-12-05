import React, { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { UserContext } from "../../Provider/Context/UserContext";

import StyledDashboard from "./StyledDashboard";
import Header from "./components/Header/Header";
import Button from "../../components/Button/Button";
import { ModalContext } from "../../Provider/Context/ModalContext";
import ModalAdd from "./components/Modal/ModalAdd";
import ModalUpdate from "./components/Modal/ModalUpdate";
import CardTech from "./components/CardTech/CardTech";

const Dashboard = () => {
	const { user, handleLogout } = useContext(UserContext);
	const { setActive, setType } = useContext(ModalContext);

	const handleClick = () => {
		setActive(true);
		setType("add");
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
					<Header />
				</header>

				<main className="container">
					<div className="list-header">
						<h2>Tecnologias</h2>
						<Button callback={handleClick} className="dark">
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
								<CardTech key={id} title={title} status={status} id={id} />
							))
						) : (
							<p>Nenhuma tecnologia registrada</p>
						)}
					</motion.ul>
				</main>
				<ModalAdd />
				<ModalUpdate />
			</StyledDashboard>
		</motion.div>
	);
};

export default Dashboard;
