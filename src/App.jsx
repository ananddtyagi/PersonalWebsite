import React from "react";
import { Route, Routes } from "react-router-dom";
import styled from 'styled-components';

import About from './components/sections/About';
import Blog from './components/sections/Blog';
import Contact from './components/sections/Contact';
import ContentPlatforms from './components/sections/ContentPlatforms';
import Hero from './components/sections/Hero';
import Projects from './components/sections/Projects';
import Navigation from './components/ui/Navigation';

const AppContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  overflow-x: hidden;
`;

const MainContent = styled.main`
  width: 100%;
`;

function HomePage() {
  return (
    <>
      <Navigation />
      <MainContent>
        <Hero />
        <About />
        <Projects />
        <ContentPlatforms />
        <Blog />
        <Contact />
      </MainContent>
    </>
  );
}

export default function App() {
  return (
    <AppContainer>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="blog" element={<HomePage />} />
      </Routes>
    </AppContainer>
  );
}
