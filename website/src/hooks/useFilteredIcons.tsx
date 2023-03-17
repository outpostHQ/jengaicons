import { IconSearchAtom, IconVariantAtom } from "@/state/atoms"
import { useAtomValue } from "jotai"
import { useEffect, useState } from "react"
import Fuse from "fuse.js"
import { IconFillMetaData, IconRegularMetaData } from "@/constants/icons"
import { defaultIconVariant } from "@/state/defaultValues"
import { VariantIconMetaData, TVariants } from "@/types/icon"

const fuseDefaultOptions = {
  keys: ["tags"],
}

const FuseSearch = {
  fill: new Fuse(IconFillMetaData, fuseDefaultOptions),
  regular: new Fuse(IconRegularMetaData, fuseDefaultOptions),
}

const getVariantMetaData = (variant: TVariants) => {
  switch (variant) {
    case "fill":
      return IconFillMetaData
    case "regular":
      return IconRegularMetaData
  }

  return []
}

const fewVariants = getVariantMetaData(defaultIconVariant)

export const useFilteredIcons = () => {
  const searchIcon = useAtomValue(IconSearchAtom)
  const [icons, setIcons] = useState(fewVariants)
  const iconVariant = useAtomValue(IconVariantAtom)

  useEffect(() => {
    ;(async () => {
      // UPDATE ICON LIST
      if (searchIcon) {
        setIcons(FuseSearch[iconVariant].search(searchIcon).map((v) => v.item))
      } else {
        setIcons(getVariantMetaData(iconVariant))
      }
    })()
  }, [iconVariant, searchIcon])

  return [icons]
}
