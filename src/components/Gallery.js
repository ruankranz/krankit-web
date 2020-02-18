/** @jsx jsx */
import React from "react";
import { jsx, css } from "@emotion/core";
import GalleryItem from "./GalleryItem";
import { useWindowDimensions } from "../services/WindowDimensionsProvider";

const Gallery = ({ items }) => {
  let { width } = useWindowDimensions();
  return (
    <div css={width > 780 ? container : [container, container_mobile]}>
      {items.map(item => (
        <GalleryItem
          label={item.label}
          description={item.desription}
          link={item.link}
          image={item.image}
        />
      ))}
    </div>
  );
};

export default Gallery;

const container = css`
  display: flex;
  justify-content: space-around;
`;

const container_mobile = css`
  display: block;
`;
