import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { motion, AnimatePresence } from "framer-motion";
import { ModalContext } from "../../../../Provider/Context/ModalContext";
import { TechContext } from "../../../../Provider/Context/TechContext";

import { Input, Select } from "../../../../components/Input/input";
import Button from "../../../../components/Button/Button";
import StyledModal from "./StyledModal";
import StyledForm from "../../../../components/Form/StyledForm";

const ModalUpdate = () => {
	const { active, setActive, type } = useContext(ModalContext);
	const { deleteTech, selected, updateTech, loading } = useContext(TechContext);
	const {
		register,
		reset,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	useEffect(() => {
		reset();
	}, [active]);

	return (
		<AnimatePresence>
			{active && type === "update" && (
				<StyledModal
					className="modal-container"
					onClick={() => setActive(false)}
				>
					<motion.div
						onClick={(e) => e.stopPropagation()}
						key={active}
						initial={{ opacity: 0, y: -100 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: 100 }}
						transition={{
							duration: 0.4,
							type: "spring",
							ease: "easeOut",
						}}
						className="modal"
					>
						<div className="modal-header">
							<h2>Atualizar Tecnologia</h2>
							<Button className="close" callback={() => setActive(false)}>
								X
							</Button>
						</div>

						<StyledForm onSubmit={handleSubmit(updateTech)}>
							<Input
								label="Nome"
								name="title"
								placeholder="Tecnologia..."
								errors={errors}
								{...register("title")}
								defaultValue={selected.title}
								disabled={true}
							/>
							<Select
								label="Selecionar status"
								name="status"
								options={["Iniciante", "Intermediário", "Avançado"]}
								errors={errors}
								defaultValue={selected.status}
								{...register("status")}
							/>

							<div className="modal-buttons">
								<Button type="submit">
									{loading ? (
										<span className="spin"></span>
									) : (
										"Salvar alterações"
									)}
								</Button>
								<Button className="grey" callback={deleteTech}>
									Excluir
								</Button>
							</div>
						</StyledForm>
					</motion.div>
				</StyledModal>
			)}
		</AnimatePresence>
	);
};

export default ModalUpdate;

const schema = yup.object().shape({
	status: yup.string().required("Status é obrigatório"),
});
