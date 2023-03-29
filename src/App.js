import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



import Home from "./components/Home";
import Projects from "./components/Projects/Projects";
import Python from "./components/python/Python";
import Kali from "./components/Kali/Kali";
import JavaScript from './components/JavaScript/JavaScript';
import HTML from './components/HTML/html';
import CSS from './components/CSS/CSS';
import SQL from './components/SQL/sql';
import ML from './components/python/machine-learning';
import ReactJs from './components/React/React'
import Cryptography from  './components/Kali/cryptography'
import Test from './components/python/test';
import './App.css';
import Quiz from "./components/Quiz";


function App() {
    return (
        <Router>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/python" element={<Python />} />
        <Route path="/javascript" element={<JavaScript />} />
        <Route path="/sql" element={<SQL />} />
        <Route path="/css" element={<CSS />} />
        <Route path="/html" element={<HTML />} />
        <Route path="/ml" element={<ML />} />
        <Route path="/react" element={<ReactJs />} />
        <Route path="/python/test" element={<Test />} />
        <Route path="/kali-linux" element={<Kali />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/cryptography" element={<Cryptography />} />
        </Routes>
        </Router>
    );
    }

export default App;
