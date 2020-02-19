/** @jsx jsx */
import React from "react";
import { jsx, css } from "@emotion/core";
import { Link } from "react-router-dom";

const GalleryItem = (props) => {
  const { label, image, description, link } = props;
  return (
    <div css={item}>
      <h5 css={header}>{label}</h5>
      <img src={image} alt={label} />
      <p>{description}</p>
      <Link to={link}>View</Link>
    </div>
  );
};

export default GalleryItem;

const item = css`
  flex: 1;
  margin: 5px;
  border: solid 1px #fff;
  text-align: center;
  padding: 10px;
`;

const header = css`
  font-weight: 700;
  text-decoration: underline;
`;
