import styled, { css } from "styled-components";

const buttonStyles = css`
    z-index: 10;
    border: 3px solid #FFFFFF;
    background: transparent;
    color: #FFFFFF;
    border-radius: 30px;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 20px;
    font-weight: 500;

    &:hover {
        color: #FF0000;
        background-color: #FFFFFF;
        
    }
`

export const RedButton = styled.button`
    z-index: 10;
    ${buttonStyles}
    background: #FF0000;
    border: 4px solid transparent;
    box-shadow: 0px 0px 7px 8px rgb(255 0 0 / 30%);

    &:hover {
        box-shadow: 0px 0px 7px 15px rgb(255 0 0 / 30%);
        background: #FF0000;
        color: #FFFFFF;
        z-index: 10;
    }
`

export const WhiteButton = styled.button`
    ${buttonStyles}
`
