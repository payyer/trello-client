import Box from '@mui/material/Box'
import ModeSelect from '~/components/ModeSelect'

export default function AppBar() {
  return (
    <Box sx={{ backgroundColor: 'primary.light', display: 'flex', alignItems: 'center', height: (theme) => theme.trello.appBarHeight }}>
      <ModeSelect/>
    </Box>
  )
}
