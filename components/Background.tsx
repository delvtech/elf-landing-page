import { keyframes } from '@emotion/react'
import React, { PropsWithChildren } from 'react'
import { Box, Flex, Grid, SxStyleProp } from 'theme-ui'

import { Desktop } from './Desktop'

export interface WithSx {
  sx?: SxStyleProp
}

type RadialProps = {
  sx?: SxStyleProp
  radius: number
  color: string
}

export function Radial({ children, radius, color, sx }: PropsWithChildren<RadialProps>) {
  return (
    <Grid
      gap={0}
      p={0}
      m={0}
      sx={{
        justifyContent: 'center',
        alignContent: 'center',
        width: radius,
        height: radius,
        borderRadius: '100%',
        border: '2px solid',
        borderColor: color,
        ...sx,
      }}
    >
      {children}
    </Grid>
  )
}

type CircleProps = {
  sx?: SxStyleProp
  radius: number
  color: string
}

export function Circle({ radius, color, sx }: CircleProps) {
  return (
    <Box
      sx={{
        width: radius,
        height: radius,
        borderRadius: '100%',
        background: color,
        transform: 'rotate(90deg)',
        ...sx,
      }}
    ></Box>
  )
}

type ReflectiveCircleProps = {
  sx?: SxStyleProp
  radius: number
  reflectionColor: string
  lightColor: string
  shadowColor: string
}

export function ReflectiveCircle({
  radius,
  reflectionColor,
  lightColor,
  shadowColor,
  sx,
}: ReflectiveCircleProps) {
  return (
    <Box
      sx={{
        width: radius,
        height: radius,
        borderRadius: '100%',
        background: `radial-gradient(57.14% 57.14% at 59.01% 30.12%, ${lightColor} 42.19%, ${reflectionColor} 79.17%, ${shadowColor} 100%)`,
        ...sx,
      }}
    ></Box>
  )
}

function BlueCircleWithThreeRedRadials({ sx }: WithSx) {
  const keyframe = keyframes({
    '0%': { transform: 'rotate(0deg) translateX(5px) translateY(120px) rotate(0deg) scale(1)' },
    '25%': {
      transform: 'rotate(90deg) translateX(5px) translateY(120px) rotate(-90deg) scale(1)',
    },
    '50%': {
      transform: 'rotate(180deg) translateX(5px) translateY(120px) rotate(-180deg) scale(1)',
    },
    '75%': {
      transform: 'rotate(270deg) translateX(5px) translateY(120px) rotate(-270deg) scale(1)',
    },
    '100%': {
      transform: 'rotate(360deg) translateX(5px) translateY(120px) rotate(-360deg) scale(1)',
    },
  })

  return (
    <Box
      {...{
        sx: {
          animation: `${keyframe} 80s linear infinite normal`,
          position: 'relative',
          zIndex: -1,
          ...sx,
        },
      }}
    >
      <Radial radius={439} color="#FF4244">
        <Radial radius={390} color="#FF4244">
          <Radial radius={331} color="#FF4244">
            <ReflectiveCircle
              radius={266}
              lightColor="#FFFFFF"
              reflectionColor="#CDE4F5"
              shadowColor="#DBEEF9"
            />
          </Radial>
        </Radial>
      </Radial>
    </Box>
  )
}

function GreenCircleWithRadial({ sx }: WithSx) {
  const keyframe = keyframes({
    '0%': { transform: 'rotate(0deg) translateX(55px) translateY(160px) rotate(0deg) scale(1)' },
    '25%': {
      transform: 'rotate(-90deg) translateX(55px) translateY(160px) rotate(90deg) scale(1)',
    },
    '50%': {
      transform: 'rotate(-180deg) translateX(55px) translateY(160px) rotate(180deg) scale(1)',
    },
    '75%': {
      transform: 'rotate(-270deg) translateX(55px) translateY(160px) rotate(270deg) scale(1)',
    },
    '100%': {
      transform: 'rotate(-360deg) translateX(55px) translateY(160px) rotate(360deg) scale(1)',
    },
  })

  return (
    <Box
      {...{
        sx: {
          zIndex: -2,
          animation: `${keyframe} 100s linear infinite normal`,
          position: 'absolute',
          ...sx,
        },
      }}
    >
      <Radial radius={191} color="#BFE7D1">
        <ReflectiveCircle
          radius={136}
          lightColor="#FFFFFF"
          reflectionColor="#E0F8EF"
          shadowColor="#DBF9F7"
        />
      </Radial>
    </Box>
  )
}

