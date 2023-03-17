import AllIconsDataJSON from "../../../optimized/allIconsData.json"
import IconFillMetaDataJSON from "../../../optimized/fill.json"
import IconRegularMetaDataJSON from "../../../optimized/regular.json"

import { IconMetadata, VariantIconMetaData } from "@/types/icon"

export const allIconsMetaData = AllIconsDataJSON as IconMetadata[]
export const IconFillMetaData = IconFillMetaDataJSON as VariantIconMetaData[]
export const IconRegularMetaData =
  IconRegularMetaDataJSON as VariantIconMetaData[]
