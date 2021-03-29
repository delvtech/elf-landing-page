import React, { ChangeEvent, useCallback, useState } from "react";
import { Box, Button, Grid, Heading, Input, Text } from "theme-ui";

import { Desktop } from "./Desktop";
import { Mobile } from "./Mobile";

// eslint-disable-next-line
const EMAIL_REGEX = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

async function postData(url = "", data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: "POST",
    cache: "no-cache",
    mode: 'no-cors',
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

function Email() {
  const [email, setEmail] = useState<string>("");
  const [emailSubmitted, setEmailWasSubmitted] = useState(false);

  const emailError = !!email && !EMAIL_REGEX.test(email);

  function handleEmailChange(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setEmail(value);
  }

  const submitEmailForm = useCallback(() => {
    // Example POST method implementation:
    postData(
      `https://emailoctopus.com/api/1.5/lists/bec30112-0e12-11eb-a3d0-06b4694bee2a/contacts?apikey=${process.env.NEXT_PUBLIC_EMAIL_OCTOPUS_API_KEY}`,
      {
        api_key: process.env.NEXT_PUBLIC_EMAIL_OCTOPUS_API_KEY,
        email_address: email,
      }
    ).then(() => {
      setEmailWasSubmitted(true);
    });
  }, [email]);

  return (
    <>
      <Desktop>
        <Grid
          sx={{
            maxWidth: "547px",
            borderRadius: "round",
            boxShadow: "light",
            bg: "background",
          }}
          p={1}
          pl={4}
          mt="96px"
          columns="auto 140px"
          gap="10px"
        >
          <Input
            placeholder="Enter your email"
            type="email"
            onChange={handleEmailChange}
            value={email}
          />
          <Button
            disabled={emailError || emailSubmitted}
            variant="email"
            sx={{ minWidth: "140px" }}
            onClick={submitEmailForm}
          >
            {emailSubmitted ? "Submitted" : "Sign Up"}
          </Button>
        </Grid>
      </Desktop>
      <Mobile>
        <Grid gap={3} mt="80px">
          <Box
            p={1}
            pl={4}
            sx={{
              borderRadius: "round",
              boxShadow: "light",
              bg: "background",
            }}
          >
            <Input
              placeholder="Enter your email"
              type="email"
              onChange={handleEmailChange}
              value={email}
            />
          </Box>
          <Button
            disabled={emailError || emailSubmitted}
            variant="email"
            sx={{ minWidth: "140px" }}
            onClick={submitEmailForm}
          >
            {emailSubmitted ? "Submitted" : "Sign Up"}
          </Button>
        </Grid>
      </Mobile>
    </>
  );
}

export function TitleSection(): JSX.Element {
  return (
    <Grid sx={{ alignContent: "center" }}>
      <Box>
        <Heading
          as="h1"
          sx={{
            maxWidth: "491px",
            lineHeight: "108%",
            mb: 5,
            fontSize: [6, 7],
          }}
        >
          Not locked yield, fixed yield.
        </Heading>
        <Text
          variant="subHeading"
          sx={{
            lineHeight: 1.5,
            maxWidth: "479px",
            width: "100%",
            py: 2,
            px: 3,
            ml: -3,
            my: -3,
            borderRadius: "roundish",
            backgroundImage: () =>
              `radial-gradient(rgba(255, 255, 255, 1) 60%, rgba(255, 255, 255, 0))`,
          }}
        >
          Element finance offers BTC, ETH and USDC at a discount, introducing
          high fixed yield income to the DeFi market.
        </Text>
        <Email />
      </Box>
    </Grid>
  );
}
