import styled from "styled-components";

export const Container = styled.div`
    min-height: 60px;
    z-index: 1000;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 50px;
    background-color: ${(props) => props.$changeBackground ? '#000' : 'transparent'};
    transition: background-color 0.5s ease-in-out;

    img {
        width: 120px;
        z-index: 1001;
    }

    @media (max-width: 768px) {
        padding: 10px 20px;

        img {
            width: 90px;
        }
    }
`

export const Menu = styled.ul`
    display: flex;
    list-style: none;
    gap: 25px;

    @media (max-width: 768px) {
        display: none;
    }
`

export const Li = styled.li`
    font-weight: 600;
    cursor: pointer;
    font-size: 20px;
    position: relative;
    z-index: 1001;

    a{
        text-decoration: none;
        color: #FFFFFF;
    }

    &::after{
        content: '';
        height: 3px;
        width: ${(props) => (props.$isActive ? '100%' : 0)};
        background-color: red;
        position: absolute;
        bottom: -5px;
        left: 50%;
        transform: translateX(-50%);
        transition: width 0.4s ease-in-out;
    }

    &:hover::after{
        width: 100%;
    }
`

export const Hamburger = styled.div`
    display: none;
    flex-direction: column;
    justify-content: space-between;
    width: 25px;
    height: 20px;
    cursor: pointer;
    z-index: 1002;

    span {
        height: 3px;
        background-color: white;
        border-radius: 2px;
    }

    @media (max-width: 768px) {
        display: flex;
    }
`

export const MobileMenu = styled.ul`
    position: absolute;
    top: 50px;
    right: 0;
    background-color: #000;
    list-style: none;
    padding: 10px 20px;
    z-index: 1000;
    border-radius: 20px;

    li {
        margin: 10px 0;

        a {
            text-decoration: none;
            color: white;
            font-size: 18px;
        }
    }
`
