import React, { forwardRef, useCallback, useEffect, useState } from "react"
import { defaultIconProps } from "@/context/IconContext"
import useIconSettings from "@/hooks/useIconSettings"
import { useScrollPosition } from "@/hooks/useScrollPosition"
import useTheme from "@/hooks/useTheme"
import type { AvailableThemes } from "@/types/theme"
import {
  Block,
  Flex,
  Item,
  MenuTrigger,
  Slider,
  Styles,
} from "@cube-dev/ui-kit"
import {
  ArrowClockwise,
  CaretDownFill,
  ChevronDown,
  JengaIconProps,
  JengaIconRegularProps,
  Moon,
  Sun,
  WaveTriangle,
  WaveTriangleFill,
} from "@jengaicons/react"
import { IconMetadata } from "@/types/icon"
import {
  CPButton,
  CPColorPicker,
  CPMenu,
  CPRow,
  CPSearchInput,
  CPText,
} from "@/shared/library"
import { CommonControlProps, CornerType } from "@/types/components/IconControl"

const getThemeIcon = (theme: AvailableThemes) => {
  switch (theme) {
    case "dark":
      return <Moon size='1.25rem' />
    case "light":
      return <Sun size='1.25rem' />
  }
}

const width = "100%"

const VariantSelectorMenu = ({
  setIconSettings,
  iconSettings,
}: CommonControlProps) => {
  return (
    <MenuTrigger>
      <CPButton
        padding='10px'
        height='100%'
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
  )
}

const IconSearch = ({ setIconSettings }: CommonControlProps) => {
  return (
    <CPSearchInput
      width={width}
      placeholder='Search...'
      onChange={(val) =>
        setIconSettings({
          type: "update-search-filter",
          payload: val,
        })
      }
    />
  )
}

const IconSizeChanger = ({
  iconSettings,
  setIconSettings,
}: CommonControlProps) => {
  return (
    <CPRow
      padding='10px'
      flow={["row nowrap", "row nowrap", "row wrap"]}
      justifyContent='space-between'
      style={{
        border: "1px solid var(--cp-border)",
        borderRadius: "0.5rem",
        minWidth: "fit-content",
      }}
      alignItems='center'
      gap='0.25rem'
      width={width}
    >
      <CPText>Size</CPText>
      <Block
        width='100%'
        styles={{
          display: ["block", "block", "none"],
        }}
      >
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
      </Block>

      <CPText width='30px'>{iconSettings.props.size}px</CPText>
      {/* FOR MOBILE */}
      <Block
        width='100%'
        styles={{
          display: ["none", "none", "block"],
        }}
      >
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
      </Block>
    </CPRow>
  )
}

const IconBorderChanger = ({
  iconSettings,
  setIconSettings,
}: CommonControlProps) => {
  return (
    <CPRow
      padding='10px'
      height='100%'
      flow={["row nowrap", "row nowrap", "row wrap"]}
      justifyContent='space-between'
      width={width}
      style={{
        border: "1px solid var(--cp-border)",
        borderRadius: "0.5rem",
      }}
      alignItems='center'
      gap='8px'
    >
      <CPText>Border</CPText>

      <Block
        width='100%'
        styles={{
          display: ["block", "block", "none"],
        }}
      >
        <Slider
          width='100%'
          minValue={0.5}
          maxValue={3}
          step={0.5}
          value={Number(iconSettings.props.weight)}
          onChange={(val) =>
            setIconSettings({ type: "update-border-width", payload: val })
          }
        />
      </Block>
      <CPText>{iconSettings.props.weight}px</CPText>
      {/* FOR MOBILE */}
      <Block
        width='100%'
        styles={{
          display: ["none", "none", "block"],
        }}
      >
        <Slider
          width='100%'
          minValue={0.5}
          maxValue={3}
          step={0.5}
          value={Number(iconSettings.props.weight)}
          onChange={(val) =>
            setIconSettings({ type: "update-border-width", payload: val })
          }
        />
      </Block>
    </CPRow>
  )
}

const getCornerIcon = (corner: CornerType) => {
  switch (corner) {
    case "Miter corner":
      return <WaveTriangleFill />
    case "Round corner":
      return <WaveTriangleFill />
    case "Bevel corner":
      return <WaveTriangleFill />
  }
}

