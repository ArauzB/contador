import React, { useState } from 'react';
import './App.css';

function App() {
  const [contador, setContador] = useState(0);

  const incrementarContador = () => {
    setContador(contador + 1);
  };

  const reiniciarContador = () => {
    setContador(0);
  };

  return (
    <div className="App">
      <h1>Contador</h1>
      <p>{contador}</p>
      <button onClick={incrementarContador}>Incrementar</button>
      <button onClick={reiniciarContador}>Reiniciar</button>
    </div>
  );
}

export default App;
