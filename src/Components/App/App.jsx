import './App.css';
import { Header } from '../Header/Header';
import { useState } from 'react';

function App() {
  const [userCity, setUserCity] = useState("Москва")
  return (
    
    <>
      <Header userCity={userCity} />
    </>

  )
}

export default App;
