import React from 'react';
import CardContent from './components/Card/CardContent';
import HeaderComponent from './components/Header/HeaderComponent';
import HeroSection from './components/Hero/HeroSection';

function App() {
  const [query, setQuery] = React.useState(null);

  return (
    <div>
      <HeaderComponent onSetQuery={setQuery}/>
      <HeroSection setQuery={setQuery} />
      <CardContent query={query} setQuery={setQuery} />
    </div>
  );
}

export default App;
