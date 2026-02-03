export type TVariants = "fill" | "regular" | "mono"

export type TIconSafeName = string

export interface IconMetadata {
  name: string
  safeName: TIconSafeName
  categories: string[]
  tags: string[]
  variant: Lowercase<TVariants>
}

export interface VariantIconMetaData {
  name: string
  safeName: TIconSafeName
  categories?: string[]
  tags?: string[]
}