const IconCornerChanger = ({
  iconSettings,
  setIconSettings,
}: CommonControlProps) => {
  const corner = iconSettings.notAdded.corner

  return (
    <MenuTrigger>
      <CPButton
        styles={{
          border: "1px solid var(--cp-border)",
          borderRadius: "8px",
        }}
        padding='10px'
        height='100%'
        width={width}
        variant='outline'
        icon={getCornerIcon(corner)}
        rightIcon={<CaretDownFill />}
      >
        <CPText
          transform='capitalize'
          styles={{ display: ["block", "block", "none"] }}
        >
          {corner}
        </CPText>
      </CPButton>

      <CPMenu
        onAction={(key) =>
          setIconSettings({
            type: "update-icon-corner",
            payload: key as CornerType,
          })
        }
      >
        <Item key='Miter corner'>
          <CPText>{getCornerIcon("Miter corner")} Miter corner </CPText>
        </Item>
        <Item key='Round corner'>
          <CPText>{getCornerIcon("Round corner")} Round corner </CPText>
        </Item>
        <Item key='Bevel corner'>
          <CPText>{getCornerIcon("Bevel corner")} Bevel corner </CPText>
        </Item>
      </CPMenu>
    </MenuTrigger>
  )
}

const IconColorChanger = ({
  iconSettings,
  setIconSettings,
}: CommonControlProps) => {
  return (
    <MenuTrigger>
      <CPButton
        styles={{
          border: "1px solid var(--cp-border)",
          borderRadius: "8px",
        }}
        height='100%'
        variant='outline'
        margin='0'
        padding='0'
      >
        <CPRow height='100%' padding='8px' alignItems='center' gap='8px'>
          <CPRow
            width={["24px", "24px", "61px"]}
            height={"24px"}
            styles={{ backgroundColor: iconSettings.props.color }}
          />

          <CPText
            styles={{
              display: ["block", "block", "none"],
            }}
          >
            {iconSettings.props.color}
          </CPText>
        </CPRow>
      </CPButton>

      <CPMenu
        width='6.3rem'
        id='color-menu-item'
        onAction={(key) =>
          setIconSettings({
            type: "update-variant-filter",
            payload: key as IconMetadata["variant"],
          })
        }
      >
        <Item>
          <CPColorPicker
            color={iconSettings.props.color}
            onChange={(color) =>
              setIconSettings({
                type: "update-color",
                payload: color,
              })
            }
          />
        </Item>
      </CPMenu>
    </MenuTrigger>
  )
}

const IconSettingsReset = ({
  setIconSettings,
}: Omit<CommonControlProps, "iconSettings">) => {
  return (
    <CPRow height='100%'>
      <CPButton
        variant='outline'
        icon={<ArrowClockwise />}
        onClick={() =>
          setIconSettings({
            type: "update-icon-props",
            payload: defaultIconProps,
          })
        }
      />
    </CPRow>
  )
}

const WebpageThemeChanger = () => {
  const [currentTheme, changeTheme] = useTheme()

  const handleChangeTheme = useCallback(() => {
    if (currentTheme === "light") changeTheme("dark")
    if (currentTheme === "dark") changeTheme("light")
  }, [currentTheme])

  return (
    <CPRow>
      <CPButton
        variant='outline'
        icon={getThemeIcon(currentTheme)}
        onClick={handleChangeTheme}
      />
    </CPRow>
  )
}

const IconControls = forwardRef<
  HTMLElement,
  {
    styles?: Styles
  }
>(function _IconControls({ styles }, ref) {
  const [iconSettings, setIconSettings] = useIconSettings()

  const commonProps: CommonControlProps = {
    iconSettings,
    setIconSettings,
  }

  const props = {
    gap: "0.625rem",
    height: "100%",
    width: "100%",
    flow: "row nowrap",
    alignItems: "center",
  } as const

  return (
    <CPRow
      ref={ref}
      alignItems='center'
      styles={{
        backgroundColor: "var(--cp-surface)",
        minHeight: "84px",
        ...styles,
      }}
    >
      <CPRow
        zIndex={1}
        gap='0.625rem'
        width='100%'
        alignItems='stretch'
        flow={["row nowrap", "row wrap", "column nowrap"]}
      >
        <CPRow {...props}>
          <VariantSelectorMenu {...commonProps} />
          <IconSearch {...commonProps} />
        </CPRow>

        <CPRow {...props}>
          <IconSizeChanger {...commonProps} />
          <IconBorderChanger {...commonProps} />
        </CPRow>
        <CPRow {...props}>
          <IconCornerChanger {...commonProps} />
          <IconColorChanger {...commonProps} />
          <IconSettingsReset {...commonProps} />
          <WebpageThemeChanger />
        </CPRow>
      </CPRow>
    </CPRow>
  )
})

export default IconControls
