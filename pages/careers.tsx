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
        <Flex
          sx={{ flexDirection: "column", maxWidth: "50%", minWidth: "400px" }}
        >
          <Text variant="heading" sx={{ fontSize: [5, 6], marginBottom: 4 }}>
            Join the team
          </Text>
          <Text sx={{ marginBottom: 4 }}>
            Element is a protocol that’s launching novel fixed rate DeFi
            primitives and aiming to become a backbone of the decentralized
            finance ecosystem. Our core team was founded by a pair of serious
            Eth 2.0 researchers who have built out a team focused on research
            and solving the hard problems in the Ethereum space. Working with us
            would also mean working with people who contributed to top DeFi
            projects such as Maker, 0x and Keep who are all leveling up their
            skills together.
          </Text>
          <Text sx={{ marginBottom: 4 }}>
            Element Protocol will evolve past the core team on launch to become
            a community run and lead network. If you join now you will have the
            opportunity to work in a totally new type of decentralized community
            oriented organisation. The core team is aiming to infuse the network
            and community with our values: strong decentralization, free and
            open access to financial protocols and code, and the desire to make
            the world a better place. Unlike other startups which have to evolve
            into organizations which purely pursue the profit of shareholders,
            Element protocol as a decentralized network has the potential to
            actually deliver on the promise that your work will make the world a
            better place.
          </Text>
          <Text sx={{ marginBottom: 5 }}>
            If you join our core team you will play an important role in
            fostering and supporting the Element ecosystem and protocol as it
            develops, and your work will directly contribute to a new type of
            organisation which will make finance freer, fairer, and better for
            the world.
          </Text>
          <Text variant="heading" sx={{ fontSize: [5, 6], marginBottom: 4 }}>
            Job Listings
          </Text>
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
