import styled, { keyframes } from "styled-components";

const scale = keyframes`
    from {
        transform: scale(0)
    }
    to {
        transform: scale(1)
    }
`

export const Background = styled.div`
    background-image: url(${(props) => props.image});
    height: 50vh;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.5);
    }

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 111px;
        background-image: linear-gradient(to top, rgb(0,0,0), rgba(0,0,0,0));
    }
`

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    height: 100%;
    max-width: 1500px;
    margin-top: -100px;
    flex-wrap: wrap;

    @media (max-width: 768px) {
        margin-top: -50px;
        flex-direction: column;
        align-items: center;
    }
`

export const Cover = styled.div`
    padding: 20px;
    display: flex;
    align-items: flex-start;
    height: 100%;
    z-index: 5;

    img {
        width: 420px;
        border-radius: 11px;
        box-shadow: rgb( 100 100 111 / 20%) 0px 7px 30px 0px;
        animation: ${scale} 0.2s linear;
    }

    @media (max-width: 768px) {
        justify-content: center;

        img {
            width: 90vw;
            max-width: 300px;
        }
    }
`

export const Info = styled.div`
    padding: 20px;
    width: 50%;
    z-index: 99;
    display: flex;
    align-items: flex-start;
    flex-direction: column;

    h2 {
        font-size: 50px;
        font-weight: 700;
        color: #fff;
    }

    p {
        font-weight: 700;
        color: #fff;
        margin-top: 20px;
        margin-bottom: 30px;
    }

    @media (max-width: 768px) {
        width: 90%;
        align-items: center;
        text-align: center;

        h2 {
            font-size: 30px;
        }

        p {
            font-size: 16px;
        }
    }
`

export const ContainerMovies = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    width: 100%;

    div {
        display: flex;
        flex-direction: column;
        max-width: 1000px;
        width: 100%;
        height: 100%;
        margin: 10px 0;
    }

    h4 {
        color: #fff;
        font-size: 20px;
        font-weight: 700;
    }

    iframe {
        border: none;
        width: 100%;
        height: auto;
        aspect-ratio: 16 / 9;
    }

    @media (max-width: 768px) {
        padding: 10px;

        h4 {
            font-size: 18px;
            text-align: center;
        }
    }
`
