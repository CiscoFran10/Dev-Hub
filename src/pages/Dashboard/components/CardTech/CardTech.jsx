import React, { useContext } from "react";
import { ModalContext } from "../../../../Provider/Context/ModalContext";
import { TechContext } from "../../../../Provider/Context/TechContext";

import StyledCardTech from "./StyledCardTech";

const CardTech = ({ title, status, id }) => {
	const { setSelected } = useContext(TechContext);
	const { setActive, setType } = useContext(ModalContext);

	const handleClick = (title, status, id) => {
		setSelected({ title: title, status: status, id: id });
		setActive(true);
		setType("update");
	};

	return (
		<StyledCardTech onClick={() => handleClick(title, status, id)}>
			<h3>{title}</h3>
			<span>{status}</span>
		</StyledCardTech>
	);
};

export default CardTech;
