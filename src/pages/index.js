import { Link } from "gatsby";
import * as React from "react";
import AboutUs from "../components/AboutUs";
import Blogs from "../components/Blogs";
import Clients from "../components/Clients";
import CompletedWork from "../components/CompletedWork";
import Info from "../components/Info";
import Launching from "../components/Launching";
import Layout from "../components/Layout";
import Offers from "../components/Offers";
import Questions from "../components/Questions";
import Services from "../components/shared/Services-home";
import * as base from "../styles/home.module.css";
const IndexPage = () => {
  return (
    <Layout currentPath="home">
      <div className={base.container}>
        <div className={base.settings_container}>
          <Link to="/contact" className={base.settings}></Link>
        </div>

        <div className={base.text}>
          <h2>TECHNOLOGY SOLUTIONS AND SECURITY SYSTEMS</h2>
          <h1>CABALLERO</h1>
        </div>

        <div>
          <Link to="/about-us" className="button">
            Discover more
          </Link>
        </div>

        <div className={base.scroll_container}>
          <Link to="#about-us">
            <div className={base.scroll_icon}></div>
            Scroll Down
          </Link>
        </div>

        <div className={`${base.triangle} ${base.full_triangle}`}></div>
        <div className={`${base.triangle} ${base.striped_triangle}`}></div>
      </div>
      <section id="about-us" className="container">
        <Services place="home" />
      </section>

      <section>
        <AboutUs />
      </section>

      <section className="full_offers">
        <Offers />
      </section>

      <section>
        <Launching />
      </section>

      <section style={{ background: "#03101d" }}>
        <Clients />
      </section>

      <section>
        <CompletedWork place="home" />
      </section>

      <Questions />

      <section className="container">
        <Blogs place="home" />
      </section>

      <Info />
    </Layout>
  );
};

export default IndexPage;
