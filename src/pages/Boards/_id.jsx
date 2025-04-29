import BoardBar from './BoardBar'
import BoardContent from './BoardContent'
import AppBar from '../../components/AppBar'
import Container from '@mui/material/Container'

export default function Board() {
  return (
    <Container disableGutters maxWidth={false} sx={{ height: '100dvh' }}>
      <AppBar/>
      <BoardBar/>
      <BoardContent/>
    </Container>
  )
}
