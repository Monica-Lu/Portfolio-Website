import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { NavBar } from './components/NavBar/NavBar';
import './global.css';

// const Home = lazy(() => import('./components/Home/Home'));
// const AboutMe = lazy(() => import('./components/AboutMe/AboutMe'));
// const Projects = lazy(() => import('./components/Projects/Projects'));
const ComingSoon = lazy(() => import('./components/ComingSoon/ComingSoon'));
const NotFound = lazy(() => import('./components/Page404/Page404'));
// const Footer = lazy(() => import('./components/Footer/Footer'));

export default function App() {
    return (
      <Router>
        <NavBar />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<ComingSoon />} />
            <Route path="/aboutme" element={<ComingSoon />} />
            <Route path="/projects" element={<ComingSoon />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        {/*<Footer />*/}
      </Router>
    );
}