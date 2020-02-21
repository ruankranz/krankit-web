import React from "react";
import Layout from "./Layout";
import PageHeader from "./Header";
import Gallery from "./Gallery";

const AppGallery = () => {
  const items = [
    {
      label: "test",
      image: "",
      description: "Just say mkay!",
      link: "https://krankit.co.za"
    },
    {
      label: "test",
      image: "",
      description: "Just say mkay!",
      link: "https://krankit.co.za"
    },
    {
      label: "test",
      image: "",
      description: "Just say mkay!",
      link: "https://krankit.co.za"
    }
  ];

  return (
    <Layout label="gallery">
      <PageHeader
        title="Application Gallery"
        sub_title="Explore the projects we are working on"
      />
      <Gallery items={items} />
    </Layout>
  );
};

export default AppGallery;
