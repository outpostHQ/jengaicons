import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const HouseLineFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M16.192 6.999 7.44 14.687a1 1 0 0 0-.34.752v9.701H4.96a1 1 0 1 0 0 2h24a1 1 0 0 0 0-2h-2.14v-9.695a1 1 0 0 0-.348-.758l-8.97-7.696a1 1 0 0 0-1.31.008Zm3.552 18.141v-4.67a1 1 0 0 0-1-1h-3.723a1 1 0 0 0-1 1v4.67h5.723Z"
          fill={color || colorCtx || "#000000"}
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

HouseLineFill.displayName = "HouseLineFill";

export default HouseLineFill;
