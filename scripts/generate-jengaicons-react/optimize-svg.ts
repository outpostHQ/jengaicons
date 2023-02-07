import { optimize } from 'svgo'

const optimizeSVG = (svgContent: string) => {
  return optimize(svgContent).data
}

export { optimizeSVG }
