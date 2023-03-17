import { GET_ALL_SVG_ICON_ZIP } from "@/constants/api/paths"
import useFetch from "@/hooks/useFetch"
import { Flex, useToastsApi } from "@cube-dev/ui-kit"
import {
  ArrowCircleUpRight,
  ArrowLineDown,
  ChevronRight,
  FigmaLogo,
  Heart,
  LinkBreak,
} from "@jengaicons/react"
import Link from "next/link"
import React, { useCallback } from "react"
import { CPButton, CPColumn, CPRow, CPText } from "./shared/library"
import SectionContainer from "./shared/SectionContainer"

function Hero({ totalIcons }: { totalIcons: string }) {
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
            {/* <CPRow
              hide={[false, false, true]}
              gap='4px'
              justifyContent='center'
              alignItems='center'
            >
              <LinkBreak size='1.25rem' />
              <CPText fontWeight='medium'>Download All</CPText>
            </CPRow> */}
            <CPRow gap='4px' justifyContent='center' alignItems='center'>
              <FigmaLogo size='1.25rem' />
              <CPText fontWeight='medium'>Figma Library / Plugin</CPText>
            </CPRow>
            {/* <CPRow
              margin={["0", "0", "0 0 -1.25rem 0"]}
              gap='4px'
              justifyContent='center'
              alignItems='center'
            >
              <Heart size='1.25rem' />
              <CPText fontWeight='medium'>Donate on PayPal</CPText>
            </CPRow> */}
          </Flex>
        </CPColumn>
        <Flex
          justifyContent='center'
          margin='2.5rem 0 0 0'
          gap='1.25rem'
          flow={["row", "row", "column"]}
        >
          <Link
            className='text-decoration-none'
            target='_blank'
            href='https://github.com/OutpostHQ/jengaicons/blob/main/README.md'
          >
            <CPButton
              padding='12px 24px'
              rightIcon={<ChevronRight color='var(--cp-icon-on-primary)' />}
            >
              Get Started
            </CPButton>
          </Link>
          <Link
            href={`${GET_ALL_SVG_ICON_ZIP}`}
            target='_blank'
            className='text-decoration-none'
          >
            <CPButton
              padding='12px 24px'
              rightIcon={<ArrowLineDown />}
              variant='outline'
              width='100%'
            >
              <CPText>Download All ({totalIcons})</CPText>
            </CPButton>
          </Link>
        </Flex>
      </CPColumn>
    </SectionContainer>
  )
}

export default Hero
