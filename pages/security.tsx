import { Footer } from "components/Footer";
import React from "react";
import { Box, Text, Flex, Heading, Link, Grid } from "theme-ui";
import { ParallaxProvider } from "react-scroll-parallax";
import { HeaderLinked } from "components/HeaderLinked";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
const { default: securityMarkdown } = require("docs/security.md");

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

const markdownComponents = {
  h1: Heading,
  p: Paragraph,
  a: Link,
  h2: H2,
  h3: H3,
  h4: H4,
  table: Table,
};

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
          flexDirection: "column",
        }}
      >
        <Flex
          sx={{
            flexDirection: "column",
            maxWidth: "60%",
            minWidth: "400px",
            marginTop: [3],
          }}
        >
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={markdownComponents}
          >
            {securityMarkdown}
          </ReactMarkdown>
        </Flex>
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

function H2(props: unknown) {
  return <Text variant="h2" sx={{ marginTop: 4 }} {...props} />;
}
function H3(props: unknown) {
  return <Text variant="h3" sx={{ marginTop: 3 }} {...props} />;
}
function H4(props: unknown) {
  return <Text variant="h4" sx={{ marginTop: 3 }} {...props} />;
}
function Paragraph(props: unknown) {
  return <Text variant="text" sx={{ marginTop: 2 }} {...props} />;
}

function Table(props: unknown) {
  return (
    <table
      style={{ textAlign: "center", marginTop: "8px", marginBottom: "8px" }}
      {...props}
    />
  );
}
