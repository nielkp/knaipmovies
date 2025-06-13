import { Link, useLocation } from 'react-router-dom'
import Logo from '../../assets/logo.png'
import { Container, Menu, Li, Hamburger, MobileMenu } from './styles'
import { useEffect, useState } from 'react'

function Header() {
    const [changeBackground, setChangeBackground] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const { pathname } = useLocation()

    useEffect(() => {
        const handleScroll = () => {
            if (window.pageYOffset > 150) {
                setChangeBackground(true)
            } else {
                setChangeBackground(false)
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <Container $changeBackground={changeBackground}>
            <Link to="/">
                <img src={Logo} alt="logo-knaip-movies" />
            </Link>

            <Hamburger onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <span />
                <span />
                <span />
            </Hamburger>

            <Menu>
                <Li $isActive={pathname === '/'}>
                    <Link to="/knaipmovies">Home</Link>
                </Li>
                <Li $isActive={pathname.includes('filmes')}>
                    <Link to="/knaipmovies/filmes">Filmes</Link>
                </Li>
                <Li $isActive={pathname.includes('series')}>
                    <Link to="/knaipmovies/series">Séries</Link>
                </Li>
            </Menu>

            {isMenuOpen && (
                <MobileMenu>
                    <li><Link to="/knaipmovies" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
                    <li><Link to="/knaipmovies/filmes" onClick={() => setIsMenuOpen(false)}>Filmes</Link></li>
                    <li><Link to="/knaipmovies/series" onClick={() => setIsMenuOpen(false)}>Séries</Link></li>
                </MobileMenu>
            )}
        </Container>
    )
}

export default Header