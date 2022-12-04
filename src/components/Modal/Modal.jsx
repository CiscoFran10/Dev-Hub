import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import api from "../../services/api";
import { toast } from "react-toastify";
import { motion, AnimatePresence } from "framer-motion";

import { Input, Select } from "../Input/input";
import { ModalContext } from "../../Provider/Context/ModalContext";
import Button from "../Button/Button";
import StyledModal from "./StyledModal";
import StyledForm from "../Form/StyledForm";
import { TechContext } from "../../Provider/Context/TechContext";

const Modal = () => {
	const {
		register,
		reset,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});
	const { active, setActive } = useContext(ModalContext);
	const { addTech, loading } = useContext(TechContext);

	useEffect(() => {
		reset();
	}, [active]);

	return (
		<AnimatePresence>
			{active && (
				<StyledModal className="modal-container">
					<motion.div
						key={active}
						initial={{ opacity: 0, y: -100 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: 100 }}
						transition={{ duration: 0.4, type: "spring", ease: "easeOut" }}
						className="modal"
					>
						<div className="modal-header">
							<h2>Cadastrar Tecnologia</h2>
							<Button className="close" callback={() => setActive(false)}>
								X
							</Button>
						</div>

						<StyledForm onSubmit={handleSubmit(addTech)}>
							<Input
								label="Nome"
								name="title"
								placeholder="Tecnologia..."
								errors={errors}
								{...register("title")}
							/>

							<Select
								label="Selecionar status"
								name="status"
								options={["Iniciante", "Intermediário", "Avançado"]}
								errors={errors}
								{...register("status")}
							/>

							<Button>
								{loading ? (
									<span className="spin"></span>
								) : (
									"Cadastrar Tecnologia"
								)}
							</Button>
						</StyledForm>
					</motion.div>
				</StyledModal>
			)}
		</AnimatePresence>
	);
};

export default Modal;

const schema = yup.object().shape({
	title: yup.string().required("Tecnologia é obrigatorio"),
	status: yup.string().required("Status é obrigatório"),
});
