import React, {
  forwardRef,
  memo,
  useCallback,
  useDeferredValue,
  useEffect,
  useMemo,
  useState,
} from "react"
import useTheme from "@/hooks/useTheme"
import type { AvailableThemes } from "@/types/theme"
import { Block, Item, MenuTrigger, Slider, Styles } from "@cube-dev/ui-kit"
import { ArrowClockwise, CaretDownFill, Moon, Sun } from "@jengaicons/react"
import { TVariants } from "@/types/icon"
import {
  CPButton,
  CPMenu,
  CPRow,
  CPSearchInput,
  CPText,
} from "@/shared/library"
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
import {
  defaultIconCorner,
  defaultIconDarkModeColor,
  defaultIconLightModeColor,
  defaultIconSize,
  defaultIconWeight,
} from "@/state/defaultValues"
import { useDebounce } from "usehooks-ts"

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
  const [search, setSearch] = useState("")
  const debouncedSearch = useDeferredValue<string>(search)

  useEffect(() => {
    setIconSearch(debouncedSearch)
  }, [debouncedSearch, setIconSearch])

  return (
    <CPSearchInput width={width} placeholder='Search...' onChange={setSearch} />
  )
}

const IconSizeChanger = () => {
  const [size, setSize] = useState(defaultIconSize)

  const debouncedValue = useDebounce(size, 50)

  const setIconSize = useSetAtom(IconSizeAtom)

  useEffect(() => {
    setIconSize(debouncedValue)
  }, [debouncedValue, setIconSize])

  return (
    <CPRow
      padding='10px'
      flow={["row nowrap", "row nowrap", "row wrap"]}
      justifyContent='space-between'
      style={{
        border: "1px solid var(--cp-border)",
        borderRadius: "0.5rem",
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
          value={size}
          onChange={setSize}
        />
      </Block>
      <Block>
        <CPText>{size}px</CPText>
      </Block>
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
          value={size}
          onChange={setSize}
        />
      </Block>
    </CPRow>
  )
}

const IconBorderChanger = () => {
  const [weight, setWeight] = useState(defaultIconWeight)

  const debouncedWeight = useDebounce(weight, 50)

  const setIconWeight = useSetAtom(IconWeightAtom)

  useEffect(() => {
    setIconWeight(debouncedWeight)
  }, [debouncedWeight, setIconWeight])

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
          value={weight}
          onChange={setWeight}
        />
      </Block>
      <Block
        style={{
          width: "70px",
        }}
      >
        <CPText>{weight}px</CPText>
      </Block>
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
          value={weight}
          onChange={setWeight}
        />
      </Block>
    </CPRow>
  )
}

const IconColorChanger = () => {
  const [IconColor, setIconColor] = useAtom(IconColorAtom)

  const [showPicker, setShowPicker] = useState(false)

  const togglePicker = useCallback(() => {
    setShowPicker((prev) => !prev)
  }, [])

  const [theme] = useTheme()

  useEffect(() => {
    let color = defaultIconLightModeColor

    if (theme === "dark") color = defaultIconDarkModeColor

    setIconColor(color)
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

      <CPRow
        styles={{
          position: "absolute",
          top: 50,
          right: ["50%", "50%", 0],
          transform: [
            "translate(50% , 0)",
            "translate(50% , 0)",
            "translate(55% , 0)",
          ],
        }}
      >
        <ColorPicker
          show={showPicker}
          zIndex={99999}
          close={() => setShowPicker(false)}
        />
      </CPRow>
    </CPRow>
  )
}

const IconSettingsReset = () => {
  const setIconSize = useSetAtom(IconSizeAtom)
  const setIconColor = useSetAtom(IconColorAtom)
  const setIconWeight = useSetAtom(IconWeightAtom)
  const setIconCorner = useSetAtom(IconCornerAtom)
  const [theme] = useTheme()

  const handleResetIconProps = useCallback(() => {
    setIconSize(defaultIconSize)
    setIconWeight(defaultIconWeight)
    setIconCorner(defaultIconCorner)

    if (theme === "light") setIconColor(defaultIconLightModeColor)
    else if (theme === "dark") setIconColor(defaultIconDarkModeColor)
  }, [setIconColor, setIconCorner, setIconSize, setIconWeight, theme])

  return (
    <CPRow height='100%'>
      <CPButton
        variant='outline'
        icon={<ArrowClockwise />}
        onPress={handleResetIconProps}
      />
    </CPRow>
  )
}

const WebpageThemeChanger = memo(function _() {
  const [currentTheme, changeTheme] = useTheme()
  const [, setIconColor] = useAtom(IconColorAtom)
  const handleChangeTheme = useCallback(() => {
    if (currentTheme === "light") {
      changeTheme("dark")
      setIconColor(defaultIconDarkModeColor)
    }
    if (currentTheme === "dark") {
      changeTheme("light")
      setIconColor(defaultIconLightModeColor)
    }
  }, [changeTheme, currentTheme, setIconColor])

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
  const iconVariant = useAtomValue(IconVariantAtom)

  const showBorderChanger = useMemo(
    () => (["regular"] as TVariants[]).includes(iconVariant),
    [iconVariant],
  )

  const props = {
    gap: "0.625rem",
    height: "100%",
    flow: "row nowrap",
    alignItems: "center",
    justifyContent: "center",
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
        justifyContent='center'
        flow={["row nowrap", "row wrap", "column nowrap"]}
      >
        <CPRow {...props} width='100%'>
          <VariantSelectorMenu />
          <IconSearch />
        </CPRow>

        <CPRow {...props} width='100%'>
          <IconSizeChanger />
          {showBorderChanger ? <IconBorderChanger /> : null}
        </CPRow>
        <CPRow {...props}>
          {/* <IconCornerChanger /> */}
          <IconColorChanger />
          <IconSettingsReset />
          <WebpageThemeChanger />
        </CPRow>
      </CPRow>
    </CPRow>
  )
})

export default IconControls
