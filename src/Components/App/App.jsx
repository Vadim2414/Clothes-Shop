import './App.css';
import { Header } from '../Header/Header';
import { useState } from 'react';
import { MainPageCards } from '../MainPageCards/MainPageCards';

function App() {
  const [userCity, setUserCity] = useState("Москва")
  return (
    
    <>
      <Header userCity={userCity} />
      <MainPageCards />
    </>

  )
}

export default App;
