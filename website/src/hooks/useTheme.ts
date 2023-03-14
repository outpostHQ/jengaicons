import { AvailableThemes } from "@/types/theme"
import { useCallback, useEffect, useState } from "react"
import { useTheme as useNextTheme } from "next-themes"

const defaultTheme = "light"

const useTheme = () => {
  const { theme: nextTheme, setTheme } = useNextTheme()

  const changeTheme = useCallback((theme: AvailableThemes) => {
    setTheme(theme)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return [(nextTheme || defaultTheme) as AvailableThemes, changeTheme] as const
}

export default useTheme
