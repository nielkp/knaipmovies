import styled, { keyframes} from "styled-components";

const scale = keyframes`
    from {
        transform: scale(0)
    }
    to {
        transform: scale(1)
    }
`

export const Background = styled.div`
    position: relative;
    background-image: url(${(props) => props.$img});
    height: 100vh;
    background-position: center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 20px;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 1;
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
    position: relative;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100%;
    width: 100%;
    max-width: 1500px;
    z-index: 2;

    @media (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
        text-align: center;
    }
`

export const Info = styled.div`
    z-index: 5;
    padding: 20px;
    width: 50%;

    h1 {
        font-size: 5rem;
        font-weight: 700;
        color: #FFFFFF;

        @media (max-width: 768px) {
            font-size: 2.8rem;
        }
    }

    p {
        font-size: 20px;
        font-weight: 500;
        color: #FFFFFF;
        margin-top: 30px;
        margin-bottom: 20px;

        @media (max-width: 768px) {
            font-size: 16px;
        }
    }

    @media (max-width: 768px) {
        width: 100%;
    }
`

export const Poster = styled.div`
    z-index: 6;

    img {
        width: 400px;
        border-radius: 40px;
        animation: ${scale} 0.2s linear;
        box-shadow: rgb( 100 100 111 / 20%) 0px 7px 30px 0px;

        @media (max-width: 768px) {
            width: 250px;
            margin-top: 20px;
        }
    }
`

export const ContainerButtons = styled.div`
    display: flex;
    gap: 20px;
    margin-top: 30px;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        gap: 15px;
    }
`

export const ContainerFilmes = styled.div`
    margin-top: 25px;
`