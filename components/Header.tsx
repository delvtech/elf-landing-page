import React, { useState } from "react";
import { Card, Container, Flex, Grid, IconButton, Text } from "theme-ui";
import { MenuButton, Link as AnchorLink } from "theme-ui";

import { Desktop } from "./Desktop";
import { Icon } from "./Icon";
import { Mobile } from "./Mobile";

import { Link, animateScroll as scroll } from "react-scroll";

function HamburgerDropdown() {
  const [dropdownActive, setDropdownActive] = useState<boolean>(false);
  function toggleDropdown() {
    setDropdownActive(!dropdownActive);
  }

  function closeDropdown() {
    setDropdownActive(false);
  }
  return (
    <Flex>
      <Card
        sx={{
          bg: "background",
          position: "absolute",
          right: "16px",
          display: dropdownActive ? "inline-block" : "none",
          boxShadow: "light",
          borderRadius: "roundish",
          p: 3,
          mx: 4,
        }}
      >
        <Grid>
          <Link
            to="investors"
            onClick={closeDropdown}
            smooth={true}
            offset={-70}
            duration={1000}
          >
            <Text variant="subHeading" sx={{ fontWeight: "semiBold" }}>
              Investors
            </Text>
          </Link>
          <Link
            to="team"
            onClick={closeDropdown}
            smooth={true}
            offset={-70}
            duration={1000}
          >
            <Text
              variant="subHeading"
              sx={{ fontWeight: "semiBold", cursor: "pointer" }}
            >
              Team
            </Text>
          </Link>
          <Link
            to="advisors"
            onClick={closeDropdown}
            smooth={true}
            offset={-70}
            duration={1000}
          >
            <Text variant="subHeading" sx={{ fontWeight: "semiBold" }}>
              Advisors
            </Text>
          </Link>
        </Grid>
      </Card>
      <Grid sx={{ alignContent: "center" }}>
        <IconButton
          sx={{ display: dropdownActive ? "block" : "none", outline: "none" }}
          onClick={toggleDropdown}
        >
          <Icon
            name="close"
            sx={{ alignSelf: "end", color: "primary" }}
            height={24}
            width={24}
          />
        </IconButton>
        <MenuButton
          sx={{
            outline: "none",
            display: dropdownActive ? "none" : "block",
            color: "primary",
            p: 0,
          }}
          onClick={toggleDropdown}
        />
      </Grid>
    </Flex>
  );
}

export function Header() {
  return (
    <Container variant="header">
      <Flex
        sx={{ justifyContent: "space-between", alignItems: "center" }}
        py={[2, 3]}
        px={[3, 4]}
      >
        <Icon name="logo" height="69px" width="209px" />
        <>
          <Desktop>
            <Grid
              gap={4}
              columns="auto auto auto auto"
              sx={{ alignItems: "center" }}
            >
              <Link to="investors" smooth={true} offset={-70} duration={1000}>
                <Text
                  variant="subHeading"
                  sx={{ fontWeight: "semiBold", cursor: "pointer" }}
                >
                  Investors
                </Text>
              </Link>
              <Link to="team" smooth={true} offset={-70} duration={1000}>
                <Text
                  variant="subHeading"
                  sx={{ fontWeight: "semiBold", cursor: "pointer" }}
                >
                  Team
                </Text>
              </Link>
              <Link to="advisors" smooth={true} offset={-70} duration={1000}>
                <Text
                  variant="subHeading"
                  sx={{ fontWeight: "semiBold", cursor: "pointer" }}
                >
                  Advisors
                </Text>
              </Link>
              <AnchorLink href="https://paper.element.fi/" target="_blank">
                <Text variant="subHeading" sx={{ fontWeight: "semiBold" }}>
                  Documentation
                </Text>
              </AnchorLink>
            </Grid>
          </Desktop>
          <Mobile sx={{ display: ["block", "none"] }}>
            <HamburgerDropdown />
          </Mobile>
        </>
      </Flex>
    </Container>
  );
}
