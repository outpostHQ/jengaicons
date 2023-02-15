import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const EqualizerFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M22.743 8.435a1 1 0 0 1 1-1h5.217a1 1 0 1 1 0 2h-5.217a1 1 0 0 1-1-1ZM4.96 11.61a1 1 0 1 0 0 2h5.217a1 1 0 0 0 0-2H4.96Zm0 4.174a1 1 0 1 0 0 2h5.217a1 1 0 0 0 0-2H4.96Zm-1 5.174a1 1 0 0 1 1-1h5.217a1 1 0 0 1 0 2H4.96a1 1 0 0 1-1-1Zm1 3.174a1 1 0 1 0 0 2h5.217a1 1 0 0 0 0-2H4.96Zm8.391-7.348a1 1 0 0 1 1-1h5.217a1 1 0 1 1 0 2h-5.217a1 1 0 0 1-1-1Zm1 3.174a1 1 0 1 0 0 2h5.217a1 1 0 1 0 0-2h-5.217Zm-1 5.174a1 1 0 0 1 1-1h5.217a1 1 0 1 1 0 2h-5.217a1 1 0 0 1-1-1Zm10.392-13.522a1 1 0 1 0 0 2h5.217a1 1 0 1 0 0-2h-5.217Zm0 4.174a1 1 0 1 0 0 2h5.217a1 1 0 0 0 0-2h-5.217Zm-1 5.174a1 1 0 0 1 1-1h5.217a1 1 0 1 1 0 2h-5.217a1 1 0 0 1-1-1Zm1 3.174a1 1 0 1 0 0 2h5.217a1 1 0 0 0 0-2h-5.217Z"
          clipRule="evenodd"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

EqualizerFill.displayName = "EqualizerFill";

export default EqualizerFill;
