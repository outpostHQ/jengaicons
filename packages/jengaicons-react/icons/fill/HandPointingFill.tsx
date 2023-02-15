import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const HandPointingFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="m11.53 14.766-1.473-.034A2.958 2.958 0 0 0 7.1 17.69v.74c0 5.508 3.406 10.353 9.86 10.353 6.034 0 9.862-4.309 9.862-9.817v-3.988a2.46 2.46 0 0 0-.924-1.924 2.418 2.418 0 0 0-3.506 2.16v1.243a.5.5 0 1 1-1 0v-3.139a1.965 1.965 0 1 0-3.931 0v3.14a.5.5 0 0 1-1 0V7.247a1.965 1.965 0 0 0-3.93 0V18.43a.5.5 0 0 1-1 0v-3.663Z"
          clipRule="evenodd"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

HandPointingFill.displayName = "HandPointingFill";

export default HandPointingFill;
