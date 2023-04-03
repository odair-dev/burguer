import styled from "styled-components";

export const StyledDivCardCart = styled.div`
    width-max: 100%;
    margin: 20px 10px 20px 10px; 
    display: flex;
    position: relative;
    figure{
        width: 80px;
        height: 80px;
        border-radius: 5px;
        background: var(--gray-20);
        display: flex;
        justify-content: center;
        align-items: flex-end;
        overflow: hidden;
        img{
            max-width: 100%;
        }
    }
    div{
        margin: 10px;
        h3{
            width: 130px;
            font-weight: 700;
            font-size: 0.875rem;
            color: var(--gray-100);
            margin-bottom: 10px;
        }
        p{
            font-weight: 400;
            font-size: 0.75rem;
            color: var(--gray-50);
        }
    }
    button{
        position: absolute;
        right:0;
        top: 10px;
        font-weight: 500;
        font-size: 0.75rem;
        color: var(--gray-40);
    }
`