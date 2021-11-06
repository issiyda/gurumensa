import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from './router';

const App = () => {
  return (
    <h1>
      <BrowserRouter>
        <Router />
        こんにちは！ 石田です！
      </BrowserRouter>
    </h1>
  );
};

export default App;
