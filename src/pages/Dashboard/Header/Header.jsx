import React from "react";
import StyledHeader from "./StyledHeader";

const Header = ({ user }) => {
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
