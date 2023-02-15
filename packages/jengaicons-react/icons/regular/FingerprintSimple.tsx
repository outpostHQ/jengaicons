import * as React from "react";
import { forwardRef, useContext } from "react";
import type { Context } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconRegularProps } from "../../src/base";

const FingerprintSimple = forwardRef<SVGSVGElement, JengaIconRegularProps>(
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
          d="M22.26 16.18a28.616 28.616 0 0 1-2.144 10.906M20.798 12.354a5.74 5.74 0 0 0-10.017 3.827 17.141 17.141 0 0 1-2.15 8.338"
        />
        <path
          stroke={color || colorCtx || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={weight || weightCtx || "2"}
          d="M12.694 5.354A11.488 11.488 0 0 1 28 16.181a34.552 34.552 0 0 1-.853 7.653M4 20.964a11.437 11.437 0 0 0 1.04-4.784 11.451 11.451 0 0 1 3.827-8.556M14.437 25.747a22.775 22.775 0 0 1-.785 1.552M16.52 16.18a23.003 23.003 0 0 1-.724 5.74"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

FingerprintSimple.displayName = "FingerprintSimple";

export default FingerprintSimple;
