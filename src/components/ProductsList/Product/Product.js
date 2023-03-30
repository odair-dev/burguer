import styled from "styled-components";

export const StyledLi = styled.li`
    width: 300px;
    height: 346px;
    border: 2px solid var(--gray-20);
    border-radius: 5px;
    div{
        width: 296px;
        height: 150px;
        display: flex;
        justify-content: center;
        align-items: flex-end;
        background: var(--gray-0);
        overflow: hidden;
    }
    h2{
        font-weight: 700;
        font-size: 1.125rem;
        color: var(--gray-100);
        margin: 16px 0 0 21px;
    }
    p{
        font-weight: 400;
        font-size: 0.75rem;
        color: var(--gray-50);
        margin: 16px 0 0 21px;
    }
    h3{
        font-weight: 600;
        font-size: 0.875rem;
        color: var(--color-primary);
        margin: 16px 0 0 21px;
    }
    button{
        background: var(--color-primary);
        color:var(--gray-0);
        width: 107px;
        height: 40px;
        border: 2px solid var(--color-primary);
        border-radius: 8px;
        margin: 16px 0 0 21px;
        &:hover{
            background: var(--color-primary-50);
            border: 2px solid var(--color-primary-50);
        }
    }
`