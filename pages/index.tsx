import { Advisors } from 'components/Advisors'
import { InvestorsBackground, TeamBackground, TitleBackground } from 'components/Background'
import { Footer } from 'components/Footer'
import { Header } from 'components/Header'
import { Investors } from 'components/Investors'
import { Team } from 'components/Team'
import { TitleSection } from 'components/TitleSection'
import React from 'react'
import { Box, Container, Flex, Grid } from 'theme-ui'

function Background() {
  return (
    <Flex
      sx={{
        flexDirection: 'column',
        height: 'calc(100% - 240px)',
        width: '100%',
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'space-between',
        zIndex: -1,
      }}
    >
      <TitleBackground />
      <InvestorsBackground />
      <TeamBackground />
    </Flex>
  )
}

function Main() {
  return (
    <Flex
      sx={{
        flexDirection: 'column',
        minHeight: '100%',
      }}
    >
      <Header />
      <Container variant={'container'} sx={{ flex: 2 }} as="main">
        <Grid sx={{ width: '100%', height: '100%', px: 3 }} gap={7} mt="25vh">
          <TitleSection />
          <Grid gap={6}>
            <Box id="investors">
              <Investors />
            </Box>
            <Box id="team">
              <Team />
            </Box>
            <Box id="advisors">
              <Advisors />
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </Flex>
  )
}
export default function Landing() {
  return (
    <Box sx={{ position: 'absolute', width: '100%', overflowX: 'hidden' }}>
      <Background />
      <Main />
    </Box>
  )
}
