import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from './router';
import Navigation from './views/layouts/navigation';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Router />
        <Navigation />
        こんにちは！ 石田です！
      </BrowserRouter>
    </div>
  );
};

export default App;
