import { Box, CssBaseline, ThemeProvider, Typography } from '@mui/material';
import './App.css';
import theme from './config/theme';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import SideNav from './components/SideNav';
import AppHeader from './components/AppHeader';
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './router/AppRoutes';
import { useState } from 'react';

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const collapseSidebar = () => setCollapsed(!collapsed);

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppHeader toggleSidebar={toggleSidebar} collapseSidebar={collapseSidebar} />
        <Box sx={styles.container}>
          <BrowserRouter>
            <SideNav sidebarOpen={sidebarOpen} collapsed={collapsed} />
            <Box component={'main'} sx={styles.mainSection}>
              {/*Based on the url path in the browser it is rendering the component*/}
              <AppRoutes />
            </Box>
          </BrowserRouter>
        </Box>
      </ThemeProvider >
    </>
  );
}


/** @type {import("@mui/material").SxProps} */
const styles = {
  container: {
    display: 'flex',
    bgcolor: 'neutral.light',
    height: 'calc(100%-64px)'
  },
  mainSection: {
    p: 4,
    width: '100%',
    height: '100%',
    overflow: 'auto'
  }
}

export default App;
