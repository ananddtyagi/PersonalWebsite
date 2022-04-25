import React from "react";
import {  Route, Routes } from "react-router-dom";
import AboutMe from "./components/aboutme";
import Home from "./components/home";
import Me from "./components/me";


export default function App(props) {
  return (
    <Routes>
      <Route index element={<Home />} />
        <Route path="aboutme" element={<AboutMe />}>
          <Route path="me" element={<Me />} />
      </Route>
    </Routes>
  );

}