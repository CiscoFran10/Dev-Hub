import { createContext, useEffect, useState } from "react";
import api from "../../services/api";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
	const [user, setUser] = useState("");
	const token = JSON.parse(localStorage.getItem("@TOKEN"));

	const getUser = async () => {
		try {
			const res = await api.get("profile", {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});

			setUser(res.data);
		} catch (error) {
			console.log(error);
			localStorage.clear();
		}
	};

	useEffect(() => {
		if (token) {
			getUser();
		}
	}, []);

	return (
		<UserContext.Provider value={{ user, setUser, getUser }}>
			{children}
		</UserContext.Provider>
	);
};

export default UserProvider;
