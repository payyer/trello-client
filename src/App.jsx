import Button from '@mui/material/Button'
import AcUnitIcon from '@mui/icons-material/AcUnit';
import Typography from '@mui/material/Typography';

import { useColorScheme } from '@mui/material/styles';

function ModeToggle() {
  const { mode, setMode } = useColorScheme();
  return (
    <Button
      onClick={() => {
        setMode(mode === 'light' ? 'dark' : 'light');
      }}
    >
      {mode === 'light' ? 'Turn dark' : 'Turn light'}
    </Button>
  );
}

function App() {
  return (
    <>
      <div>Lê Quốc Anh</div> 
      <ModeToggle/>
      <Typography variant='body2' color={"text.secondary"}>Hello Worlds</Typography>
      <AcUnitIcon/>
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </>
  )
}

export default App
