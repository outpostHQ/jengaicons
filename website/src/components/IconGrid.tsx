import { CPIconLoading, CPRow } from "./shared/library"
import useIconSettings from "@/hooks/useIconSettings"
import dynamic from "next/dynamic"
import {} from "@reach/router"
const LoadingComponent = () => <CPIconLoading size="4rem" />

const RegularIconGrid = dynamic(import("@/components/icon/RegularIconGrid"), {
  loading: LoadingComponent,
  ssr: true,
})

const FillIconGrid = dynamic(import("@/components/icon/FillIconGrid"), {
  loading: LoadingComponent,
  ssr: false,
})

// const RegularIconGrid = lazy(() => import("@/components/icon/RegularIconGrid"))
// const FillIconGrid = lazy(() => import("@/components/icon/FillIconGrid"))

const IconGrid = () => {
  const [iconSettings] = useIconSettings()

  switch (iconSettings.filter.variant) {
    case "fill":
      return <FillIconGrid />
    case "regular":
      return <RegularIconGrid />
  }
}

export default IconGrid
