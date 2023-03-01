import { JengaIconProps, JengaIconRegularProps } from '@jengaicons/react'
import { createContext, ReactNode, useReducer } from 'react'
import { IconMetadata } from '../../../scripts/generate-jengaicons-react/types'

interface IconSettingsState {
  props: JengaIconProps & JengaIconRegularProps
  filter: {
    search: string
    variant: IconMetadata['variant']
  }
}

type IconSettingsAction =
  | {
      type: 'update-size'
      payload: number
    }
  | {
      type: 'update-color'
      payload: string
    }
  | {
      type: 'update-search-filter'
      payload: string
    }
  | {
      type: 'update-border-width'
      payload: number
    }
  | {
      type: 'update-variant-filter'
      payload: IconMetadata['variant']
    }

type TSettingsReducer = (
  state: IconSettingsState,
  action: IconSettingsAction
) => IconSettingsState

export const IconContext = createContext<{
  iconSettings: IconSettingsState
  setIconSettings: (_: IconSettingsAction) => void
}>({
  iconSettings: {
    filter: {
      search: '',
      variant: 'regular',
    },
    props: { size: 32, color: '#FFFFFF' },
  },
  setIconSettings: () => console.log('Settings will not be updated'),
})

export const IconContextProvider = ({ children }: { children: ReactNode }) => {
  const SettingsReducer: TSettingsReducer = (state, action) => {
    const { type, payload } = action
    switch (type) {
      case 'update-size':
        return { ...state, props: { ...state.props, size: payload } }
      case 'update-color':
        return { ...state, props: { ...state.props, color: payload } }
      case 'update-search-filter':
        return { ...state, filter: { ...state.filter, search: payload } }
      case 'update-border-width':
        return { ...state, props: { ...state.props, weight: payload } }
      case 'update-variant-filter':
        return { ...state, filter: { ...state.filter, variant: payload } }
      default:
        console.warn('Unknown action:', type)
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
        search: '',
        variant: 'regular',
      },
      props: {
        size: 32,
        color: '#FFFFFF',
      },
    },
    () => ({
      filter: {
        search: '',
        variant: 'regular',
      },
      props: {
        size: 32,
        color: '#FFFFFF',
      },
    })
  )

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
