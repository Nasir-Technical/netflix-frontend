import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Import Routes and Route
import Login from './Login';
import Browse from './Browse';

const Body = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/browse" element={<Browse />} />
    </Routes>
  );
};

export default Body;
