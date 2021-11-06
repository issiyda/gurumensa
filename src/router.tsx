import React from 'react';
import { Route, Routes } from 'react-router';
import Search from './views/search';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Search />} />
    </Routes>
  );
};

export default Router;
