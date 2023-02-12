import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const AnchorSimpleFill = forwardRef<SVGSVGElement, JengaIconProps>(
  (props, ref) => {
    const { size, color, alt, children, mirrored } = props;

    const {
      alt: altCtx,
      children: childrenCtx,
      color: colorCtx,
      mirrored: mirroredCtx,
      size: sizeCtx,
    } = useContext(JengaIconContext);

    return (
      <svg
        width={size || sizeCtx || 32}
        height={size || sizeCtx || 32}
        transform={mirrored || mirroredCtx ? "scale(-1, 1)" : undefined}
        ref={ref}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
      >
        {(!!altCtx || !!alt) && <title>{alt || altCtx}</title>}

        <path
          fillRule="evenodd"
          clip-rule="evenodd"
          d="M19.96 8.283a3.001 3.001 0 0 1-2.014 2.834c.01.054.014.11.014.166v14.954a11 11 0 0 0 9.954-9.954H25.96a1 1 0 1 1 0-2h2.5c.817 0 1.525.67 1.488 1.542a13 13 0 0 1-25.977 0 1.484 1.484 0 0 1 1.489-1.542h2.5a1 1 0 1 1 0 2H6.005a11 11 0 0 0 9.955 9.954V11.283c0-.057.004-.112.013-.166a3.001 3.001 0 1 1 3.987-2.834Z"
          fill={color || colorCtx || "#000000"}
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

AnchorSimpleFill.displayName = "AnchorSimpleFill";

export default AnchorSimpleFill;
