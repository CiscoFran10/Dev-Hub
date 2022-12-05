import { createContext, useContext, useState } from "react";
import api from "../../services/api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { ModalContext } from "./ModalContext";
import { UserContext } from "./UserContext";

export const TechContext = createContext();

const TechProvider = ({ children }) => {
	const { setActive } = useContext(ModalContext);
	const { getUser } = useContext(UserContext);
	const [loading, setLoading] = useState(false);
	const token = JSON.parse(localStorage.getItem("@TOKEN"));
	const [selected, setSelected] = useState("");

	const addTech = async (data) => {
		try {
			setLoading(true);
			const res = await api.post("users/techs", data, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});

			if (res) {
				toast.success("Tecnologia adicionada");
				getUser();
				setActive(false);
			}
		} catch (error) {
			console.log(error);
			toast.error("Ops, algo deu errado");
		} finally {
			setLoading(false);
		}
	};

	const updateTech = async (data) => {
		try {
			setLoading(true);
			const res = await api.put(`users/techs/${selected.id}`, data, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});

			if (res) {
				toast.success("Tecnologia atualizada");
				getUser();
				setActive(false);
			}
		} catch (error) {
			console.log(error);
			toast.error("Ops, algo deu errado");
		} finally {
			setLoading(false);
		}
	};

	const deleteTech = async (event) => {
		event.preventDefault();
		try {
			const res = await api.delete(`users/techs/${selected.id}`, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});

			toast.success("Tecnologia removida");
			getUser();
			setActive(false);
		} catch (error) {
			console.log(error);
			toast.error("Ops, algo deu errado");
		}
	};

	return (
		<TechContext.Provider
			value={{
				loading,
				addTech,
				deleteTech,
				updateTech,
				selected,
				setSelected,
			}}
		>
			{children}
		</TechContext.Provider>
	);
};

export default TechProvider;
