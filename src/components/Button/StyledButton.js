import styled from "styled-components";

const StyledButton = styled.button`
	display: flex;
	flex-direction: column;
	align-items: center;
	cursor: pointer;
	border-radius: 4px;
	background-color: var(--primary);
	color: var(--grey-0);
	padding: 13px 20px;
	text-align: center;
	transition: 0.3s;
	border: none;
	font-size: inherit;
	font-weight: 500;
	position: relative;

	&:hover {
		background-color: var(--primary-focus);
	}

	&:disabled {
		background-color: var(--primary-negative);
	}

	&.grey {
		background-color: var(--grey-1);

		&:hover {
			background-color: var(--grey-2);
		}
	}

	&.dark {
		background-color: var(--grey-3);

		&:hover {
			background-color: var(--grey-2);
		}
	}

	& span {
		width: 20px;
		height: 20px;
		border: 1px solid white;
		border-radius: 100%;
		border-color: transparent white white white;
		animation: spin 0.4s linear infinite;
	}

	@keyframes spin {
		to {
			rotate: 1turn;
		}
	}
`;

export default StyledButton;
