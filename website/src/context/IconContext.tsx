import useTheme from "@/hooks/useTheme"
import { AvailableThemes } from "@/types/theme"
import { JengaIconProps, JengaIconRegularProps } from "@jengaicons/react"
import { createContext, ReactNode, useEffect, useReducer } from "react"
import { IconMetadata } from "@/types/icon"
import { CornerType } from "@/types/components/IconControl"

interface IconSettingsState {
  props: JengaIconProps & JengaIconRegularProps
  filter: {
    search: string
    variant: IconMetadata["variant"]
  }
  /** This prop is used to indicate certain features or functionality is not added */
  notAdded: {
    corner: CornerType
  }
}

type IconSettingsAction =
  | {
      type: "update-size"
      payload: number
    }
  | {
      type: "update-color"
      payload: string
    }
  | {
      type: "update-search-filter"
      payload: string
    }
  | {
      type: "update-border-width"
      payload: number
    }
  | {
      type: "update-variant-filter"
      payload: IconMetadata["variant"]
    }
  | {
      type: "update-icon-props"
      payload: Partial<JengaIconProps | JengaIconRegularProps>
    }
  | {
      type: "update-icon-corner"
      payload: CornerType
    }

type TSettingsReducer = (
  state: IconSettingsState,
  action: IconSettingsAction,
) => IconSettingsState

export const defaultIconProps: JengaIconProps | JengaIconRegularProps = {
  size: 32,
  color: "#FFFFFF",
  weight: 2,
}

export type TPreviewIconContext = {
  iconSettings: IconSettingsState
  setIconSettings: (_: IconSettingsAction) => void
}

export const IconContext = createContext<TPreviewIconContext>({
  iconSettings: {
    filter: {
      search: "",
      variant: "regular",
    },
    props: defaultIconProps,
    notAdded: {
      corner: "Miter corner",
    },
  },
  setIconSettings: () => console.log("Settings will not be updated"),
})

export const IconContextProvider = ({ children }: { children: ReactNode }) => {
  const SettingsReducer: TSettingsReducer = (state, action) => {
    const { type, payload } = action
    switch (type) {
      case "update-size":
        return { ...state, props: { ...state.props, size: payload } }
      case "update-color":
        return { ...state, props: { ...state.props, color: payload } }
      case "update-search-filter":
        return { ...state, filter: { ...state.filter, search: payload } }
      case "update-border-width":
        return { ...state, props: { ...state.props, weight: payload } }
      case "update-variant-filter":
        return { ...state, filter: { ...state.filter, variant: payload } }
      case "update-icon-props":
        return { ...state, props: { ...state.props, ...payload } }
      case "update-icon-corner":
        return { ...state, notAdded: { ...state.notAdded, corner: payload } }
      default:
        console.warn("Unknown action:", type)
        return state
    }
  }

  const [settings, setSettings] = useReducer<
    TSettingsReducer,
    IconSettingsState
  >(
    SettingsReducer,
    {
      filter: {
        search: "",
        variant: "regular",
      },
      props: defaultIconProps,
      notAdded: {
        corner: "Miter corner",
      },
    },
    () => ({
      filter: {
        search: "",
        variant: "regular",
      },
      props: defaultIconProps,
      notAdded: {
        corner: "Miter corner",
      },
    }),
  )

  const [currentTheme, changeTheme] = useTheme()

  useEffect(() => {
    const color = currentTheme === "light" ? "#000000" : "#FFFFFF"
    console.log(`currentTheme ${currentTheme}`)
    setSettings({
      type: "update-color",
      payload: color,
    })
  }, [currentTheme, changeTheme])

  return (
    <IconContext.Provider
      value={{
        iconSettings: settings,
        setIconSettings: setSettings,
      }}
    >
      {children}
    </IconContext.Provider>
  )
}
