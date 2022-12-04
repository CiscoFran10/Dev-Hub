import styled from "styled-components";

const StyledDashboard = styled.div`
	nav {
		padding: 32px 20px;
		display: flex;
		align-items: center;
		justify-content: space-between;

		h1 {
			color: var(--primary);
			font-size: 2rem;
			text-align: center;
		}
	}

	.list-header {
		display: flex;
		padding: 0 20px;
		justify-content: space-between;
		align-items: center;
		margin-top: 18px;

		h2 {
			font-size: 1.125rem;
			font-weight: 600;
		}
	}

	ul {
		display: flex;
		flex-direction: column;
		gap: 16px;
		background-color: var(--grey-3);
		margin: 28px 20px;
		padding: 22px;
		border-radius: 4px;
		list-style: none;
		max-height: 400px;
		overflow-y: auto;

		&::-webkit-scrollbar {
			width: 15px;
			background-color: var(--grey-3);
		}

		&::-webkit-scrollbar-thumb {
			border-radius: 8px;
			background-color: var(--grey-1);
			border-right: 3px solid var(--grey-3);
			border-top: 4px solid var(--grey-3);
			border-left: 3px solid var(--grey-3);
		}

		li {
			display: flex;
			align-items: center;
			justify-content: space-between;
			gap: 25px;
			padding: 15px 22px;
			border-radius: 4px;
			background-color: var(--grey-4);

			h3 {
				flex: 1;
				font-size: 1rem;
				font-weight: 700;
			}

			span {
				font-size: 0.75rem;
				font-weight: 400;
				color: var(--grey-1);
			}

			&:hover {
				background-color: var(--grey-2);
			}
		}

		p {
			color: var(--grey-1);
			text-align: center;
		}
	}

	@media (max-width: 500px) {
		nav h1 {
			font-size: 1.5rem;
		}
	}
`;

export default StyledDashboard;
