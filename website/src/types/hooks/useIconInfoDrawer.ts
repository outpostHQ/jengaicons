import { TIconSafeName } from "@/types/icon"

export interface IconInfoContext {
  openDrawer: () => void
  closeDrawer: () => void
  selectIcon: (iconSafeName: TIconSafeName) => void
  drawerState: IconInfoDrawerState
}

export interface IconInfoDrawerState {
  isOpen: boolean

  /** Icon's safe name property
   * for more info: checkout Icon's metadata file
   */
  selectedIcon?: TIconSafeName
}
