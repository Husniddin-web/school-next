import styled from "styled-components";

export const ButtonWrapper = styled.button`
    height: 35px;
    width: fit-content;
    border: 1px solid #bc8e5b;
    border-radius: 8px;
    background-color: #bc8e5b;
    color: white;
    cursor: pointer;
    transition:  .2s;
    &:hover{
        border: 1px solid rgba(187, 150, 108, 0.58);
        background-color: rgba(187, 150, 108, 0.58);
    }

    &:active{
        border: 1px solid #bc8e5b95;
        background-color: #bc8e5b95;
    }
    
`