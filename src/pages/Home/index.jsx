import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/Button'
import { Background, Container, ContainerButtons, Info, Poster } from './styles'
import Slider from '../../components/Slider'
import { getImages } from '../../utils/getImages'
import Modal from '../../components/Modal'
import { getMovies, getPopularSeries, getTopMovies, getTopPeoples, getTopSeries } from '../../services/getData'

function Home() {
    const [showModal, setShowModal] = useState(false)
    const [movies, setMovies] = useState()
    const [topMovies, setTopMovies] = useState()
    const [topSeries, setTopSeries] = useState()
    const [popularSeries, setPopularSeries] = useState()
    const [topPeoples, setTopPeoples] = useState()
    const navigate = useNavigate()

    useEffect(() => {

        async function getAllData() {

            Promise.all([
                getMovies(),
                getTopMovies(),
                getTopSeries(),
                getPopularSeries(),
                getTopPeoples()
            ])
                .then(([movie, topMovies, topSeries, popularSeries, topPeoples]) => {
                    setMovies(movie)
                    setTopMovies(topMovies)
                    setTopSeries(topSeries)
                    setPopularSeries(popularSeries)
                    setTopPeoples(topPeoples)
                })
                .catch((error) => console.error(error))
        }

        getAllData()
    }, [])

    
    return (
        <>
            {movies && (
                <Background $img={getImages(movies.backdrop_path)}>
                    {showModal && (
                        <Modal movieId={movies.id} setShowModal={setShowModal} />
                    )}
                    <Container>
                        <Info>
                            <h1>{movies.title}</h1>
                            <p>{movies.overview}</p>
                            <ContainerButtons>
                                <Button red onClick={() => navigate(`/knaipmovies/detalhe/${movies.id}`)}>Assista agora!</Button>
                                <Button onClick={() => setShowModal(true)}>
                                    Veja o trailer!
                                </Button>
                            </ContainerButtons>
                        </Info>
                        <Poster>
                            <img
                                alt="poster-do-filme"
                                src={getImages(movies.poster_path)} />
                        </Poster>
                    </Container>
                </Background>
            )}
            {/* {topMovies && <Slider info={topMovies} title={'Top Filmes'} />}
            {topSeries && <Slider info={topSeries} title={'Top Séries'} />}
            {popularSeries && <Slider info={popularSeries} title={'Séries Populares'} />}
            {topPeoples && <Slider info={topPeoples} title={'Atores Populares'} />} */}
        </>
    )

}

export default Home