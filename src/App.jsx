import './App.css';
import CustomerList from './components/CustomerList'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import TabApp from './components/TabApp';

function App() {

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Personal Trainer app
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <TabApp />
    </div>
  )
}

export default App
