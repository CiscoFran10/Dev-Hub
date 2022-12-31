import React from "react";
import { Link } from "react-router-dom";
import StyledLogin from "./StyledLogin";
import { motion } from "framer-motion";

import FormLogin from "../../components/Form/FormLogin";

const Login = () => {
	return (
		<motion.div
			initial={{ x: "-100%" }}
			animate={{ x: "0%" }}
			transition={{ duration: 0.75, type: "spring", ease: "easeOut" }}
			exit={{ x: "100%" }}
		>
			<StyledLogin className="container">
				<h1>Dev Hub</h1>

				<div className="form-container">
					<h2>Login</h2>
					<FormLogin />

					<p>Ainda não possui uma conta?</p>
					<Link to="/register">Cadastre-se</Link>
				</div>
			</StyledLogin>
		</motion.div>
	);
};

export default Login;
