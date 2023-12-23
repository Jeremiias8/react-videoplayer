import React from 'react'
import App from '../App';
import { Routes, Route, NavLink, BrowserRouter, Link, Navigate } from 'react-router-dom';

export const Routing = () => {

  return (
    <div>
        <BrowserRouter>

            <Routes>
                <Route path="/" element={<App />} /> 
            </Routes>

        </BrowserRouter>
    </div>
  );

}