function BlurryGreenTesselation({ sx }: WithSx) {
  return (
    <Box
      sx={{
        zIndex: -3,
        position: 'absolute',
        ...sx,
      }}
    >
      <Grid columns={4} gap={'28px'} sx={{ height: '129px', width: '159px' }}>
        {new Array(12)
          .fill((i: number) => (
            <Circle
              key={i}
              radius={19}
              color="#BFE8D1"
              sx={{ filter: 'blur(7px)', mixBlendMode: 'multiply' }}
            />
          ))
          .map((c, idx) => c(idx))}
      </Grid>
    </Box>
  )
}

function BlueCircle20pxBlur({ sx }: WithSx) {
  const keyframe = keyframes({
    '0%': { transform: 'rotate(0deg) translateX(55px) translateY(310px) rotate(0deg) scale(1)' },
    '25%': {
      transform: 'rotate(-90deg) translateX(55px) translateY(310px) rotate(90deg) scale(1)',
    },
    '50%': {
      transform: 'rotate(-180deg) translateX(55px) translateY(310px) rotate(180deg) scale(1)',
    },
    '75%': {
      transform: 'rotate(-270deg) translateX(55px) translateY(310px) rotate(270deg) scale(1)',
    },
    '100%': {
      transform: 'rotate(-360deg) translateX(55px) translateY(310px) rotate(360deg) scale(1)',
    },
  })

  return (
    <Box
      sx={{
        zIndex: -4,
        animation: `${keyframe} 150s linear infinite normal`,
        position: 'absolute',
        ...sx,
      }}
    >
      <ReflectiveCircle
        radius={184}
        sx={{ filter: 'blur(20px)' }}
        lightColor="#FFFFFF"
        reflectionColor="#CDE9F5"
        shadowColor="#DBEEF9"
      />
    </Box>
  )
}

function BlueCircle36pxBlur({ sx }: WithSx) {
  const keyframe = keyframes({
    '0%': { transform: 'rotate(0deg) translateX(55px) translateY(310px) rotate(0deg) scale(1)' },
    '25%': {
      transform: 'rotate(90deg) translateX(55px) translateY(310px) rotate(-90deg) scale(1)',
    },
    '50%': {
      transform: 'rotate(180deg) translateX(55px) translateY(310px) rotate(-180deg) scale(1)',
    },
    '75%': {
      transform: 'rotate(270deg) translateX(55px) translateY(310px) rotate(-270deg) scale(1)',
    },
    '100%': {
      transform: 'rotate(360deg) translateX(55px) translateY(310px) rotate(-360deg) scale(1)',
    },
  })

  return (
    <Box
      sx={{
        zIndex: -5,
        animation: `${keyframe} 42s linear infinite normal`,
        position: 'absolute',
        ...sx,
      }}
    >
      <ReflectiveCircle
        radius={87}
        sx={{ filter: 'blur(36px)' }}
        lightColor="#FFFFFF"
        reflectionColor="#CDE9F5"
        shadowColor="#DBEEF9"
      />
    </Box>
  )
}

function CrimsonBlurryCircle({ sx }: WithSx) {
  const keyframe = keyframes({
    '0%': { transform: 'rotate(0deg) translateX(15px) translateY(45px) rotate(0deg) scale(1)' },
    '25%': {
      transform: 'rotate(90deg) translateX(15px) translateY(45px) rotate(-90deg) scale(1)',
    },
    '50%': {
      transform: 'rotate(180deg) translateX(15px) translateY(45px) rotate(-180deg) scale(1)',
    },
    '75%': {
      transform: 'rotate(270deg) translateX(15px) translateY(45px) rotate(-270deg) scale(1)',
    },
    '100%': {
      transform: 'rotate(360deg) translateX(15px) translateY(45px) rotate(-360deg) scale(1)',
    },
  })

  return (
    <Box
      sx={{
        zIndex: -6,
        animation: `${keyframe} 96s linear infinite normal`,
        position: 'absolute',
        ...sx,
      }}
    >
      <Circle
        radius={36}
        sx={{ filter: 'blur(20px)', mixBlendMode: 'multiply', opacity: 0.2 }}
        color="#CA5880"
      />
    </Box>
  )
}

