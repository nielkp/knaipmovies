import Footer from '../components/Footer';
import Header from '../components/Header';
import { Outlet } from 'react-router-dom';

function DefaultLayout() {

    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

export default  DefaultLayout