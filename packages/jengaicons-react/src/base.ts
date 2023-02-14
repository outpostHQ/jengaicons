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

export interface JengaIconRegularProps extends JengaIconProps {
  /**
   * Sets the thinkness / `strokeWidth` of the Icon \
   * Only applies to `Regular` icons
   * */
  weight?: SVGProps<SVGSVGElement>['strokeWidth']
}

type TJengaIconContext = Partial<JengaIconProps | JengaIconRegularProps>

export const JengaIconContext = createContext<TJengaIconContext>({})
