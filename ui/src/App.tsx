import { ThemeProvider } from '@mui/material';
import './App.css';
import { MainLayout } from './components/layout/MainLayout';
import { AppRoutes } from './routes/AppRoutes';
import { theme } from './theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <MainLayout>
        <AppRoutes />
      </MainLayout>
    </ThemeProvider>
  );
};

export default App;
