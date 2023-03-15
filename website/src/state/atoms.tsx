import { IconCornerType } from "@/types/components/IconControl"
import { AvailableThemes } from "@/types/theme"
import { JengaIconProps } from "@jengaicons/react"
import { atom } from "jotai"
import { TIconSafeName, TVariants } from "@/types/icon"

export const IconColorAtom = atom("#aabbcc")
export const IconCornerAtom = atom<IconCornerType>("Miter corner")
// @ts-expect-error
export const IconWeightAtom = atom<JengaIconProps["weight"]>(2)
export const IconSizeAtom = atom<JengaIconProps["size"]>(32)
export const IconSearchAtom = atom<string>("")
export const IconVariantAtom = atom<TVariants>("regular")
export const selectedIconAtom = atom<TIconSafeName | null>(null)
export const IsDrawerOpenAtom = atom<boolean>(false)
