import { Flex, Grid, Text } from "@theme-ui/components";
import Image from "next/image";
import React from "react";
import { Box, Link } from "theme-ui";
import { Desktop } from "./Desktop";
import { Mobile } from "./Mobile";

const rowOne = [
  { investor: "a16z.png", url: "https://a16z.com", width: 375, height: 210 },
  {
    investor: "placeholder.svg",
    url: "https://www.placeholder.vc",
    width: 1317,
    height: 267,
  },
  {
    investor: "a-capital.svg",
    url: "https://acapital.com",
    width: 168,
    height: 31,
  },
  {
    investor: "scalar-capital.svg",
    url: "https://scalar.capital",
    width: 238,
    height: 60,
  },
  {
    investor: "sv-angel.png",
    url: "https://www.svangel.com",
    width: 800,
    height: 480,
  },
  {
    investor: "robot-ventures.png",
    url: "https://robvc.com",
    width: 3200,
    height: 800,
  },
  {
    investor: "consensys.svg",
    url: "https://twitter.com/ethereumJoseph",
    width: 512,
    height: 256,
  },
  {
    investor: "balancer.svg",
    url: "https://twitter.com/fcmartinelli",
    width: 512,
    height: 256,
  },
  {
    investor: "aave.svg",
    url: "https://twitter.com/StaniKulechov",
    width: 512,
    height: 256,
  },
];

export function Investors() {
  return (
    <Grid sx={{ alignContent: "center" }}>
      <Box>
        <Flex sx={{ justifyContent: "center" }}>
          <Text variant="heading" sx={{ fontSize: [5, 6] }}>
            Backed by
          </Text>
        </Flex>
        <Grid mt={"40px"} gap={5}>
          <Mobile>
            <Flex
              sx={{
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "space-evenly",
              }}
            >
              {rowOne.map(({ investor, url, ...rest }, idx) => (
                <Grid
                  key={idx}
                  sx={{ maxWidth: "250px", minWidth: "90px" }}
                  m={4}
                >
                  <Link href={url} target="_blank">
                    <Image {...{ src: `/investors/${investor}`, ...rest }} />
                  </Link>
                </Grid>
              ))}
            </Flex>
          </Mobile>
          <Desktop>
            <Grid
              columns={3}
              sx={{
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "space-evenly",
              }}
            >
              {rowOne.map(({ investor, url, ...rest }, idx) => (
                <Grid
                  key={idx}
                  sx={{ maxWidth: "250px", minWidth: "90px" }}
                  m={4}
                >
                  <Link href={url} target="_blank">
                    <Image {...{ src: `/investors/${investor}`, ...rest }} />
                  </Link>
                </Grid>
              ))}
            </Grid>
          </Desktop>
        </Grid>
      </Box>
    </Grid>
  );
}
