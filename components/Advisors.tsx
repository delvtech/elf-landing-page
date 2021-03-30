import Image from "next/image";
import React from "react";
import { Box, Flex, Grid, Link, Text } from "theme-ui";

import { Icon } from "./Icon";

export const team = [
  {
    file: "fernando_martinelli.png",
    name: "Fernando Martinelli",
    twitter: "fcmartinelli",
    role: "Founder & CEO @ Balancer Labs",
  },
  {
    file: "mariano_conti.jpg",
    name: "Mariano Conti",
    twitter: "nanexcool",
    role: "Former Head of Smart Contracts @ Maker Foundation",
  },
  {
    file: "andy_chorlian.png",
    name: "Andy Chorlian",
    twitter: "andy8052",
    role: "Co-Founder @ Fractional",
  },
  {
    file: "evan_van_ness.jpg",
    name: "Evan Van Ness",
    twitter: "evan_van_ness",
    role: "Week in Ethereum News",
  },
  {
    file: "eric_conner.jpg",
    name: "Eric Conner",
    twitter: "econoar",
    role: "Co-founder @ EthHub | Into the Ether Podcast",
  },
  {
    file: "danny_ryan.jpg",
    name: "Danny Ryan",
    twitter: "dannyryan",
    role: "Ethereum Foundation: Eth 2 R&D",
  },
];

export function Advisors() {
  return (
    <Grid sx={{ alignContent: "center", justifyContent: "center" }}>
      <Flex sx={{ justifyContent: "center" }}>
        <Text variant="heading" sx={{ fontSize: [5, 6] }}>
          Advisors
        </Text>
      </Flex>
      <Flex
        mt={"40px"}
        sx={{
          justifyContent: "center",
          flexWrap: "wrap",
          mb: "160px",
          maxWidth: "700px",
        }}
        p={[1, 2]}
      >
        {team.map(({ file, name, twitter, role }, idx) => (
          <Grid
            key={idx}
            sx={{ justifyContent: "space-evenly", maxWidth: "175px" }}
            px={2}
            mx={2}
            gap={"19px"}
          >
            <Box
              sx={{
                opacity: "95%",
              }}
            >
              <Image
                src={`/advisors/${file}`}
                layout="intrinsic"
                width="251px"
                height="269px"
              />
            </Box>
            <Grid gap={"6px"} mb={"80px"} sx={{ maxWidth: "175px" }}>
              <Text
                variant="text.subHeading"
                sx={{ fontWeight: "heading", textOverflow: "wrap" }}
              >
                {name}
              </Text>
              <Text variant="text">{role}</Text>
              <Link
                variant="nav"
                href={`https://twitter.com/${twitter}`}
                target="_blank"
              >
                <Grid columns="auto 1fr" sx={{ alignItems: "center" }} gap={1}>
                  <Icon name="twitter" />
                  <Text color="twitter">@{twitter}</Text>
                </Grid>
              </Link>
            </Grid>
          </Grid>
        ))}
      </Flex>
    </Grid>
  );
}
