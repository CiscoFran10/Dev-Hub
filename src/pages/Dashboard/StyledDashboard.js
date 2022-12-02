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

	@media (max-width: 500px) {
		nav h1 {
			font-size: 1.5rem;
		}
	}
`;

export default StyledDashboard;
