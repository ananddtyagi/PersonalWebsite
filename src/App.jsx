import React from "react";
import { Link, Route, Router, Routes } from "react-router-dom";
import AboutMe from "./components/aboutme";
import Homepage from "./components/homepage";

export default function App(props) {
  return (
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/aboutme" element={<AboutMe />} />
      </Routes>
  );
}