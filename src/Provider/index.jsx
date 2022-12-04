import React from "react";

import UserProvider from "./Context/UserContext";
import ModalProvider from "./Context/ModalContext";
import TechProvider from "./Context/TechContext";

const Providers = ({ children }) => {
	return (
		<UserProvider>
			<ModalProvider>
				<TechProvider>{children}</TechProvider>
			</ModalProvider>
		</UserProvider>
	);
};

export default Providers;
