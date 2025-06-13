import { Route, Routes } from 'react-router-dom'

import Home from '../pages/Home'
import Movies from '../pages/Movies'
import Series from '../pages/Series'
import Detail from '../pages/Detail'
import DefaultLayout from '../layouts/DefaultLayout'

function Router() {

    return (
        <Routes>
            <Route element={<DefaultLayout />}>
                <Route path='/knaipmovies' element={<Home />} />
                <Route path='/knaipmovies/filmes' element={<Movies />} />
                <Route path='/knaipmovies/series' element={<Series />} />
                <Route path='/knaipmovies/detalhe/:id' element={<Detail />} />
            </Route>
        </Routes>
    )
}

export default Router