import styled from "styled-components";

export const Container = styled.div`
    background: #000;
    padding: 0 20px;
    max-width: 100vw; /* Garante que o contêiner não ultrapasse a largura da tela */
    overflow: hidden; /* Esconde qualquer conteúdo que ultrapasse os limites do contêiner */

    h2 {
        color: #fff;
        font-size: 33px;
        margin: 50px 0 20px 20px;
    }

    .swiper-wrapper {
        display: flex;
        max-width: 100%; /* Garante que o swiper não ultrapasse a largura do contêiner */
    }
`
