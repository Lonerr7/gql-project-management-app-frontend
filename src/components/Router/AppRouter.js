import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Clients from '../Clients/Clients';
import Projects from '../Projects/Projects';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Clients />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
  );
};

export default AppRouter;
