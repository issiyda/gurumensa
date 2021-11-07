import React from 'react';
import { Route, Routes } from 'react-router';
import Search from './views/search/index';

const Router = () => {
  return (
    <Routes>
      <Route path="/search" element={<Search />} />
    </Routes>
  );
};

export default Router;
