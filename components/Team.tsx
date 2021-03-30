import Image from "next/image";
import React from "react";
import { Box, Flex, Grid, Link, Text } from "theme-ui";

import { TeamBackground } from "./Background";
import { Icon } from "./Icon";

export const team = [
  {
    file: "will.jpeg",
    name: "Will Villanueva",
    twitter: "wjvill",
    role: "CEO & Co-Founder",
  },
  {
    file: "jonny.jpg",
    name: "Jonny Rhea",
    twitter: "JonnyRhea",
    role: "CTO & Co-Founder",
  },
  {
    file: "charles.jpeg",
    name: "Charles St.Louis",
    twitter: "CharlieStLouis",
    role: "COO",
  },
  {
    file: "windra.jpg",
    name: "Windra Thio",
    twitter: "windrathio",
    role: "Growth & Strategy",
  },
  {
    file: "danny.jpg",
    name: "Danny Delott",
    twitter: "dannydelott",
    role: "Lead Front-End Engineer",
  },
  {
    file: "matt.jpg",
    name: "Matt Brown",
    twitter: "sentilesdal",
    role: "Senior Full-Stack Engineer",
  },
  {
    file: "nicholas.jpg",
    name: "Nicholas Evans",
    twitter: "NicholasEvans14",
    role: "Senior Solidity Engineer",
  },
  {
    file: "paul.jpg",
    name: "Paul Vienhage",
    twitter: "PVienhage",
    role: "Lead Solidity Engineer",
  },
];

export function Team() {
  return (
    <Grid sx={{ alignContent: "center", justifyContent: "center" }}>
      <Flex sx={{ justifyContent: "center" }}>
        <Text variant="heading" sx={{ fontSize: [5, 6] }}>
          Team
        </Text>
      </Flex>
      <Flex
        mt={"40px"}
        sx={{ justifyContent: "center", flexWrap: "wrap", maxWidth: "900px" }}
        p={[1, 2]}
      >
        {team.map(({ file, name, twitter, role }, idx) => (
          <Grid
            key={idx}
            sx={{ justifyContent: "center", maxWidth: "200px" }}
            mb="80px"
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
                src={`/team/${file}`}
                layout="intrinsic"
                width="251px"
                height="269px"
              />
            </Box>
            <Grid gap={"6px"}>
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
