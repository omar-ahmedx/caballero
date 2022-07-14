import { StaticImage } from "gatsby-plugin-image";
import React, { useRef } from "react";
import Layout from "../../components/Layout";
import Base from "../../components/shared/Base";
import emailjs from "@emailjs/browser";
import * as styles from "../../styles/contact.module.css";
import Header from "../../components/shared/Header";
import { graphql } from "gatsby";
export default function Index({ data }) {
  const contactUs = data.allContentfulContactUs.nodes[0];
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_nizaa7m",
        "template_1giy29e",
        form.current,
        "5Nx76CAqTuW8B6HR5"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    const inputs = document.querySelectorAll("input");
    inputs.forEach((input) => {
      input.value = " ";
    });
    document.querySelector("textarea").value = " ";
  };
  return (
    <Layout currentPath="contact">
      <Base path="Contact" header="Contact Us" />
      <div className={`container ${styles.container}`}>
        <div className={styles.images_container}>
          <div
            className={styles.about_image}
            style={{
              backgroundImage: ` linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.4)), url(${contactUs.image.url})`,
            }}
          >
            <div className={styles.blue}></div>
          </div>
        </div>

        <div>
          <Header header="Contact with us" />

          <p className={styles.header}>{contactUs.title}</p>

          <p className={styles.text}>{contactUs.desc}</p>

          <div>
            <a
              href="https://wa.me/971525902284"
              target="_blank"
              rel="noreferrer"
              className={styles.contact_wrapper}
            >
              <div>
                <StaticImage src="../../../static/contact/call.webp" alt=" " />
              </div>
              <div>
                <p>Have any question?</p>
                <p>Free 00971 52 590 2284</p>
              </div>
            </a>
            <a
              href="mailto:jaber@caballeroit.com"
              className={styles.contact_wrapper}
            >
              <div>
                <StaticImage
                  src="../../../static/contact/message.webp"
                  alt=" "
                />
              </div>
              <div>
                <p>write an email</p>
                <p>Jaber@caballeroIT.com</p>
              </div>
            </a>
            <a
              href="https://www.google.com/maps/search/Al+Mu'tarid+St+8,+Oud+Al+Hassah,+Al+Ain,+United+Arab+Emirates/@24.2281,55.7436,17z?hl=en"
              target="_blank"
              rel="noreferrer"
              className={styles.contact_wrapper}
            >
              <div>
                <StaticImage
                  src="../../../static/contact/location.webp"
                  alt=" "
                />
              </div>
              <div>
                <p>Visit anytime</p>
                <p>Al Ain, Abu Dhabi, U.A.E</p>
              </div>
            </a>
          </div>
        </div>
      </div>

      <div className={styles.form_container}>
        <div className={styles.send_email}>
          <Header header={"Send us email"} />
          <p>Feel free to write</p>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <div>
            <input type="text" placeholder="Your name" name="user_name" />
            <input type="email" placeholder="Email address" name="user_email" />
          </div>
          <div>
            <input type="tel" placeholder="Phone number" name="user_number" />
            <input type="text" placeholder="Subject" name="subject" />
          </div>
          <textarea placeholder="Write comment" name="message"></textarea>
          <button>Send a message</button>
        </form>
      </div>

      <div className={styles.map}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3638.3696679071127!2d55.73913712985051!3d24.228846226221428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e8ab1fb71ad7cc3%3A0x320db1e640d0467e!2sAyla%20Hotel%2C%20Al%20Ain!5e0!3m2!1sen!2seg!4v1657020871024!5m2!1sen!2seg"
          width="100%"
          style={{ border: "none " }}
          title="map"
          height="450"
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </Layout>
  );
}

export const contacUsData = graphql`
  {
    allContentfulContactUs {
      nodes {
        title
        desc
        image {
          url
        }
      }
    }
  }
`;
