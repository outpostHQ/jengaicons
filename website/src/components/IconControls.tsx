import React, { useCallback, useEffect, useState } from "react"
import { defaultIconProps } from "@/context/IconContext"
import useIconSettings from "@/hooks/useIconSettings"
import { useScrollPosition } from "@/hooks/useScrollPosition"
import useTheme from "@/hooks/useTheme"
import type { AvailableThemes } from "@/types/theme"
import { Block, Flex, Item, MenuTrigger, Slider } from "@cube-dev/ui-kit"
import { ArrowClockwise, CaretDownFill, Moon, Sun } from "@jengaicons/react"
import { IconMetadata } from "@/types/icon"
import {
  CPButton,
  CPMenu,
  CPRow,
  CPSearchInput,
  CPText,
} from "@/shared/library"

const getThemeIcon = (theme: AvailableThemes) => {
  switch (theme) {
    case "dark":
      return <Moon size='1.25rem' />
    case "light":
      return <Sun size='1.25rem' />
  }
}

const SearchBar = () => {
  return
}

function IconControls() {
  const scroll = useScrollPosition()
  const [iconSettings, setIconSettings] = useIconSettings()

  const [currentTheme, changeTheme] = useTheme()

  const handleChangeTheme = useCallback(() => {
    if (currentTheme === "light") changeTheme("dark")
    if (currentTheme === "dark") changeTheme("light")
  }, [currentTheme])

  return (
    <Block
      padding={["1.25rem 0", "1.25rem 0", "1.25rem "]}
      styles={{
        boxShadow: "0px 4px 12px 0.75px rgba(0, 0, 0, 0.33)",
        position: "sticky",
        top: 0,
        background: "var(--cp-surface)",
        zIndex: 1,
      }}
    >
      <Block
        id='header'
        styles={{
          maxWidth: "1040px",
          margin: "0 auto",
        }}
      >
        <Flex
          flow={["row wrap", "row wrap", "column"]}
          justifyContent='space-between'
          gap='.6125rem'
          width='100%'
        >
          <CPRow flex='1' gap='10px' width='100%'>
            <MenuTrigger>
              <CPButton
                padding='12px'
                rightIcon={<CaretDownFill />}
                variant='outline'
              >
                {iconSettings.filter.variant === "regular" && "Regular"}
                {iconSettings.filter.variant === "fill" && "Filled"}
              </CPButton>
              <CPMenu
                width='6.3rem'
                onAction={(key) =>
                  setIconSettings({
                    type: "update-variant-filter",
                    payload: key as IconMetadata["variant"],
                  })
                }
              >
                <Item key='regular'>Regular</Item>
                <Item key='fill'>Filled</Item>
              </CPMenu>
            </MenuTrigger>
            <CPSearchInput
              padding='12px 10px'
              width='100%'
              onChange={(val) =>
                setIconSettings({
                  type: "update-search-filter",
                  payload: val,
                })
              }
            />
          </CPRow>
          <CPRow
            flex='1'
            flow={["row", "row", "column"]}
            gap='10px'
            width='100%'
          >
            <Flex
              padding='12px 10px'
              style={{
                border: "1px solid var(--cp-border)",
                borderRadius: "0.5rem",
              }}
              alignItems='center'
              gap='0.25rem'
              width='100%'
            >
              <CPText>Size</CPText>
              <Slider
                width='100%'
                minValue={16}
                maxValue={96}
                step={4}
                value={iconSettings.props.size as number}
                onChange={(val) =>
                  setIconSettings({
                    type: "update-size",
                    payload: val,
                  })
                }
              />
              <CPText width='30px'>{iconSettings.props.size}px</CPText>
            </Flex>

            <Flex
              padding='12px 10px'
              style={{
                border: "1px solid var(--cp-border)",
                borderRadius: "0.5rem",
              }}
              alignItems='center'
              gap='0.25rem'
              width='100%'
            >
              <CPText>Border</CPText>
              <Slider
                width='100%'
                minValue={0.5}
                maxValue={3}
                step={0.5}
                onChange={(val) =>
                  setIconSettings({ type: "update-border-width", payload: val })
                }
              />
              <CPText>{iconSettings.props.weight}px</CPText>
            </Flex>
          </CPRow>
          <CPRow width={["auto", "auto", "100%"]} gap='10px'>
            <Flex
              padding='6px 12px'
              style={{
                border: "1px solid var(--cp-border)",
                borderRadius: "0.5rem",
              }}
              alignItems='center'
              gap='0.5rem'
            >
              <input
                type='color'
                value={iconSettings.props.color}
                onChange={(e) =>
                  setIconSettings({
                    type: "update-color",
                    payload: e.target.value,
                  })
                }
              />
              <CPText>{iconSettings.props.color}</CPText>
            </Flex>

            <CPButton
              height='100%'
              variant='outline'
              icon={<ArrowClockwise size='1.25rem' />}
              onClick={() =>
                setIconSettings({
                  type: "update-icon-props",
                  payload: defaultIconProps,
                })
              }
            />
            <CPButton
              height='100%'
              variant='outline'
              icon={getThemeIcon(currentTheme)}
              onClick={handleChangeTheme}
            />
          </CPRow>
        </Flex>
      </Block>
    </Block>
  )
}

export default IconControls
