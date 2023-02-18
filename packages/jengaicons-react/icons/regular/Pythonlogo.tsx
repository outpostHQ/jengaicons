import * as React from "react";
import { forwardRef, useContext } from "react";
import type { Context } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconRegularProps } from "../../src/base";

const Pythonlogo = forwardRef<SVGSVGElement, JengaIconRegularProps>(
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
          d="M9.41 21.748H7.446c-1.666 0-2.636-1.211-3.043-2.904-.547-2.277-.525-3.637 0-5.817.455-1.902 1.912-2.904 3.578-2.904h7.875-5.727V7.214c0-1.655.44-2.55 2.861-2.978 1.72-.306 3.803-.322 5.721-.006 1.554.263 2.86 1.425 2.86 2.979v2.914m5.03 2.904c-.412-1.656-1.194-2.904-2.86-2.904h-2.148v2.54c0 1.97-1.671 3.631-3.578 3.631h-5.722c-1.564 0-2.86 1.34-2.86 2.91v5.453c0 1.553 1.35 2.464 2.86 2.908 1.811.53 3.552.627 5.722 0 1.44-.418 2.86-1.259 2.86-2.908v-2.91h-5.716 8.582c1.666 0 2.282-1.162 2.86-2.903.6-1.794.574-3.52 0-5.817Z"
        />
        <circle
          cx="13.14"
          cy="7.352"
          r="1.25"
          fill={color || colorCtx || "#000000"}
        />
        <circle
          cx="17.396"
          cy="24.599"
          r="1.25"
          fill={color || colorCtx || "#000000"}
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

Pythonlogo.displayName = "Pythonlogo";

export default Pythonlogo;
