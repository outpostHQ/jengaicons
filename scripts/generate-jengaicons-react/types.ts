export type TVariants = 'fill' | 'regular'

export interface IconMetadata {
  name: string
  safeName: string
  categories?: string[]
  tags: string[]
  variant: Lowercase<TVariants>
}
