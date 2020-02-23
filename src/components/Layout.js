/** @jsx jsx */
// eslint-disable-next-line
import React from "react";
import { jsx } from "@emotion/core";
import NavBar from "./NavBar";
import ControlBar from "./ControlBar";
import { Stack, Flex } from "@chakra-ui/core";

function Layout(props) {
  const { children, label } = props;
  return (
    <Stack spacing={10} p="2.5em 2.5em 0">
      <Flex align="center">
        <NavBar label={label} />
      </Flex>
      <Flex minH="75vh" justify="center">
        {children}
      </Flex>
      <Flex align="center">
        <ControlBar />
      </Flex>
    </Stack>
  );
}

export default Layout;
