import { createContext, useCallback, useContext, useState } from "react"
import {
  IconInfoContext,
  IconInfoDrawerState,
} from "@/types/hooks/useIconInfoDrawer"
import { TIconSafeName } from "@/types/icon"

const ContextFallback = () =>
  console.log("IconInfoDrawer Context not loaded fully")

const IconInfoDrawerContext = createContext<IconInfoContext>({
  openDrawer: ContextFallback,
  closeDrawer: ContextFallback,
  selectIcon: ContextFallback,
  drawerState: {
    isOpen: false,
  },
})

export const useIconInfoDrawer = () => {
  const drawerContext = useContext(IconInfoDrawerContext)

  if (!drawerContext)
    throw new Error("You should it only with IconInfoContext.Provider")

  const { drawerState, ...rest } = drawerContext

  return [drawerState, rest] as const
}

export const IconInfoDrawerProvider = ({
  children,
}: {
  children: JSX.Element
}) => {
  const [drawerState, setDrawerState] = useState<IconInfoDrawerState>({
    isOpen: false,
  })

  const openDrawer = useCallback(() => {
    setDrawerState((prev) => ({ ...prev, isOpen: true }))
  }, [])

  const closeDrawer = useCallback(() => {
    setDrawerState((prev) => ({ ...prev, isOpen: false }))
  }, [])

  const selectIcon = useCallback((iconSafeName: TIconSafeName) => {
    setDrawerState((prev) => ({ ...prev, selectedIcon: iconSafeName }))
  }, [])

  return (
    <IconInfoDrawerContext.Provider
      value={{
        openDrawer,
        closeDrawer,
        selectIcon,
        drawerState,
      }}
    >
      {children}
    </IconInfoDrawerContext.Provider>
  )
}
