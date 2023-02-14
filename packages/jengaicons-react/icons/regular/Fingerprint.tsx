import * as React from "react";
import { forwardRef, useContext } from "react";
import type { Context, SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconRegularProps } from "../../src/base";

const Fingerprint = forwardRef<SVGSVGElement, JengaIconRegularProps>(
  (props, ref) => {
    const { size, color, alt, children, mirrored, weight } = props;

    const {
      alt: altCtx,
      children: childrenCtx,
      color: colorCtx,
      mirrored: mirroredCtx,
      size: sizeCtx,
      weight: weightCtx,
    } = useContext(JengaIconContext as Context<JengaIconRegularProps>);

    return (
      <svg
        width={size || sizeCtx || 32}
        height={size || sizeCtx || 32}
        transform={mirrored || mirroredCtx ? "scale(-1, 1)" : undefined}
        strokeWidth={weight || weightCtx || 2}
        ref={ref}
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
          d="M6.935 22.953a15.493 15.493 0 0 0 1.618-6.917 7.764 7.764 0 0 1 2.917-6.072M16.332 16.036a23.232 23.232 0 0 1-2.914 11.301"
        />
        <path
          stroke={color || colorCtx || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={weight || weightCtx || "2"}
          d="M12.443 16.036a3.89 3.89 0 0 1 7.778 0 27.12 27.12 0 0 1-2.585 11.596"
        />
        <path
          stroke={color || colorCtx || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={weight || weightCtx || "2"}
          d="M27.339 22.842c.44-2.242.662-4.521.661-6.806a11.668 11.668 0 0 0-23.336 0A11.65 11.65 0 0 1 4 19.926"
        />
        <path
          stroke={color || colorCtx || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={weight || weightCtx || "2"}
          d="M12.054 19.925a19.319 19.319 0 0 1-2.202 5.815M15.36 8.318a7.785 7.785 0 0 1 8.75 7.718c0 1.3-.08 2.6-.24 3.89M23.13 23.815c-.185.72-.395 1.428-.63 2.127"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

Fingerprint.displayName = "Fingerprint";

export default Fingerprint;