function LightBlueBlurryCircle({ sx }: WithSx) {
  return (
    <Box
      sx={{
        zIndex: -7,
        position: 'absolute',
        ...sx,
      }}
    >
      <Circle
        radius={67}
        sx={{ filter: 'blur(45px)', mixBlendMode: 'multiply', opacity: 0.33 }}
        color="#97E7EC"
      />
    </Box>
  )
}

export function TitleBackground(): JSX.Element {
  return (
    <Box sx={{ position: 'relative' }}>
      <BlueCircleWithThreeRedRadials
        sx={{
          top: '450px',
          left: '15%',
        }}
      />
      <GreenCircleWithRadial sx={{ left: '30%' }} />
      <Desktop>
        <BlurryGreenTesselation sx={{ top: '275px', left: '20%' }} />
      </Desktop>
      <BlueCircle20pxBlur sx={{ top: '500px', left: '-10%' }} />
      <BlueCircle36pxBlur sx={{ top: '400px', left: '15%' }} />
      <CrimsonBlurryCircle sx={{ top: '250px', left: '35%' }} />
      <LightBlueBlurryCircle sx={{ left: '10%' }} />
    </Box>
  )
}

function GreenCircle({ sx }: WithSx) {
  const keyframe = keyframes({
    '0%': { transform: 'rotate(0deg) translateX(5px) translateY(120px) rotate(0deg) scale(1)' },
    '25%': {
      transform: 'rotate(90deg) translateX(5px) translateY(120px) rotate(-90deg) scale(1)',
    },
    '50%': {
      transform: 'rotate(180deg) translateX(5px) translateY(120px) rotate(-180deg) scale(1)',
    },
    '75%': {
      transform: 'rotate(270deg) translateX(5px) translateY(120px) rotate(-270deg) scale(1)',
    },
    '100%': {
      transform: 'rotate(360deg) translateX(5px) translateY(120px) rotate(-360deg) scale(1)',
    },
  })

  return (
    <Box
      sx={{
        zIndex: -2,
        animation: `${keyframe} 80s linear infinite normal`,

        position: 'absolute',
        ...sx,
      }}
    >
      <ReflectiveCircle
        radius={68}
        lightColor="#FFFFFF"
        reflectionColor="#E0F8EF"
        shadowColor="#DBF9F7"
      />
    </Box>
  )
}

function SmallBlueCircle({ sx }: WithSx) {
  const keyframe = keyframes({
    '0%': { transform: 'rotate(0deg) translateX(5px) translateY(120px) rotate(0deg) scale(1)' },
    '25%': {
      transform: 'rotate(90deg) translateX(5px) translateY(120px) rotate(-90deg) scale(1)',
    },
    '50%': {
      transform: 'rotate(180deg) translateX(5px) translateY(120px) rotate(-180deg) scale(1)',
    },
    '75%': {
      transform: 'rotate(270deg) translateX(5px) translateY(120px) rotate(-270deg) scale(1)',
    },
    '100%': {
      transform: 'rotate(360deg) translateX(5px) translateY(120px) rotate(-360deg) scale(1)',
    },
  })

  return (
    <Box
      {...{
        sx: {
          animation: `${keyframe} 80s linear infinite normal`,
          position: 'absolute',
          zIndex: -4,
          ...sx,
        },
      }}
    >
      <ReflectiveCircle
        radius={98}
        lightColor="#FFFFFF"
        reflectionColor="#CDE4F5"
        shadowColor="#DBEEF9"
        sx={{ filter: 'blur(52px)' }}
      />
    </Box>
  )
}
function LightGreenBlurryCircle({ sx }: WithSx) {
  return (
    <Box
      sx={{
        zIndex: -5,
        position: 'absolute',
        ...sx,
      }}
    >
      <Circle
        radius={36}
        sx={{ filter: 'blur(20px)', mixBlendMode: 'multiply', opacity: 0.2 }}
        color="#8FD3C5"
      />
    </Box>
  )
}

export function InvestorsBackground() {
  return (
    <Box sx={{ position: 'relative' }} mt={'-1500px'}>
      <GreenCircle sx={{ top: '800px', left: '-10%' }} />
      <SmallBlueCircle sx={{ top: '400px', left: '45%' }} />
      <LightGreenBlurryCircle sx={{ top: '950px', left: '20%' }} />
      <LargeBlueCircle />
    </Box>
  )
}

