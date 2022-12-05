import { createContext, useState } from "react";

export const ModalContext = createContext();

const ModalProvider = ({ children }) => {
	const [active, setActive] = useState(false);
	const [type, setType] = useState("add");

	return (
		<ModalContext.Provider value={{ active, setActive, type, setType }}>
			{children}
		</ModalContext.Provider>
	);
};
export default ModalProvider;
