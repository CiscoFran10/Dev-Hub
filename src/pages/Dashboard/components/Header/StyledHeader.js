import styled from "styled-components";

const StyledHeader = styled.div`
	border-bottom: 1px solid var(--grey-3);
	border-top: 1px solid var(--grey-3);
	padding: 32px 0px;

	.container {
		display: flex;
		flex-wrap: wrap;
		gap: 0px 60px;
		padding: 0 20px;
		align-items: center;
		justify-content: space-between;
	}

	h1 {
		font-size: 1rem;
		font-weight: 700;
	}

	p {
		font-size: 0.875rem;
		color: var(--grey-1);
	}
`;

export default StyledHeader;
