import { SvelteComponentTyped } from "svelte"
import type { IconNode } from "./types"
declare const __propDef: {
  props: {
    [x: string]: any
    name?: string | undefined
    color?: string
    size?: number | string
    strokeWidth?: number | string
    absoluteStrokeWidth?: boolean
    iconNode?: IconNode
  }
  events: {
    [evt: string]: CustomEvent<any>
  }
  slots: {
    default: {}
  }
}
export type IconProps = typeof __propDef.props
export type IconEvents = typeof __propDef.events
export type IconSlots = typeof __propDef.slots
export default class Icon extends SvelteComponentTyped<
  IconProps,
  IconEvents,
  IconSlots
> {}
export {}
