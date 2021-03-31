import React from 'react'
import { Box, Flex, Grid, Link } from 'theme-ui'

import { Icon } from './Icon'

export function Footer() {
  return (
    <Box>
      <Box bg="primary" sx={{ width: '100%' }}>
        <Flex sx={{ flexDirection: 'column', minHeight: 6, justifyContent: 'center' }}>
          <Flex sx={{ justifyContent: 'center' }}>
            <Flex sx={{ justifyContent: 'space-evenly', maxWidth: '800px', width: '100%' }}>
              <Link href="https://twitter.com/element_fi" target="_blank">
                <Icon name="twitterSolid" color="background" height={50} width={50} />
              </Link>
              <Link href="https://discord.gg/JpctS728r9" target="_blank">
                <Icon name="discord" color="background" height={50} width={50} />
              </Link>
              <Link href="https://t.me/elementfinance" target="_blank">
                <Icon
                  name="telegram"
                  color="background"
                  height={40}
                  width={40}
                  sx={{ ml: '4px', mt: '4px' }}
                />
              </Link>
              <Link href="https://medium.com/@element-finance" target="_blank">
                <Icon
                  name="medium"
                  color="background"
                  height={40}
                  width={40}
                  sx={{ ml: '4px', mt: '4px' }}
                />
              </Link>
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </Box>
  )
}
