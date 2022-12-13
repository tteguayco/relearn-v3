import { ThemeProvider } from '@mui/material';
import './App.css';
import { AppRoutes } from './routes/AppRoutes';
import { theme } from './theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppRoutes />
    </ThemeProvider>
  );
}

export default App;
