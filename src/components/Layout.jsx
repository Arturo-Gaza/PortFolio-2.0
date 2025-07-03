import React, { Component } from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import AboutMe from './components/secciones/AboutMe'
import Home from './components/secciones/Home'
import Skills from './components/secciones/Skills'

const Layout = () => {

    console.log("Layout cargado");
    return (
        <>
            <Navbar />
            <main>
                <Home />
                <AboutMe />
                <Skills />
            </main>
        </>
    );
};

export default Layout;