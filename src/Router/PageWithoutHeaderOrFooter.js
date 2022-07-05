import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Custom from '../layout/Custom';

export default function PageWithoutHeaderOrFooter() {
  return (
    <Routes>
      <Route path="/customize" element={<Custom />} />
    </Routes>
  );
}
