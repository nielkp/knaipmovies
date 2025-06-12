import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/Button'
import { Background, Container, ContainerFilmes, ContainerButtons, Info, Poster } from './styles'
import Slider from '../../components/Slider'
import { getImages } from '../../utils/getImages'
import Modal from '../../components/Modal'
import { getMovies, getPopularSeries, getTopMovies, getTopPeoples, getTopSeries } from '../../services/getData'

function Filmes() {
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
            <ContainerFilmes>
                {topMovies && <Slider info={topMovies} title={'Melhores Filmes'} />}
                {topPeoples && <Slider info={topPeoples} title={'Atores Populares'} />}
            </ContainerFilmes>
        </>
    )

}

export default Filmes