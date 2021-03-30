import React, { ChangeEvent, CSSProperties, useState } from "react";
import { Box, Button, Grid, Heading, Input, Text } from "theme-ui";

import { Desktop } from "./Desktop";
import { Mobile } from "./Mobile";

// eslint-disable-next-line
const EMAIL_REGEX = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

function Email() {
  const [email, setEmail] = useState<string | undefined>();

  const emailError = !!email && !EMAIL_REGEX.test(email);

  function handleEmailChange(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setEmail(value);
  }

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
          columns="auto"
          gap="10px"
        >
          <EmailForm />
        </Grid>
      </Desktop>
      <Mobile>
        <Grid gap={3} mt="80px">
          <EmailFormMobile />
          {/* <Box
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
            />
          </Box>
          <Button
            disabled={emailError}
            variant="email"
            sx={{ minWidth: "140px" }}
          >
            Sign Up
          </Button> */}
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
          Element Finance offers BTC, ETH and USDC at a discount, introducing
          high fixed yield income to the DeFi market.
        </Text>
        <Email />
      </Box>
    </Grid>
  );
}

function EmailForm() {
  return (
    <div
      className="emailoctopus-form-wrapper emailoctopus-form-default null"
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
      }}
    >
      <p className="emailoctopus-success-message"></p>
      <p className="emailoctopus-error-message"></p>
      <form
        action="https://emailoctopus.com/lists/bec30112-0e12-11eb-a3d0-06b4694bee2a/members/embedded/1.3/add"
        method="post"
        data-message-success="Thanks for subscribing!"
        data-message-missing-email-address="Your email address is required."
        data-message-invalid-email-address="Your email address looks incorrect, please try again."
        data-message-bot-submission-error="This doesn't look like a human submission."
        data-message-consent-required="Please check the checkbox to indicate your consent."
        data-message-invalid-parameters-error="This form has missing or invalid fields."
        data-message-unknown-error="Sorry, an unknown error has occurred. Please try again later."
        className="emailoctopus-form"
        style={{
          display: "flex",
          flex: 1,
          alignItems: "center",
        }}
      >
        <Input
          id="field_0"
          name="field_0"
          type="email"
          required
          placeholder="Enter your email"
        />
        <div aria-hidden="true" className="emailoctopus-form-row-hp">
          <input
            type="text"
            name="hpc4b27b6e-eb38-11e9-be00-06b4694bee2a"
            tabIndex={-1}
            autoComplete="nope"
          />
        </div>
        <input type="hidden" name="successRedirectUrl" />
        <Button
          variant="email"
          style={{
            color: "muted",
          }}
          sx={{
            minWidth: "140px",
          }}
          type="submit"
        >
          Sign Up
        </Button>
      </form>
    </div>
  );
}

function EmailFormMobile() {
  return (
    <div
      className="emailoctopus-form-wrapper emailoctopus-form-default null"
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
      }}
    >
      <p className="emailoctopus-success-message"></p>
      <p className="emailoctopus-error-message"></p>
      <form
        action="https://emailoctopus.com/lists/bec30112-0e12-11eb-a3d0-06b4694bee2a/members/embedded/1.3/add"
        method="post"
        data-message-success="Thanks for subscribing!"
        data-message-missing-email-address="Your email address is required."
        data-message-invalid-email-address="Your email address looks incorrect, please try again."
        data-message-bot-submission-error="This doesn't look like a human submission."
        data-message-consent-required="Please check the checkbox to indicate your consent."
        data-message-invalid-parameters-error="This form has missing or invalid fields."
        data-message-unknown-error="Sorry, an unknown error has occurred. Please try again later."
        className="emailoctopus-form"
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          flex: 1,
          alignItems: "center",
        }}
      >
        <Box
          p={1}
          pl={4}
          sx={{
            borderRadius: "round",
            boxShadow: "light",
            bg: "background",
          }}
          style={{ width: "100%", marginBottom: 16 }}
        >
          <Input
            id="field_0"
            name="field_0"
            type="email"
            required
            placeholder="Enter your email"
          />
        </Box>
        <div aria-hidden="true" className="emailoctopus-form-row-hp">
          <input
            type="text"
            name="hpc4b27b6e-eb38-11e9-be00-06b4694bee2a"
            tabIndex={-1}
            autoComplete="nope"
          />
        </div>
        <input type="hidden" name="successRedirectUrl" />
        <Button
          variant="email"
          style={{
            color: "muted",
            width: "100%",
          }}
          sx={{
            minWidth: "140px",
          }}
          type="submit"
        >
          Sign Up
        </Button>
      </form>
    </div>
  );
}
