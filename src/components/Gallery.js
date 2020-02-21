/** @jsx jsx */
// eslint-disable-next-line
import React from "react";
import { jsx } from "@emotion/core";
import { SimpleGrid } from "@chakra-ui/core";
import ResponsiveLayout from "components/ResponsiveLayout";
import GalleryItem from "components/GalleryItem";

const DesktopView = ({ items }) => {
  return (
    <SimpleGrid columns={3} spacing={10}>
      {items.map((item) => (
        <GalleryItem item={item} />
      ))}
    </SimpleGrid>
  );
};

const MobileView = ({ items }) => {
  return (
    <SimpleGrid columns={1} spacing={10}>
      {items.map((item) => (
        <GalleryItem item={item} />
      ))}
    </SimpleGrid>
  );
};

const Gallery = ({ items }) => {
  return (
    <ResponsiveLayout
      breakPoint={767}
      renderDesktop={() => <DesktopView items={items} />}
      renderMobile={() => <MobileView items={items} />}
    />
  );
};

export default Gallery;
