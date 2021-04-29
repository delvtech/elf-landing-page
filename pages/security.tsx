import { Footer } from "components/Footer";
import React from "react";
import { Box, Text, Flex } from "theme-ui";
import { ParallaxProvider } from "react-scroll-parallax";
import { HeaderLinked } from "components/HeaderLinked";

function Background() {
  return (
    <ParallaxProvider>
      <Flex
        sx={{
          flexDirection: "column",
          height: "calc(100% - 240px)",
          width: "100%",
          position: "absolute",
          alignItems: "center",
          justifyContent: "space-between",
          zIndex: -1,
        }}
      ></Flex>
    </ParallaxProvider>
  );
}

function Main() {
  return (
    <Flex
      sx={{
        flexDirection: "column",
        minHeight: "100%",
      }}
    >
      <HeaderLinked />
      <Flex
        variant={"container"}
        sx={{
          flex: 1,
          padding: 4,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
      </Flex>
      <Footer />
    </Flex>
  );
}
export default function Security() {
  return (
    <Box
      sx={{
        position: "absolute",
        width: "100%",
        height: "100%",
        overflowX: "hidden",
      }}
    >
      <Background />
      <Main />
    </Box>
  );
}
