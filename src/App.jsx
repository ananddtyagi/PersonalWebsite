import React from "react";
import { Route, Routes } from "react-router-dom";
import styled from 'styled-components';

import Navigation from './components/ui/Navigation';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import GitHubStats from './components/sections/GitHubStats';
import ContentPlatforms from './components/sections/ContentPlatforms';
import Blog from './components/sections/Blog';
import Contact from './components/sections/Contact';

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
        <GitHubStats />
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
