import React from "react";
import Navbar from "./Navbar";
import "../styles/global.css";
import "@fontsource/exo";
export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}
