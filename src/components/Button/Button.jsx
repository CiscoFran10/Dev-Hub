import React from "react";
import StyledButton from "./StyledButton";

const Button = ({ className, children, callback, ...props }) => {
	return (
		<StyledButton className={className} onClick={callback} {...props}>
			{children}
		</StyledButton>
	);
};

export default Button;
