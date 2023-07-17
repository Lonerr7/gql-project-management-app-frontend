import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Clients from '../Clients/Clients';
import Projects from '../Projects/Projects';
import NotFound from '../NotFound/NotFound';
import Project from '../Projects/Project/Project';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Clients />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/projects/:id" element={<Project />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;
