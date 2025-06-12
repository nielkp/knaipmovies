import { useEffect, useState } from 'react'
import { Container, Background } from './styles'
import { getMovieVideos } from '../../services/getData'

function Modal({ movieId, setShowModal }) {
    const [movies, setMovie] = useState()

    useEffect(() => {
        async function getMovies() {
            setMovie(await getMovieVideos(movieId))
        }
        getMovies()
    }, [])



    return (
        <Background onClick={() => setShowModal(false)}>
            {movies && (
                <Container>
                    <iframe
                        src={`https://www.youtube.com/embed/${movies[0].key}`}
                        title="YouTube"
                        height="500px"
                        width="100%"
                    ></iframe>
                </Container>
            )}
        </Background>
    )
}

export default Modal