function LargeBlueCircle({ sx }: WithSx) {
  const keyframe = keyframes({
    '0%': { transform: 'rotate(0deg) translateX(5px) translateY(120px) rotate(0deg) scale(1)' },
    '25%': {
      transform: 'rotate(90deg) translateX(5px) translateY(120px) rotate(-90deg) scale(1)',
    },
    '50%': {
      transform: 'rotate(180deg) translateX(5px) translateY(120px) rotate(-180deg) scale(1)',
    },
    '75%': {
      transform: 'rotate(270deg) translateX(5px) translateY(120px) rotate(-270deg) scale(1)',
    },
    '100%': {
      transform: 'rotate(360deg) translateX(5px) translateY(120px) rotate(-360deg) scale(1)',
    },
  })

  return (
    <Box
      {...{
        sx: {
          animation: `${keyframe} 80s linear infinite normal`,
          position: 'absolute',
          zIndex: -3,
          ...sx,
        },
      }}
    >
      <ReflectiveCircle
        radius={399}
        lightColor="#FFFFFF"
        reflectionColor="#CDE4F5"
        shadowColor="#DBEEF9"
        sx={{ filter: 'blur(52px)' }}
      />
    </Box>
  )
}

function GreenTesselation({ sx }: WithSx): JSX.Element {
  return (
    <Box
      sx={{
        zIndex: -3,
        ...sx,
      }}
    >
      <Grid columns={3} gap={'28px'} sx={{ height: '125px', width: '87px' }}>
        {new Array(12)
          .fill((i: number) => <Circle key={i} radius={19} color="#BFE8D1" />)
          .map((c, idx) => c(idx))}
      </Grid>
    </Box>
  )
}

function GreenCircleSmall({ sx }: WithSx) {
  return (
    <Box
      sx={{
        zIndex: 1,
        position: 'absolute',
        ...sx,
      }}
    >
      <ReflectiveCircle
        radius={123}
        lightColor="#FFFFFF"
        reflectionColor="#E0F8EF"
        shadowColor="#DBF9F7"
      />
    </Box>
  )
}
function GreenCircleLarge({ sx }: WithSx) {
  return (
    <Box
      sx={{
        zIndex: -1,
        position: 'absolute',
        ...sx,
      }}
    >
      <ReflectiveCircle
        radius={198}
        lightColor="#FFFFFF"
        reflectionColor="#E0F8EF"
        shadowColor="#DBF9F7"
      />
    </Box>
  )
}

function OtherLightBlueBlurryCircle({ sx }: WithSx) {
  return (
    <Box
      sx={{
        zIndex: -7,
        position: 'absolute',
        ...sx,
      }}
    >
      <Circle
        radius={67}
        sx={{ filter: 'blur(13px)', mixBlendMode: 'multiply', opacity: 0.33 }}
        color="#97E7EC"
      />
    </Box>
  )
}
function OtherCrimsonBlurryCircle({ sx }: WithSx) {
  const keyframe = keyframes({
    '0%': { transform: 'rotate(0deg) translateX(15px) translateY(45px) rotate(0deg) scale(1)' },
    '25%': {
      transform: 'rotate(90deg) translateX(15px) translateY(45px) rotate(-90deg) scale(1)',
    },
    '50%': {
      transform: 'rotate(180deg) translateX(15px) translateY(45px) rotate(-180deg) scale(1)',
    },
    '75%': {
      transform: 'rotate(270deg) translateX(15px) translateY(45px) rotate(-270deg) scale(1)',
    },
    '100%': {
      transform: 'rotate(360deg) translateX(15px) translateY(45px) rotate(-360deg) scale(1)',
    },
  })

  return (
    <Box
      sx={{
        zIndex: -6,
        animation: `${keyframe} 96s linear infinite normal`,
        position: 'absolute',
        ...sx,
      }}
    >
      <Circle
        radius={36}
        sx={{ filter: 'blur(20px)', mixBlendMode: 'multiply', opacity: 1 }}
        color="#CA5880"
      />
    </Box>
  )
}

export function TeamBackground() {
  return (
    <Flex sx={{ flexDirection: 'row', position: 'relative' }} mb={7}>
      <LargeBlueCircle />
      <GreenCircleWithRadial sx={{ top: '100px', left: '25%' }} />
      <OtherCrimsonBlurryCircle />
    </Flex>
  )
}
