import { AvailableThemes } from "@/types/theme"
import { useCallback, useEffect, useState } from "react"

const useTheme = () => {
  const [currentTheme, setCurrentTheme] = useState<AvailableThemes>("dark")

  const changeTheme = useCallback((theme: AvailableThemes) => {
    setCurrentTheme(theme)
  }, [])

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", currentTheme)
  }, [currentTheme])

  return [currentTheme, changeTheme] as const
}

export default useTheme
