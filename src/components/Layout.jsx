import React, { Component } from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import AboutMe from './components/secciones/AboutMe'
import Home from './components/secciones/Home'
import Skills from './components/secciones/Skills'
import Proyectos from './secciones/Proyectos';

const Layout = () => {

    console.log("Layout cargado");
    return (
        <>
            <Navbar />
            <main>
                <Home />
                <AboutMe />
                <Skills />
                <Proyectos />
            </main>
        </>
    );
};

export default Layout;