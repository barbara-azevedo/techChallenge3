import React from 'react';
import AppTheme from './shared/AppTheme';
import { CssBaseline } from '@mui/material';
import AppRoutes from './routes/Routes';


const App: React.FC = (props: { disableCustomTheme?: boolean }) => {

  return (
    <AppTheme {...props}>
     <CssBaseline enableColorScheme />
      <AppRoutes />
    </AppTheme>
  );
}

export default App;