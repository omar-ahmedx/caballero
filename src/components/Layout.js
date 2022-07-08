import React from "react";
import Navbar from "./Navbar";
import "../styles/global.css";
import "@fontsource/exo";
import Footer from "./Footer";
import SideNav from "./SideNav";
export default function Layout({ children, currentPath }) {
  return (
    <div>
      <Navbar current={currentPath} />
      <SideNav />
      {children}
      <Footer current={currentPath} />
    </div>
  );
}
