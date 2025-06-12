import { Container } from './styles'

function Footer() {
  return (
    <Container>
      <p>© {new Date().getFullYear()} Daniel Knaip • Todos os direitos reservados!</p>
      <p>🎞️ Knaip Movies 📽️</p>
      <p>Feito com &hearts;</p>
    </Container>
  )
}

export default Footer
