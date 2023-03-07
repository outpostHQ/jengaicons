import { forwardRef } from "react"
import {
  Block,
  Card,
  CubeCardProps,
  CubeFormProps,
  FieldTypes,
  Form,
  useCombinedRefs,
} from "@cube-dev/ui-kit"
import { DOMRef } from "@react-types/shared"

export const CPCardPrimary = forwardRef(function _PrimaryCard(
  props: CubeCardProps,
  ref,
) {
  const { style } = props
  return (
    <Card
      ref={ref}
      padding='1.25rem'
      display='flex'
      flow='column'
      gap='1rem'
      radius='2r'
      fill='var(--cp-surface)'
      style={{
        boxShadow: "0px 1.33333px 4px 0.25px var(--cp-shadow)",
        border: "1px solid var(--cp-border)",
        ...style,
      }}
      {...props}
    />
  )
})

export function CPCardForm<T extends FieldTypes>(
  props: CubeFormProps<T>,
  ref: DOMRef<HTMLFormElement>,
) {
  const combinedRef = useCombinedRefs([ref])

  return (
    <Form<T>
      ref={combinedRef}
      padding='1.25rem'
      display='flex'
      flow='column'
      gap='1rem'
      radius='2r'
      fill='var(--cp-surface)'
      style={{
        boxShadow: "0px 1.33333px 4px 0.25px var(--cp-shadow)",
        border: "1px solid var(--cp-border)",
      }}
      {...props}
    />
  )
}

export function CPCardDanger() {
  return (
    <Block
      padding='0.5rem'
      fill='var(--cp-surface-critical-subduded)'
      radius='2r'
      color='var(--cp-text-critical)'
    />
  )
}
