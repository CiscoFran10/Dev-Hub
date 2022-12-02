import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import api from "../../services/api";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

import Button from "../Button/Button";
import { Input, Select } from "../Input/input";
import StyledForm from "./StyledForm";

const FormRegister = () => {
	const navigation = useNavigate();
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm({
		resolver: yupResolver(schema),
		mode: "onChange",
	});

	const onSubmitHandler = async (data) => {
		try {
			const res = await api.post("users", data);

			if (res.status === 201) {
				reset();
				toast.success("Conta criada com sucesso!");

				setTimeout(() => {
					navigation("/");
				}, 2000);
			}
		} catch (error) {
			toast.error("Ops! Algo deu errado");
			console.log(error);
		}
	};

	return (
		<StyledForm onSubmit={handleSubmit(onSubmitHandler)}>
			{inputs.map(({ label, name, type, placeholder }) => (
				<Input
					{...register(name)}
					errors={errors}
					key={label}
					name={name}
					label={label}
					type={type}
					placeholder={placeholder}
					required
				/>
			))}

			<Select
				{...register("course_module")}
				name="course_module"
				label="Selecionar módulo"
				options={selectOptions}
			/>

			<Button type="submit">Cadastrar</Button>
		</StyledForm>
	);
};

export default FormRegister;

const schema = yup.object().shape({
	email: yup
		.string()
		.email("Formato de email inválido ex: email@...")
		.matches(/^(?!.*@[^,]*,)/, "Formato de email inválido"),
	password: yup
		.string()
		.min(8, "Senha precisar ter pelo menos 8 caractéres")
		.matches(/^(?=.*[A-Za-z])/, "Necessario pelo menos uma letra")
		.matches(/(?=\D*\d)/, "Necessario pelo menos um numero")
		.matches(
			/(?=.*[@$\.!%*#?&])/,
			"Necessario pelo menos um caracter especial"
		),
	confirm_password: yup
		.string()
		.oneOf([yup.ref("password"), null], "Senhas precisam ser iguais"),
});

const inputs = [
	{
		label: "Nome",
		name: "name",
		placeholder: "Digite aqui seu nome",
	},
	{
		label: "Email",
		name: "email",
		placeholder: "Digite aqui seu email",
		type: "email",
	},
	{
		label: "Senha",
		name: "password",
		placeholder: "Digite aqui sua senha",
		type: "password",
	},
	{
		label: "Confirmar Senha",
		name: "confirm_password",
		placeholder: "Digite novamente sua senha",
		type: "password",
	},
	{
		label: "Bio",
		name: "bio",
		placeholder: "Fale sobre você",
	},
	{
		label: "Contato",
		name: "contact",
		placeholder: "Opção de contato",
	},
];

const selectOptions = [
	"Primeiro Módulo (Introdução ao Frontend)",
	"Segundo Módulo (Frontend Avançado) ",
	"Terceiro Módulo (Introdução ao Backend)",
	"Quarto Módulo (Backend Avançado)",
];
