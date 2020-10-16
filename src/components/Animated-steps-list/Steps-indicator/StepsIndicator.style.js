import styled from "styled-components";

export const StepsIndicatorWrapper = styled.ul`
    padding: 0;
    margin: 0;
    list-style: none;

    & li {
        font-size: 17px;
        line-height: 28px;
        color: var(--gray-4);
        margin-bottom: 16px;

        &.active {
          font-weight: 600;
          color: var(--gray-1);
        }
    }
`;
