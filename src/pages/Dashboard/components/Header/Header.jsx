import React, { useContext } from "react";
import { UserContext } from "../../../../Provider/Context/UserContext";
import StyledHeader from "./StyledHeader";

const Header = () => {
	const { user } = useContext(UserContext);
	return (
		<StyledHeader>
			<div className="container">
				<h1>Olá, {user.name}</h1>
				<p>{user.course_module}</p>
			</div>
		</StyledHeader>
	);
};

export default Header;
