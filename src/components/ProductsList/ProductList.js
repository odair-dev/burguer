import styled from "styled-components";

export const StyledUl = styled.ul`
    max-width: 100%;
    margin-left: 10px;
    height: 350px;
    overflow: scroll;
    display: flex;
    align-items: center;
    margin-top: 1rem;
    gap: 20px;
    @media(min-width: 768px){
        overflow: auto;
        flex-wrap: wrap;
        width 100%;
        max-width: 1080px;
        height: fit-content;
    }
`