import React, {
  forwardRef,
  memo,
  useCallback,
  useEffect,
  useState,
} from "react"
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
import { IconMetadata, TVariants } from "@/types/icon"
import {
  CPButton,
  CPColorPicker,
  CPMenu,
  CPRow,
  CPSearchInput,
  CPText,
} from "@/shared/library"
import {
  CommonControlProps,
  IconCornerType,
} from "@/types/components/IconControl"
import { ColorPicker } from "./ColorPicker"
import { useAtom, useAtomValue, useSetAtom } from "jotai"
import {
  IconColorAtom,
  IconCornerAtom,
  IconSearchAtom,
  IconSizeAtom,
  IconVariantAtom,
  IconWeightAtom,
} from "@/state/atoms"
import { useRecoilValue } from "recoil"

const getThemeIcon = (theme: AvailableThemes) => {
  switch (theme) {
    case "dark":
      return <Moon size='1.25rem' />
    case "light":
      return <Sun size='1.25rem' />
  }
}

const width = "100%"

const AvailableIconVariants: TVariants[] = ["fill", "regular"]

const VariantSelectorMenu = () => {
  const [iconVariant, setIconVariant] = useAtom(IconVariantAtom)

  return (
    <MenuTrigger>
      <CPButton
        padding='10px'
        height='100%'
        rightIcon={<CaretDownFill />}
        variant='outline'
      >
        <CPText transform='capitalize'>{iconVariant}</CPText>
      </CPButton>
      <CPMenu width='6.3rem' onAction={setIconVariant as any}>
        {AvailableIconVariants.map((variant) => (
          <Item key={variant}>
            <CPText transform='capitalize'>{variant}</CPText>
          </Item>
        ))}
      </CPMenu>
    </MenuTrigger>
  )
}

const IconSearch = () => {
  const setIconSearch = useSetAtom(IconSearchAtom)

  return (
    <CPSearchInput
      width={width}
      placeholder='Search...'
      onChange={setIconSearch}
    />
  )
}

const IconSizeChanger = () => {
  const [iconSize, setIconSize] = useAtom(IconSizeAtom)
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
          value={iconSize as number}
          onChange={setIconSize}
        />
      </Block>

      <CPText width='30px'>{iconSize}px</CPText>
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
          value={iconSize as number}
          onChange={setIconSize}
        />
      </Block>
    </CPRow>
  )
}

const IconBorderChanger = () => {
  const [iconWeight, setIconWeight] = useAtom(IconWeightAtom)

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
          value={iconWeight}
          onChange={setIconWeight}
        />
      </Block>
      <CPText>{iconWeight}px</CPText>
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
          value={iconWeight}
          onChange={setIconWeight}
        />
      </Block>
    </CPRow>
  )
}

const getCornerIcon = (corner: IconCornerType) => {
  switch (corner) {
    case "Miter corner":
      return <WaveTriangleFill />
    case "Round corner":
      return <WaveTriangleFill />
    case "Bevel corner":
      return <WaveTriangleFill />
  }
}

const IconCornerChanger = () => {
  const [corner, setCorner] = useAtom(IconCornerAtom)

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

      <CPMenu onAction={setCorner as any}>
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

const IconColorChanger = () => {
  const IconColor = useAtomValue(IconColorAtom)

  const [showPicker, setShowPicker] = useState(false)

  const togglePicker = useCallback(() => {
    console.log("pressed")
    setShowPicker((prev) => !prev)
  }, [])

  return (
    <CPRow
      styles={{
        position: "relative",
      }}
    >
      <CPButton
        styles={{
          border: "1px solid var(--cp-border)",
          borderRadius: "8px",
        }}
        height='100%'
        width={["120px", "120px", "auto"]}
        variant='outline'
        margin='0'
        padding='0'
        onPress={togglePicker}
      >
        <CPRow height='100%' padding='8px' alignItems='center' gap='8px'>
          <canvas
            id='icon-controls-color-picker'
            style={{
              backgroundColor: IconColor,
            }}
          />

          <CPText
            styles={{
              display: ["block", "block", "none"],
            }}
          >
            {IconColor}
          </CPText>
        </CPRow>
      </CPButton>
      {showPicker ? (
        <CPRow
          styles={{
            position: "absolute",
            marginTop: "45px",
          }}
        >
          <ColorPicker zIndex={99999999999999999999999999} />
        </CPRow>
      ) : null}
    </CPRow>
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

const WebpageThemeChanger = memo(function _() {
  const [currentTheme, changeTheme] = useTheme()

  const handleChangeTheme = useCallback(() => {
    if (currentTheme === "light") changeTheme("dark")
    if (currentTheme === "dark") changeTheme("light")
  }, [changeTheme, currentTheme])

  return (
    <CPRow>
      <CPButton
        variant='outline'
        icon={getThemeIcon(currentTheme)}
        onClick={handleChangeTheme}
      />
    </CPRow>
  )
})

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
          <VariantSelectorMenu />
          <IconSearch />
        </CPRow>

        <CPRow {...props}>
          <IconSizeChanger />
          <IconBorderChanger />
        </CPRow>
        <CPRow {...props}>
          <IconCornerChanger />
          <IconColorChanger />
          {/* <IconSettingsReset {...commonProps} /> */}
          <WebpageThemeChanger />
        </CPRow>
      </CPRow>
    </CPRow>
  )
})

export default IconControls
