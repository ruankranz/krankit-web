/** @jsx jsx */
// eslint-disable-next-line
import React, { Suspense } from "react";
import { jsx, css } from "@emotion/core";
import Layout from "./Layout";
import logo from "../assets/images/metatron.png";

export default function Home() {
  return (
    <Suspense fallback={<h1>Loading home...</h1>}>
      <Layout>
        <div css={text_container}>
          <p>Unfortunately,</p>
          <p>no one can be told what the Matrix is...</p>
          <p>You have to see it for yourself.</p>
          <img
            css={logo_image}
            style={{ animation: `spin ${8}s linear infinite` }}
            src={logo}
            alt="img"
          />
        </div>
      </Layout>
    </Suspense>
  );
}

const logo_image = css`
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const text_container = css`
  font-size: 1.4em;
  align-self: center;
`;
