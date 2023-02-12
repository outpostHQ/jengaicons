import { createContext } from 'react'
import type { SVGProps, SVGSVGElement } from 'react'

export interface JengaIconProps {
  /** Set the size of the Svg in px*/
  size?: number | string

  /** Change the color of Icon */
  color?: string

  /** Alternate text */
  alt?: string

  /** Mirror the icon for RTL support */
  mirrored?: boolean

  children?: SVGProps<SVGSVGElement>['children']
}

type TJenIconContext = Partial<JengaIconProps>

export const JengaIconContext = createContext<TJenIconContext>({})
