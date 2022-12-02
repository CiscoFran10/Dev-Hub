import React from "react";
import StyledRegister from "./StyledRegister";
import { motion } from "framer-motion";

import FormRegister from "../../components/Form/FormRegister";
import { Link } from "react-router-dom";

const Register = () => {
	return (
		<motion.div
			initial={{ x: "-100%" }}
			animate={{ x: "0%" }}
			transition={{ duration: 0.75, type: "spring", ease: "easeOut" }}
			exit={{ x: "100%" }}
		>
			<StyledRegister>
				<div className="header">
					<h1>Kenzie Hub</h1>
					<Link to="/">Voltar</Link>
				</div>

				<div className="form-container">
					<h2>Crie sua conta</h2>
					<p>Rapido e grátis, vamos nessa</p>

					<FormRegister />
				</div>
			</StyledRegister>
		</motion.div>
	);
};

export default Register;
