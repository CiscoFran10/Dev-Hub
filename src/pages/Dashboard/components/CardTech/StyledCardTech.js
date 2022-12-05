import styled from "styled-components";

const StyledCardTech = styled.li`
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 25px;
	padding: 15px 22px;
	border-radius: 4px;
	background-color: var(--grey-4);
	cursor: pointer;

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
`;

export default StyledCardTech;
