import * as React from "react";
import { forwardRef, useContext } from "react";
import type { Context } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconRegularProps } from "../../src/base";

const HandGrabbing = forwardRef<SVGSVGElement, JengaIconRegularProps>(
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
          strokeWidth={weight || weightCtx || "2"}
          d="M16 13.5v-6a3 3 0 0 0-3-3v0a3 3 0 0 0-3 3v8.4M22 13.5v-6a3 3 0 0 0-3-3v0a3 3 0 0 0-3 3v6M4 16.2V15a3.6 3.6 0 0 1 3.6-3.6h1.8M28 17.1V9.9a3 3 0 0 0-6 0v3.6m6 3.053C28 23.257 23.342 28.5 16 28.5c-7.855 0-12-5.897-12-12.6"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

HandGrabbing.displayName = "HandGrabbing";

export default HandGrabbing;
