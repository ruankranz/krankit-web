/** @jsx jsx */
// eslint-disable-next-line
import React from "react";
import { jsx, css } from "@emotion/core";
import NavBar from "./NavBar";
import ControlBar from "./ControlBar";

function Layout(props) {
  const { children, label } = props;

  return (
    <div css={main}>
      <div css={content}>
        <div css={content_inner}>
          <div css={content_top}>
            <NavBar label={label} />
          </div>
          <div css={content_body}>{children}</div>
          <div css={content_bottom}>
            <ControlBar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Layout;

const main = css`
  height: 100vh;
`;

const content = css``;

const content_bottom = css`
  display: flex;
  align-items: center;
  width: 100%;
  margin: auto 0 0 0;
`;

const content_inner = css`
  display: flex;
  flex-direction: column;
  padding: 2.5em 2.5em 0;
`;

const content_body = css`
  text-align: center;
  font-size: 1.85em;
  width: 100%;
  margin: 2em 0 0 auto;
  min-height: 78vh;
`;

const content_top = css`
  display: flex;
  align-items: center;
  flex: none;
  width: 100%;
  font-family: "Roboto Mono", monospace;
`;
