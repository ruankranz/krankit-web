import React from "react";
import { Box, Badge, Text, Image } from "@chakra-ui/core";

const GalleryItem = ({ item }) => {
  return (
    <Box maxW="sm" borderWidth="1px" rounded="lg" overflow="hidden">
      <Image rounded="md" src={item.image} />
      <Box p="6">
        <Box d="flex" alignItems="baseline">
          <Badge rounded="full" px="2" variantColor="teal">
            {item.label}
          </Badge>
        </Box>
      </Box>
      <Text mt={2} fontSize="xl" fontWeight="semibold" lineHeight="short">
        {item.description}
      </Text>
    </Box>
  );
};

export default GalleryItem;
