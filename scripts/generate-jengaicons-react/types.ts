export type TVariants = "Fill" | "Regular"

export interface IconMetadata {
  name: string
  safeName: string
  categories: string[]
  tags: string[]
  variant: Lowercase<TVariants>
}
