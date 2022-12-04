import styled from "styled-components";

const StyledModal = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	height: 100vh;
	width: 100vw;
	display: flex;
	align-items: center;
	justify-content: center;
	background: rgba(18, 18, 20, 0.5);

	.modal {
		width: 370px;
		border-radius: 4px;
		overflow: hidden;
		background-color: var(--grey-3);
	}

	.modal-header {
		display: flex;
		padding: 22px;
		justify-content: space-between;
		align-items: center;
		background-color: var(--grey-2);

		h2 {
			font-size: 1rem;
			font-weight: 700;
		}

		button {
			background: none;
		}
	}

	.modal form {
		padding: 22px;
	}
`;

export default StyledModal;
