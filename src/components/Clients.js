import React from "react";
import * as clientStyle from "../styles/clients.module.css";
export default function Clients() {
  return (
    <div className="container">
      <div className={clientStyle.container}>
        <div>
          <div className={clientStyle.picture}></div>
        </div>
        <div className={clientStyle.client_text_container}>
          <p className={clientStyle.client_text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <div className={clientStyle.client_info}>
            <p>Khadija Salama</p>
            <p>Client of CABALLERO Company</p>
          </div>
        </div>
        <div className={clientStyle.client_contact}></div>
      </div>
    </div>
  );
}
