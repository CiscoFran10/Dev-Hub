import styled from "styled-components";

const StyledLogin = styled.div`
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin: 60px 0;

	h1 {
		color: var(--primary);
		font-size: 2rem;
		text-align: center;
		margin-bottom: 35px;
	}

	.form-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 30px;
		width: 440px;
		padding: 42px 22px;
		background: var(--grey-3);
		box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
		border-radius: 4px;

		@media (max-width: 500px) {
			width: 95%;
		}

		h2 {
			font-size: 1.125rem;
			font-weight: 700;
			margin-bottom: 22px;
			text-align: center;
		}

		p {
			color: var(--grey-1);
			font-weight: 600;
			font-size: 0.75rem;
			margin-top: 34px;
			margin-bottom: 22px;
		}

		a {
			color: var(--grey-0);
			background-color: var(--grey-1);
			width: 100%;
			transition: 0.3s;
			border-radius: 4px;
			text-align: center;
			padding: 13px 15px;

			&:hover {
				background-color: var(--grey-2);
			}
		}
	}
`;

export default StyledLogin;
