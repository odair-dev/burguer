import styled from "styled-components";

export const StyledDivContainer = styled.div`
    width: 100%;
    max-width: 970px;
    @media(min-width: 768px){
        max-width: 970px;   
    }
    .divFiltered{
        margin-top: 1rem;
        display: flex;
        gap: .5rem;
        width: 100%;
        flex-wrap: wrap;
        justify-content: space-between;
        max-width: 970px;
    }
    .textSeach{
        margin-left: .5rem;
        font-weight: 700;
        font-size: 1.625rem;
        color: var(--gray-100);
        span{
            color: var(--gray-50);
        }
    }
    .btnCleanFilter{
        width: 137px;
        height: 40px;
        background: var(--color-primary);
        border: 2px solid var(--color-primary);
        border-radius: 8px;
        color: var(--gray-0);
        font-weight: 500;
        font-size: 0.875rem;
        margin-right: .5rem;
        margin-left: .5rem;    
        &:hover{
            background: var(--color-primary-50);
            border: 2px solid var(--color-primary-50);
        }
    }
    ul{
        max-width: 100%;
        margin-left: 10px;
        padding: 1rem 0 1rem 0;
        overflow-x: scroll;
        display: flex;
        align-items: center;
        gap: 20px;
        @media(min-width: 768px){
            overflow: auto;
            flex-wrap: wrap;
            max-width: 950px;
            height: fit-content;
        }
    }
`