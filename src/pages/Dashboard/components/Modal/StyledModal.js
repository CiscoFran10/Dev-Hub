import styled from "styled-components";

const StyledModal = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	height: 100vh;
	width: 100vw;
	z-index: 80;
	display: flex;
	align-items: center;
	justify-content: center;
	background: rgba(18, 18, 20, 0.5);

	.modal {
		z-index: 100;
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

	.modal-buttons {
		width: 100%;
		display: flex;
		align-items: center;
		gap: 22px;

		button {
			flex-grow: 1;
		}
	}

	.modal form {
		padding: 22px;
	}

	@media (max-width: 400px) {
		.modal {
			width: 100%;
			margin: 0 20px;
		}
	}
`;

export default StyledModal;
