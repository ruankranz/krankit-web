/** @jsx jsx */
import React from "react";
import { jsx, css } from "@emotion/core";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

function SocialLinks(props) {
  const { label } = props;

  return (
    <div css={social_links}>
      <Link css={social_link} to="/about">
        <FaLinkedin css={social_link} />
      </Link>
      <Link css={social_link} to="/">
        <FaGithub css={social_link} />
      </Link>
      <Link css={social_link} to="/gallery">
        <FaTwitter css={social_link} />
      </Link>
    </div>
  );
}

export default SocialLinks;

const social_links = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 9em;
  margin: 0 0 0 auto;
`;

const social_link = css`
  display: block;
  width: 2em;
  height: 2.35em;
  margin: 0 auto;

  &:hover {
    color: red;
  }
`;
