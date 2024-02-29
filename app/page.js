
'use client'
import React from "react";

import NavBar from "./components/Navbar";

import Hero from "./components/Hero"

import { bebasNeue, montserrat } from "./components/Fonts/appFonts";


export default function Home({ Component, Props }) {
  return (
    <main>
      <style jsx global>{`
        body {
          font-family: ${bebasNeue.name}, ${montserrat.name};
          height: 1200px;
        }
      `}</style>

      <NavBar />
      <Hero />

    </main>
  );
}
