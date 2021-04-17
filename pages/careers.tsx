import { Advisors } from "components/Advisors";
import {
  InvestorsBackground,
  TeamBackground,
  TitleBackground,
} from "components/Background";
import { Footer } from "components/Footer";
import { Header } from "components/Header";
import { Investors } from "components/Investors";
import { Team } from "components/Team";
import { TitleSection } from "components/TitleSection";
import React from "react";
import { Box, Container, Flex, Grid } from "theme-ui";
import { ParallaxProvider } from "react-scroll-parallax";

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
      <Header />
      <Flex
        variant={"container"}
        sx={{
          flex: 1,
          padding: 4,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Flex
          sx={{ flexDirection: "column", maxWidth: "50%", minWidth: "400px" }}
        >
          <span style={{ marginBottom: 48 }}>
            We are looking for a talented software engineer to join our team and
            build the future of finance.
          </span>
          <span style={{ marginBottom: 48 }}>
            Element is a protocol that’s launching novel fixed rate DeFi
            primitives and aiming to become a backbone of the decentralized
            finance ecosystem. Our core team was founded by a pair of serious
            Eth 2.0 researchers who have built out a team focused on research
            and solving the hard problems in the Ethereum space. Working with us
            would also mean working with people who contributed to top DeFi
            projects such as Maker, 0x and Keep who are all leveling up their
            skills together.
          </span>
          <span style={{ marginBottom: 48 }}>
            If you join our core team you will play an important role in
            fostering and supporting the Element ecosystem and protocol as it
            develops, and your work will directly contribute to a new type of
            organisation which will make finance freer, fairer, and better for
            the world.
          </span>
          <script
            data-startup="element-finance"
            src="https://angel.co/javascripts/embed_jobs.js"
            id="angellist_embed"
          ></script>
        </Flex>
      </Flex>
      <Footer />
    </Flex>
  );
}
export default function Careers() {
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
