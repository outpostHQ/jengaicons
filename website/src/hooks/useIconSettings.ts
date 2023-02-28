import { useContext } from 'react'
import { IconContext } from '@/context/IconContext'

const useIconSettings = () => {
  const { iconSettings, setIconSettings } = useContext(IconContext)

  return [iconSettings, setIconSettings] as const
}

export default useIconSettings
