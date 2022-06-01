import * as React from "react";
import AboutUs from "../components/AboutUs";
import Blogs from "../components/Blogs";
import Clients from "../components/Clients";
import CompletedWork from "../components/CompletedWork";
import Launching from "../components/Launching";
import Layout from "../components/Layout";
import Offers from "../components/Offers";
import Questions from "../components/Questions";
import Services from "../components/shared/Services";
import * as base from "../styles/home.module.css";
const IndexPage = () => {
  return (
    <Layout>
      <div className={base.container}>
        <div className={base.settings_container}>
          <div className={base.settings}></div>
        </div>

        <div className={base.text}>
          <h2>it softweare solution & technology</h2>
          <h1>Caballero</h1>
        </div>

        <div>
          <div className="button">Discover more</div>
        </div>

        <div className={base.scroll_container}>
          <div className={base.scroll_icon}></div>Scroll Down
        </div>

        <div className={`${base.triangle} ${base.full_triangle}`}></div>
        <div className={`${base.triangle} ${base.striped_triangle}`}></div>
      </div>

      <section className="container">
        <Services />
      </section>

      <section className="container">
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
        <CompletedWork />
      </section>

      <Questions />

      <section className="container">
        <Blogs />
      </section>
    </Layout>
  );
};

export default IndexPage;
