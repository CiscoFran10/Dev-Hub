import { createContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import api from "../../services/api";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
	const [user, setUser] = useState(
		() => JSON.parse(localStorage.getItem("@TOKEN")) || ""
	);

	const getUser = async () => {
		try {
			const token = JSON.parse(localStorage.getItem("@TOKEN"));

			if (token) {
				const res = await api.get("profile", {
					headers: {
						Authorization: `Bearer ${token}`,
					},
				});

				setUser(res.data);
			}
		} catch (error) {
			console.log(error);
			localStorage.clear();
		}
	};

	useEffect(() => {
		getUser();
	}, []);

	const handleLogout = () => {
		localStorage.clear();

		setUser("");
	};

	return (
		<UserContext.Provider value={{ user, setUser, getUser, handleLogout }}>
			{children}
		</UserContext.Provider>
	);
};

export default UserProvider;
