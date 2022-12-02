import styled from "styled-components";
import { motion } from "framer-motion";

const StyledInput = styled(motion.label)`
	display: block;
	position: relative;

	span {
		font-size: 0.75rem;
		color: var(--grey-0);
		display: block;
		margin-bottom: 10px;
	}

	.helper-text {
		font-size: 0.875rem;
		color: var(--grey-1);
		margin-top: 10px;
	}

	input,
	select {
		background-color: var(--grey-2);
		width: 100%;
		border: 1px solid transparent;
		border-radius: 4px;
		padding: 13px 15px;
		transition: 0.3s;
		color: var(--grey-0);

		&::placeholder {
			color: var(--grey-1);
		}

		&:focus {
			border-color: var(--grey-0);
		}
	}

	button {
		top: 57%;
		right: 20px;
		border: none;
		position: absolute;
		display: block;
		height: 20px;
		width: 20px;
		cursor: pointer;
		background: url("/src/assets/visibility.svg") no-repeat center;
		background-size: contain;
	}
`;

export default StyledInput;
