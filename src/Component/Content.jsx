import React from "react";
import "./page.css";

function Content() {
  return (
    <div className="content">
      <div className="left-content">
        <h1>
          <span style={{ fontSize: "23px" }}>
            {" "}
            Build Payment Gateway's Trust{" "}
          </span>
          <br />
          <span style={{ color: "darkblue", fontSize: "28px" }}>
            With UpTrack Intelligence
          </span>
        </h1>

        <p>
          Establish Trust With Payment Gateway's By Synchronizing Shipment
          <br />
          Information
        </p>

        <ul>
          <li>
            <i class="pe-7s-check"></i>
            <b>Reliable & Truly Affordable</b>
          </li>
          <br />
          <li>
            <i class="pe-7s-check"></i>
            99.99% Secured Through UpTrack API Servers
          </li>
          <br />
          <li>
            <i class="pe-7s-check"></i>
            Fully Auto-Pilot, Date-based & Customized-Sync
          </li>
        </ul>
      </div>

      <div className="content-button">
        <input type="text" placeholder="Enter Shop.myshopify.com"></input>
        &nbsp;
        <button type="button">Start Trial Now...</button>
      </div>

      <div className="right-content">
        <iframe
          title="myFrame"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/g3Sy3foHPNI"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}

export default Content;
