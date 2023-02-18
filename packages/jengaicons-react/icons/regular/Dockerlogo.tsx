import * as React from "react";
import { forwardRef, useContext } from "react";
import type { Context } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconRegularProps } from "../../src/base";

const Dockerlogo = forwardRef<SVGSVGElement, JengaIconRegularProps>(
  (props, ref) => {
    const { size, color, alt, children, mirrored, weight, style } = props;

    const {
      alt: altCtx,
      children: childrenCtx,
      color: colorCtx,
      mirrored: mirroredCtx,
      size: sizeCtx,
      weight: weightCtx,
      style: styleCtx,
    } = useContext(JengaIconContext as Context<JengaIconRegularProps>);

    return (
      <svg
        width={size || sizeCtx || 32}
        height={size || sizeCtx || 32}
        transform={mirrored || mirroredCtx ? "scale(-1, 1)" : undefined}
        strokeWidth={weight || weightCtx || 2}
        ref={ref}
        style={{
          ...styleCtx,
          ...style,
        }}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 32 32"
      >
        {(!!altCtx || !!alt) && <title>{alt || altCtx}</title>}

        <path
          stroke={color || colorCtx || "#000000"}
          strokeLinejoin="round"
          d="M25.21 14.01a.5.5 0 0 0 .575.425c1.003-.163 1.728-.011 2.19.166.154.06.281.122.38.178a2.94 2.94 0 0 1-.477.722c-.45.5-1.235 1.007-2.609.902a.5.5 0 0 0-.5.306c-1.985 4.764-6.167 7.387-11.85 7.387-1.963 0-3.4-.448-4.452-1.107-1.052-.66-1.75-1.55-2.209-2.483a8.092 8.092 0 0 1-.757-2.727 7.228 7.228 0 0 1-.024-1.266h15.847c.985 0 1.654-.264 2.059-.467a.5.5 0 0 0 .216-.684c-.537-.998-.439-1.941-.196-2.658a4.32 4.32 0 0 1 .367-.796c.137.102.3.232.465.39.45.43.878 1.013.974 1.712Zm3.41.949h-.002.003-.002Z"
        />
        <path
          fill={color || colorCtx || "#000000"}
          fillRule="evenodd"
          d="M18.203 7.904h-2.486v2.25h2.486v-2.25Zm-8.42 2.723h2.485v2.25H9.782v-2.25Zm-2.96 2.716h2.486v2.25H6.823v-2.25Zm2.96 0h2.485v2.25H9.782v-2.25Zm5.445 0h-2.486v2.25h2.486v-2.25Zm.473 0h2.486v2.25h-2.486v-2.25Zm5.446 0H18.66v2.25h2.486v-2.25Zm-5.92-2.716h-2.485v2.25h2.486v-2.25Zm.474 0h2.486v2.25h-2.486v-2.25Z"
          clipRule="evenodd"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

Dockerlogo.displayName = "Dockerlogo";

export default Dockerlogo;
