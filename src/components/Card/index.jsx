import { getImages } from '../../utils/getImages'
import { Container } from './styles'

function Card({ item }) {
    function handleClick() {
        window.location.href = `/knaipmovies/detalhe/${item.id}`
    }

    return (
        <Container onClick={handleClick}>
            <img src={getImages(item.poster_path || item.profile_path || '')} alt={item.title || item.name} />
            <h3>{item.title || item.name}</h3>
        </Container>
    )
}

export default Card
