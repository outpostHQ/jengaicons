import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const SunHorizonFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 32 32"
      >
        {(!!altCtx || !!alt) && <title>{alt || altCtx}</title>}

        <path
          fill={color || colorCtx || "#000000"}
          fillRule="evenodd"
          d="M11.98 7.315a1 1 0 0 1 1.307.539l.825 1.982a1 1 0 0 1-1.847.769l-.825-1.982a1 1 0 0 1 .54-1.308Zm-7.033 7.032a1 1 0 0 1 1.308-.539l1.982.825a1 1 0 1 1-.769 1.846l-1.982-.825a1 1 0 0 1-.539-1.307Zm23.486 1.307a1 1 0 1 0-.768-1.846l-1.982.825a1 1 0 1 0 .768 1.846l1.982-.825Zm-6.492-8.339a1 1 0 0 1 .539 1.308l-.825 1.982a1 1 0 0 1-1.847-.769l.825-1.982a1 1 0 0 1 1.308-.539ZM4.96 20.042a1 1 0 1 0 0 2h24a1 1 0 0 0 0-2h-5.613a6.43 6.43 0 1 0-12.775 0H4.96Zm2.429 5.286a1 1 0 0 1 1-1h17.143a1 1 0 1 1 0 2H8.389a1 1 0 0 1-1-1Z"
          clip-rule="evenodd"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

SunHorizonFill.displayName = "SunHorizonFill";

export default SunHorizonFill;
