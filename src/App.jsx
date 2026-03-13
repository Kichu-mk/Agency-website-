import React from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import TrustedBy from './components/TrustedBy';

const App = () => {
  const [theme, setTheme] = React.useState(localStorage.getItem('theme') || 'light');

  return (
    <div className='dark:bg-black relative'>
      <NavBar theme={theme} setTheme={setTheme}/>
      <Hero />
      <TrustedBy />
    </div>
  );
}

export default App;
