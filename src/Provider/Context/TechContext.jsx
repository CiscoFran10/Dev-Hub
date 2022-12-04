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
			}
		} catch (error) {
			console.log(error);
			toast.error("Ops, algo deu errado");
		} finally {
			setLoading(false);
			setActive(false);
		}
	};

	const deleteTech = async (id) => {
		try {
			setLoading(true);
			const res = await api.delete(`users/techs/${id}`, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});

			toast.success("Tecnologia removida");
			getUser();
		} catch (error) {
			console.log(error);
			toast.error("Ops, algo deu errado");
		} finally {
			setLoading(false);
		}
	};

	return (
		<TechContext.Provider value={{ loading, addTech, deleteTech }}>
			{children}
		</TechContext.Provider>
	);
};

export default TechProvider;
