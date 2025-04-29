import Box from '@mui/material/Box'

export default function BoardContent() {
  return (
    <Box sx={{ backgroundColor: 'primary.main', height: (theme) => `calc(100dvh - ${theme.trello.boardBar} - ${theme.trello.appBarHeight})` }}>
        Content Box
    </Box>
  )
}
