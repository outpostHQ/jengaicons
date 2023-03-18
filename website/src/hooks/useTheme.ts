import { AvailableThemes } from "@/types/theme"
import { useCallback } from "react"
import { useTheme as useNextTheme } from "next-themes"

const defaultTheme = "light"

function removeTransitions() {
  const css = document.createElement("style")
  css.appendChild(
    document.createTextNode(
      `*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}`,
    ),
  )
  document.head.appendChild(css)
  return css
}

function addTransitions(css: HTMLStyleElement) {
  setTimeout(() => {
    document.head.removeChild(css)
  }, 1)
}

const useTheme = () => {
  const { theme: nextTheme, setTheme } = useNextTheme()

  const changeTheme = useCallback(
    (theme: AvailableThemes) => {
      if (theme != nextTheme) setTheme(theme)

      const node = removeTransitions()
      setTheme(theme)
      addTransitions(node)

      // eslint-disable-next-line react-hooks/exhaustive-deps
    },
    [nextTheme, setTheme],
  )

  return [(nextTheme || defaultTheme) as AvailableThemes, changeTheme] as const
}

export default useTheme
