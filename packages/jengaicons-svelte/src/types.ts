import { Snippet } from "svelte"
import type { SVGAttributes } from "svelte/elements"

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  /** Icon name for CSS class */
  name?: string
  /** Icon color - accepts any CSS color value */
  color?: string
  /** Icon size in pixels */
  size?: number | string
  /** Stroke width for outline icons */
  strokeWidth?: number | string
  /** Use absolute stroke width (adjusts based on size) */
  absoluteStrokeWidth?: boolean
  /** CSS class name */
  class?: string
  /** Children snippet for Svelte 5 */
  children?: Snippet
}

export type IconNode = [string, Record<string, string>][]
