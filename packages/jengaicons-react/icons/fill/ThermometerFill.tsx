import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const ThermometerFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M10.618 7.646v10.589a5.736 5.736 0 0 0-2.61 4.816 5.732 5.732 0 1 0 8.843-4.816V7.645c0-1.58-1.396-2.862-3.117-2.862-1.72 0-3.116 1.282-3.116 2.863Zm4.128 4.852a1 1 0 1 0-2 0v7.734a3.144 3.144 0 0 0 1 6.123 3.143 3.143 0 0 0 1-6.123v-7.734Zm-2.144 10.715a1.143 1.143 0 1 1 2.287 0 1.143 1.143 0 0 1-2.287 0ZM22.46 11.64a1.143 1.143 0 1 1 2.286 0 1.143 1.143 0 0 1-2.286 0Zm1.143-3.142a3.143 3.143 0 1 0 0 6.286 3.143 3.143 0 0 0 0-6.286Z"
          clipRule="evenodd"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

ThermometerFill.displayName = "ThermometerFill";

export default ThermometerFill;
