import Box from '@mui/material/Box'
import Workspaces from './Menus/Workspaces'
import SvgIcon from '@mui/icons-material/Apps'
import AppsIcon from '@mui/icons-material/Apps'
import ModeSelect from '~/components/ModeSelect'
import Typography from '@mui/material/Typography'
import { ReactComponent as trelloLogo } from '~/assets/trello.svg'
import Recent from './Menus/Recent'
import Starred from './Menus/Starred'
import Templates from './Menus/templates'
import Button from '@mui/material/Button'
export default function AppBar() {
  return (
    <Box px={2} sx={{ display: 'flex', alignItems: 'center', justifyContent:'space-between', height: (theme) => theme.trello.appBarHeight }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <AppsIcon sx={{ color: 'primary.main' }}/>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <SvgIcon component={trelloLogo} inheritViewBox sx={{ color: 'primary.main' }}/>
          <Typography component="span" sx={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'primary.main' }}>
            Trello
          </Typography>
        </Box>
        <Workspaces/>
        <Recent/>
        <Starred/>
        <Templates/>
        <Button variant="outlined">Create</Button>
      </Box>

      <Box>
        <ModeSelect/>
      </Box>
    </Box>
  )
}
Typography