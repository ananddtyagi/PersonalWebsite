import React from "react";
import {  Route, Routes } from "react-router-dom";
import AboutMe from "./components/aboutme";
import Homepage from "./components/homepage";
import Me from "./components/me";

export default function App(props) {
  return (
      <Routes>
       <Route index element={<Homepage />} />
        <Route path="aboutme" element={<AboutMe />}>
          <Route path="me" element={<Me />} />
        </Route>
      </Routes>
  );
}