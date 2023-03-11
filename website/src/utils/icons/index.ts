import { GET_ICON_SVG } from "@/constants/api/paths"
import { TIconSafeName, TVariants } from "@/types/icon"

const totalVariants: Set<TVariants> = new Set()
totalVariants.add("fill")
totalVariants.add("regular")

export const getSVGIconURL = ({
  iconSafeName,
  variant,
}: {
  iconSafeName: TIconSafeName
  variant: TVariants
}) => {
  return `${GET_ICON_SVG}/${variant}/${iconSafeName}.svg`
}

export { totalVariants }
