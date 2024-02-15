
'use client'
import React from "react";

import NavBar from "./components/Navbar";

import Hero from "./components/Hero"
import appFonts from "./components/Fonts/appFonts";


export default function Home({ Component, Props }) {
  return (
    <main>

      <appFonts Component={Component} Props={Props}>
        <NavBar />
        <Hero />

      </appFonts>
    </main>
  );
}
