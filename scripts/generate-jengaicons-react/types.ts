export type TVariants = "fill" | "regular"

export type TIconSafeName = string

export interface IconMetadata {
  name: string
  safeName: TIconSafeName
  categories: string[]
  tags: string[]
  variant: Lowercase<TVariants>
}
