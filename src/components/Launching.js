import React from "react";

import * as launchingStyles from "../styles/launching.module.css";
export default function Launching() {
  return (
    <div className={launchingStyles.container}>
      <div className={`container ${launchingStyles.launching_wrapper} `}>
        <p className={launchingStyles.small_title}>
          Business from great idea to
        </p>
        <p className={launchingStyles.big_title}>Launching</p>
        <div>
          <div className="button">Contact us now</div>
        </div>
      </div>
    </div>
  );
}
