import Box from '@mui/material/Box'

export default function BoardBar() {
  return (
    <Box sx={{ backgroundColor: 'primary.dark', display: 'flex', alignItems: 'center', height: (theme) => theme.trello.boardBar }}>
      Board Bar
    </Box>
  )
}
