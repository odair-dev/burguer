import styled from "styled-components";

export const StyledDivHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 139px;
    background: var(--gray-0);
    @media(min-width: 768px){
        height: 80px;
    }
    header{
        width: 100%;
        max-width: 1366px;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 13px;
        @media(min-width: 768px){
            justify-content: space-between;
            flex-wrap: wrap;
            flex-direction: row;
            padding-left: 10px;
            padding-right: 16px;
        }
        img{
            width: 160px;
        }
        form{
            width: 95%;
            max-width: 382px;
            height: 60px;
            border: 2px solid var(--gray-20);
            border-radius: 8px; 
            background: white;
            display: flex;
            align-items: center;
            justify-content: space-between;
            box-sizing: border-box;
            &:hover{
                border: 2px solid var(--gray-100);
            }
            @media(min-width: 768px){
                max-width: 365px;
            }
            input{
                height: 100%;
                width:100%;
                padding-left: 1rem;
                outline: none;
            }
            button{
                background: var(--color-primary);
                margin-right: .5rem;
                color:var(--gray-0);
                width: 107px;
                height: 40px;
                border: 2px solid var(--color-primary);
                border-radius: 8px;
                &:hover{
                    background: var(--color-primary-50);
                    border: 2px solid var(--color-primary-50);
                }
            }
        }
    }   
`