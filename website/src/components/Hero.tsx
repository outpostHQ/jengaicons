import { Block, BreakpointsProvider, Flex } from "@cube-dev/ui-kit"
import { FigmaLogo, Heart, LinkBreak } from "@jengaicons/react"
import React from "react"
import { CPButton, CPColumn, CPRow, CPText } from "./shared/library"
import SectionContainer from "./shared/SectionContainer"

function Hero() {
  return (
    <SectionContainer>
      <CPColumn padding='1.25rem 0 100px 0 '>
        <CPColumn textAlign='center'>
          <CPText
            styles={{
              fontSize: " 56px",
              fontWeight: "700",
              lineHeight: "67px",
            }}
          >
            Open Source Icon Library
          </CPText>
          <CPText margin='1.25rem 0 0 0' variant='heading'>
            The Jenga icon family is easy to customize and truly conistent in
            scale and style.
          </CPText>

          <Flex
            flow={["row", "row", "column"]}
            gap='2.5rem'
            justifyContent='center'
            margin='2.5rem 0 0 0'
          >
            <CPRow
              hide={[false, false, true]}
              gap='4px'
              justifyContent='center'
              alignItems='center'
            >
              <LinkBreak size='1.25rem' />
              <CPText fontWeight='medium'>Download All</CPText>
            </CPRow>
            <CPRow gap='4px' justifyContent='center' alignItems='center'>
              <FigmaLogo size='1.25rem' />
              <CPText fontWeight='medium'>Figma Library / Plugin</CPText>
            </CPRow>
            <CPRow
              margin={["0", "0", "0 0 -1.25rem 0"]}
              gap='4px'
              justifyContent='center'
              alignItems='center'
            >
              <Heart size='1.25rem' />
              <CPText fontWeight='medium'>Donate on PayPal</CPText>
            </CPRow>
          </Flex>
        </CPColumn>
        <Flex
          justifyContent='center'
          margin='2.5rem 0 0 0'
          gap='1.25rem'
          flow={["row", "row", "column"]}
        >
          <CPButton rightIcon={<LinkBreak size='1.25rem' />}>
            Get Started
          </CPButton>

          <CPButton rightIcon={<LinkBreak size='1.25rem' />} variant='outline'>
            Download All (6,782)
          </CPButton>
        </Flex>
      </CPColumn>
    </SectionContainer>
  )
}

export default Hero
