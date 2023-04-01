import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Inter', sans-serif;
    }
    button{
        cursor: pointer;
        background: transparent;
        border: none;
    }
    ul, ol{
        list-style: none;
    }
    input{
        border: none;
        background: transparent;
        border-radius: 0;
    }
    .App{
        display: flex;
        flex-direction: column;
        align-items: center;
    } 
    main{
        width: 100%;
        max-width: 1366px;
        @media(min-width: 768px){
            max-width: 1366px;
            display: flex;
            justify-content: space-between;
        }
    } 
    :root{
        --color-primary: #27AE60;
        --color-primary-50: #93D7AF;
        --color-secondary: #EB5757;
        --gray-100: #333333;
        --gray-50: #828282;
        --gray-40: #BDBDBD;
        --gray-20: #E0E0E0;
        --gray-0: #F5F5F5;
    } 
`