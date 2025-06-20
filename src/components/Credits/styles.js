import styled from "styled-components";

export const Title = styled.h4`
    color: #fff;
    font-size: 28px;
    font-weight: 700;
`

export const Container = styled.div`
    display: flex;
    margin-top: 30px;
    gap: 10px;

    div {
        display: flex;
        flex-direction: column;
    }

    p {
        color: #fff;
    }

    img {
        height: 200px;
        border-radius: 11px;
        box-shadow: rgb( 100 100 111 / 20%) 0px 0px 30px 5px;
    }
`