import * as React from "react";
import { forwardRef, useContext } from "react";
import type { Context } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconRegularProps } from "../../src/base";

const Cardholder = forwardRef<SVGSVGElement, JengaIconRegularProps>(
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
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={weight || weightCtx || "2"}
          d="M4 11.5h24"
        />
        <path
          fill={color || colorCtx || "#000000"}
          d="M4 15.5v-1a1 1 0 0 0-1 1h1Zm7.957 0 1-.019a1 1 0 0 0-1-.981v1ZM4 25.5H3a1 1 0 0 0 1 1v-1Zm23.96 0v1a1 1 0 0 0 1-1h-1Zm0-10h1a1 1 0 0 0-1-1v1Zm-8.01 0v-1a1 1 0 0 0-1 .981l1 .019ZM4 16.5h7.957v-2H4v2Zm1 9v-10H3v10h2Zm22.96-1H4v2h23.96v-2Zm-1-9v10h2v-10h-2Zm-7.01 1h8.01v-2h-8.01v2Zm-1-1.019c-.005.25-.171.615-.722.964-.54.342-1.34.585-2.275.585v2c1.257 0 2.44-.322 3.345-.895.893-.566 1.63-1.466 1.651-2.616l-2-.038Zm-2.997 1.549c-.934 0-1.735-.243-2.274-.585-.552-.349-.718-.714-.722-.964l-2 .038c.022 1.15.758 2.05 1.651 2.616.904.573 2.088.895 3.345.895v-2Z"
        />
        <path
          stroke={color || colorCtx || "#000000"}
          strokeLinejoin="round"
          strokeWidth={weight || weightCtx || "2"}
          d="M4 7.5h24v18H4z"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

Cardholder.displayName = "Cardholder";

export default Cardholder;
