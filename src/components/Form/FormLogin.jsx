import React, { useContext , useState} from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import api from "../../services/api";
import { toast } from "react-toastify";

import Button from "../Button/Button";
import { Input } from "../Input/input";

import StyledForm from "./StyledForm";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../Provider/Context/UserContext";

const FormLogin = () => {
	const { setUser } = useContext(UserContext);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();

	const onSubmitHandler = async (data) => {
		try {
			setLoading(true);
			const res = await api.post("sessions", data);

			setUser(res.data.user);

			localStorage.setItem("@TOKEN", JSON.stringify(res.data.token));
			localStorage.setItem("@USERID", JSON.stringify(res.data.user.id));

			toast.success("Login realizado com sucesso");

			setTimeout(() => {
				navigate("/dashboard");
			}, 2000);
		} catch (error) {
			toast.error("Ops, Erro ao fazer login");
			console.log(error);
		} finally {
			setLoading(false);
		}
	};

	return (
		<StyledForm onSubmit={handleSubmit(onSubmitHandler)}>
			<Input
				label="Email"
				name="email"
				type="email"
				placeholder="Digite seu email"
				errors={errors}
				{...register("email")}
			/>

			<Input
				label="Senha"
				name="password"
				type="password"
				placeholder="Digite sua senha"
				errors={errors}
				{...register("password")}
			/>

			<Button>{loading ? <span className="spin"></span> : "Entrar"}</Button>
		</StyledForm>
	);
};

export default FormLogin;

const schema = yup.object().shape({
	email: yup.string().required("Email é obrigatório"),
	password: yup.string().required("Senha é obrigatório"),
});

const inputs = [
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
];
