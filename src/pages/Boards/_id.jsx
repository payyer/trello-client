import BoardBar from './BoardBar'
import AppBar from '~/components/AppBar'
import BoardContent from './BoardContent'
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
