import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box, Container } from '@mui/material';
import ReactGA from 'react-ga';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects';
import ProjectDetails from './pages/Projects/ProjectDetails'
import Skills from './pages/Skills/Skills';
import AboutMe from './pages/AboutMe/AboutMe';
import Footer from './components/Footer/Footer';
import Resume from './pages/AboutMe/Resume'
import './App.css';

import React from 'react';

if (typeof process.env.REACT_APP_TRACKING_ID !== 'undefined') {
    ReactGA.initialize(process.env.REACT_APP_TRACKING_ID);
}

function App() {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Router>
                <Routes>
                    <Route path="/resume" exact element={<Resume />}/>
                    <Route path="*" element= {
                        <>             
                            <NavBar />
                            <Container sx={{ flex: 1, py: 3 }}>
                                <Routes>
                                    <Route path="/" exact element={<Home />} />
                                    <Route path="/portfolio" exact element={<Home />} />
                                    <Route path="/projects" exact element={<Projects />} />
                                    <Route path="/projects/:projectId" element={<ProjectDetails />} />
                                    <Route path="/aboutme" exact element={<AboutMe />} />
                                    <Route path="/skills" exact element={<Skills />} />
                                </Routes>
                            </Container>
                            <Footer />
                        </>
                        }
                    />
                </Routes>
            </Router>
        </Box>
    );
}

export default App;
