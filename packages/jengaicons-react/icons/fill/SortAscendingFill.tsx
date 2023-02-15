import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const SortAscendingFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M7.729 7.461a1 1 0 0 0 0 2h14.774a1 1 0 1 0 0-2H7.73Zm0 6.953a1 1 0 1 0 0 2h7.822a1 1 0 1 0 0-2H7.729Zm-1 7.952a1 1 0 0 1 1-1h6.084a1 1 0 1 1 0 2H7.729a1 1 0 0 1-1-1Zm15.774-9.69a1 1 0 0 1 1 1v8.015l1.98-1.98a1 1 0 0 1 1.415 1.414l-3.687 3.687a.995.995 0 0 1-1.107.21 1 1 0 0 1-.314-.216l-3.68-3.681a1 1 0 1 1 1.413-1.415l1.98 1.98v-8.014a1 1 0 0 1 1-1Z"
          clipRule="evenodd"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

SortAscendingFill.displayName = "SortAscendingFill";

export default SortAscendingFill;
