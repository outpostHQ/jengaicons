import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const ChalkboardSimpleFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M7.674 8.14a1 1 0 0 0-1 1v14.286H4.96a1 1 0 1 0 0 2h24a1 1 0 0 0 0-2h-1.714V9.14a1 1 0 0 0-1-1H7.674ZM23.96 23.426v-2.429a1 1 0 0 0-1-1h-6.857a1 1 0 0 0-1 1v2.429h2v-.429a1 1 0 0 1 1-1h2.857a1 1 0 0 1 1 1v.429h2Z"
          clip-rule="evenodd"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

ChalkboardSimpleFill.displayName = "ChalkboardSimpleFill";

export default ChalkboardSimpleFill;
