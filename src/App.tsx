import React from 'react';
import { ToastContainer } from 'react-toastify';
import ThemeContext from './components/common/ThemeContext';
import NavBar from './components/NavBar';
import './index.css';
import Routes from './Routes';

const App = () => {
  const [mode, setMode] = React.useState<'dark' | 'light'>('dark');
  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light');
    } else {
      setMode('dark');
    }
  };

  React.useEffect(() => {
    const currentMode = localStorage.getItem('mode');
    if (currentMode === 'light') {
      setMode('light');
    }
  }, []);

  React.useEffect(() => {
    if (mode === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [mode]);

  return (
    <>
      <ThemeContext.Provider value={{ mode, toggleMode }}>
        <NavBar />
        <Routes />
      </ThemeContext.Provider>
      <ToastContainer />
    </>
  );
};

export default App;
