import { IconCornerType } from "@/types/components/IconControl"
import { JengaIconProps } from "@jengaicons/react"
import { atom } from "jotai"
import { TIconSafeName, TVariants } from "@/types/icon"
import {
  defaultIconColor,
  defaultIconCorner,
  defaultIconSelected,
  defaultIconSize,
  defaultIconVariant,
  defaultIconWeight,
  defaultIsDrawerOpen,
} from "./defaultValues"

export const IconColorAtom = atom(defaultIconColor)
export const IconCornerAtom = atom<IconCornerType>(defaultIconCorner)
// @ts-expect-error
export const IconWeightAtom = atom<JengaIconProps["weight"]>(defaultIconWeight)
export const IconSizeAtom = atom<JengaIconProps["size"]>(defaultIconSize)
export const IconSearchAtom = atom<string>("")
export const IconVariantAtom = atom<TVariants>(defaultIconVariant)
export const selectedIconAtom = atom<TIconSafeName | null>(defaultIconSelected)
export const IsDrawerOpenAtom = atom<boolean>(defaultIsDrawerOpen)
