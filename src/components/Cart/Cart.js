import styled from "styled-components";

export const StyledDivCart = styled.div`
    width: 90%;
    max-width: 365px;
    height: fit-content;
    margin: 16px 20px 0 10px;
    background: var(--gray-0);
    header{
        width: 100%;
        height: 65px;
        background: var(--color-primary);
        color: var(--gray-0);
        display: flex;
        padding-left: 20px; 
        align-items: center;
        border-radius: 5px 5px 0px 0px;
        h2{
            font-weight: 700;
            font-size: 1.125rem;
        }
    }
    ul{
        border-bottom: 2px solid var(--gray-20);
        h4{
            font-weight: 700;
            font-size: 1.125rem;
            color: var(--gray-100);
            text-align: center;
            margin: 60px 0 20px 0;
        }
        h5{
            font-weight: 400;
            font-size: 0.875rem;
            color: var(--gray-50);
            text-align: center;
            margin-bottom: 40px;
        }
    }
    .divTotal{
        display: flex;
        justify-content: space-between;
        padding: 14px 10px 22px 10px;
        h3{
            font-weight: 600;
            font-size: 0.875rem;
            color: var(--gray-100);
        }
        p{
            font-weight: 600;
            font-size: 0.875rem;
            color: var(--gray-50);
        }
    }
    .btnRemoveAll{
        width: 94.49%;
        height: 60px;
        border-radius: 8px;
        background: var(--gray-20);
        margin: 0 10px 20px 10px;
        font-weight: 600;
        font-size: 1rem;
        color: var(--gray-50);
        &:hover{
            background: var(--gray-40);
            color: var(--gray-0);
        }
    }
`