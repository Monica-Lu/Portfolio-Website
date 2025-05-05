import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { NavBar } from './components/NavBar/NavBar';
import './App.css';

const Home = lazy(() => import('./components/Home/Home'));
const AboutMe = lazy(() => import('./components/AboutMe/AboutMe'));
const Projects = lazy(() => import('./components/Projects/Projects'));
const NotFound = lazy(() => import('./components/Page404/Page404'));
const Footer = lazy(() => import('./components/Footer/Footer'));

export default function App() {
    return (
        <Router>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/" Component={Home} />
                    <Route path="*" Component={NotFound} />
                    <Route path="/aboutme" Component={AboutMe} />
                    <Route path="/projects" Component={Projects} />
                </Routes>
            </Suspense>
            <Footer/>
        </Router>
    );
}
