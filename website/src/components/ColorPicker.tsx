import {
  CPButton,
  CPMenu,
  CPNumberInput,
  CPRow,
  CPText,
  CPTextInput,
} from "@/components/shared/library"
import useIconSettings from "@/hooks/useIconSettings"
import useTheme from "@/hooks/useTheme"
import { IconColorAtom } from "@/state/atoms"
import { Item, MenuTrigger } from "@cube-dev/ui-kit"
import { CaretDownFill } from "@jengaicons/react"
import { useAtom } from "jotai"
import Image from "next/image"
import { memo, useCallback, useEffect, useMemo, useState } from "react"

import {
  HexColorInput,
  HexColorPicker,
  RgbColor,
  RgbColorPicker,
} from "react-colorful"
import { ColorPickerBaseProps } from "react-colorful/dist/types"
import tinycolor from "tinycolor2"

type TColorModes = "hex" | "rgb"
type TColorValue = TRGBValue | THexValue
type TRGBValue = { r: number; g: number; b: number }
type THexValue = string
type TColor = string

type TCommonColorInputProps = {
  color: TColor
  onChange: (color: TColor) => void
}

type TCommonColorPickerProps = {
  color: TColor
  onChange: (color: TColor) => void
}

const ColorModeMenu = memo(function _({
  colorMode,
  onChange,
}: {
  colorMode: TColorModes
  onChange: (color: TColorModes) => void
}) {
  return (
    <MenuTrigger>
      <CPButton
        padding='10px'
        height='100%'
        rightIcon={<CaretDownFill />}
        variant='clear'
      >
        <CPText transform='uppercase'>{colorMode}</CPText>
      </CPButton>
      <CPMenu
        width='6.3rem'
        onAction={onChange as (key: any) => void}
        selectedKeys={colorMode}
      >
        <Item key='hex'>HEX</Item>
        {/* <Item key='rgb'>RGB</Item> */}
      </CPMenu>
    </MenuTrigger>
  )
})

// const RGBInput = ({ color, onChange }: TCommonProps) => {
//   return (
//     <>
//       <CPRow width='100%'>
//         <CPNumberInput width='63x' minValue={0} maxValue={255} />
//         <CPNumberInput width='63x' minValue={0} maxValue={255} />
//         <CPNumberInput width='63x' minValue={0} maxValue={255} />
//       </CPRow>
//     </>
//   )
// }

const HexInput = ({ color, onChange }: TCommonColorInputProps) => {
  const handleChange = useCallback(
    (color: string) => onChange(color),
    [onChange],
  )
  return (
    <>
      <CPTextInput
        placeholder='Pick a color...'
        value={color}
        onChange={handleChange}
        width='150px'
      />
    </>
  )
}

const GetColorInput = ({
  colorMode,
  ...commonProps
}: {
  colorMode: TColorModes
} & TCommonColorInputProps) => {
  switch (colorMode) {
    case "rgb":
      return null
    case "hex":
      return <HexInput {...commonProps} />
  }
}

const convertColor = ({
  color,
  colorMode,
}: {
  color: string
  colorMode: TColorModes
}) => {
  switch (colorMode) {
    case "rgb":
      return {
        r: 1,
        g: 2,
        b: 3,
      } as TRGBValue

    case "hex":
      return color
  }
}

const GetColorPicker = ({
  colorMode,
  ...commonProps
}: {
  colorMode: TColorModes
} & TCommonColorPickerProps) => {
  const handleRGB = useCallback((color: RgbColor) => {}, [])
  const color = useMemo(
    () => convertColor({ color: commonProps.color, colorMode }),
    [colorMode, commonProps.color],
  )

  switch (colorMode) {
    case "rgb":
      return (
        <RgbColorPicker
          {...commonProps}
          color={color as TRGBValue}
          onChange={handleRGB}
        />
      )
    case "hex":
      return <HexColorPicker {...commonProps} />
  }
}

type TColorPickerProps = {
  zIndex?: number
  marginTop?: string
  onChange?: (color: string) => void
}

export const ColorPicker = ({ zIndex, marginTop }: TColorPickerProps) => {
  const [colorMode, setColorMode] = useState<TColorModes>("hex")
  const [IconColor, setIconColor] = useAtom(IconColorAtom)
  const [, setTheme] = useTheme()

  const handleColorModeChange = useCallback(
    (colorMode: TColorModes) => setColorMode(colorMode),
    [],
  )

  const handleColorChange = useCallback(
    (color: string) => {
      if (tinycolor(color).isLight()) {
        setTheme("dark")
      } else {
        setTheme("light")
      }

      setIconColor(color)
    },
    [setIconColor, setTheme],
  )

  return (
    <CPRow
      className='cp-color-picker'
      styles={{
        width: 320,
        height: 377,
        borderRadius: "8px",
        position: "relative",
        backgroundColor: "var(--cp-surface)",
        marginTop,
      }}
      zIndex={zIndex}
      style={{
        border: "1px soild black",
      }}
      flow='column nowrap'
      gap='20px'
    >
      <CPRow className='saturation-picker' width='100%' height='100%'>
        {GetColorPicker({
          color: IconColor,
          colorMode,
          onChange: handleColorChange,
        })}
      </CPRow>
      {/* CONTROLS */}
      <CPRow width='100%' justifyContent='space-between'>
        <ColorModeMenu colorMode={colorMode} onChange={handleColorModeChange} />

        <CPRow>
          {GetColorInput({
            color: IconColor,
            colorMode,
            onChange: handleColorChange,
          })}
        </CPRow>
      </CPRow>
    </CPRow>
  )
}
