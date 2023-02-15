import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const MathOperationsFill = forwardRef<SVGSVGElement, JengaIconProps>(
  (props, ref) => {
    const { size, color, alt, children, mirrored, style } = props;

    const {
      alt: altCtx,
      children: childrenCtx,
      color: colorCtx,
      mirrored: mirroredCtx,
      size: sizeCtx,
      style: styleCtx,
    } = useContext(JengaIconContext);

    return (
      <svg
        width={size || sizeCtx || 32}
        height={size || sizeCtx || 32}
        transform={mirrored || mirroredCtx ? "scale(-1, 1)" : undefined}
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
          fill={color || colorCtx || "#000000"}
          fillRule="evenodd"
          d="M26.758 6.03a1 1 0 0 1 0 1.415l-2.02 2.02 2.02 2.02a1 1 0 1 1-1.414 1.414l-2.02-2.02-2.02 2.02a1 1 0 0 1-1.414-1.414l2.02-2.02-2.02-2.02a1 1 0 1 1 1.414-1.415l2.02 2.02 2.02-2.02a1 1 0 0 1 1.414 0ZM6.96 8.465a1 1 0 0 0 0 2h7.273a1 1 0 1 0 0-2H6.96Zm3.637 9.09a1 1 0 0 1 1 1v2.637h2.636a1 1 0 1 1 0 2h-2.636v2.636a1 1 0 1 1-2 0v-2.636H6.96a1 1 0 1 1 0-2h2.637v-2.636a1 1 0 0 1 1-1Zm8.09 2.826a1 1 0 0 1 1-1h7.273a1 1 0 1 1 0 2h-7.273a1 1 0 0 1-1-1Zm1 2.622a1 1 0 1 0 0 2h7.273a1 1 0 1 0 0-2h-7.273Z"
          clipRule="evenodd"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

MathOperationsFill.displayName = "MathOperationsFill";

export default MathOperationsFill;
