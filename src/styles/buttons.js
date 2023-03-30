import styled from "styled-components";

export const StyledButtonDefaultGreen = styled.button`
    width: 130px;
    height: 60px;
    background: var(--color-primary);
    border: 2px solid var(--color-primary);
    border-radius: 8px;
    color: var(--gray-0)
    font-weight: 600;
    font-size: 1rem;
    &:hover{
        background: var(--color-primary-50);
        border: 2px solid var(--color-primary-50);
    }
`

export const StyledButtonMediumGreen = styled.button`
    width: 130px;
    height: 40px;
    background: var(--color-primary);
    border: 2px solid var(--color-primary);
    border-radius: 8px;
    color: var(--gray-0)
    font-weight: 600;
    font-size: 1rem;
    &:hover{
        background: var(--color-primary-50);
        border: 2px solid var(--color-primary-50);
    }
`

export const StyledButtonDefaultGray = styled.button`
    width: 130px;
    height: 60px;
    background: var(--gray-100);
    border: 2px solid var(--gray-100);
    border-radius: 8px;
    color: var(--gray-50)
    font-weight: 600;
    font-size: 1rem;
    &:hover{
        background: var(--color-gray-50);
        border: 2px solid var(--color-gray-50);
        color: var(--gray-100);
    }
`

export const StyledButtonMediumGray = styled.button`
    width: 130px;
    height: 40px;
    background: var(--gray-100);
    border: 2px solid var(--gray-100);
    border-radius: 8px;
    color: var(--gray-50)
    font-weight: 600;
    font-size: 1rem;
    &:hover{
        background: var(--color-gray-50);
        border: 2px solid var(--color-gray-50);
        color: var(--gray-100);
    }
`