import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const CookieRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          stroke={color || colorCtx || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M28 15.934a11.962 11.962 0 0 1-3.522 8.566c-4.618 4.61-12.163 4.662-16.841.113a12 12 0 0 1 8.435-20.605 1.002 1.002 0 0 1 .976 1.22 4 4 0 0 0 3.857 4.88 1.003 1.003 0 0 1 .995.994 4 4 0 0 0 4.88 3.858 1.002 1.002 0 0 1 1.22.974v0Z"
        />
        <path
          fill={color || colorCtx || "#000000"}
          d="M19.5 23.008a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM11.5 22.008a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM10.5 15.008a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM17 17.008a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

CookieRegular.displayName = "CookieRegular";

export default CookieRegular;
