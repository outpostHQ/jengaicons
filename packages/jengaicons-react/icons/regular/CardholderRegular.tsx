import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const CardholderRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M4 11h24"
          stroke={color || colorCtx || "#000000"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4 15v-1a1 1 0 0 0-1 1h1Zm7.957 0 1-.019a1 1 0 0 0-1-.981v1ZM4 25H3a1 1 0 0 0 1 1v-1Zm23.96 0v1a1 1 0 0 0 1-1h-1Zm0-10h1a1 1 0 0 0-1-1v1Zm-8.01 0v-1a1 1 0 0 0-1 .981l1 .019ZM4 16h7.957v-2H4v2Zm1 9V15H3v10h2Zm22.96-1H4v2h23.96v-2Zm-1-9v10h2V15h-2Zm-7.01 1h8.01v-2h-8.01v2Zm-1-1.019c-.005.25-.171.615-.722.964-.54.342-1.34.585-2.275.585v2c1.257 0 2.44-.322 3.345-.895.893-.566 1.63-1.466 1.651-2.616l-2-.038Zm-2.997 1.549c-.934 0-1.735-.243-2.274-.585-.552-.349-.718-.714-.722-.964l-2 .038c.022 1.15.758 2.05 1.651 2.616.904.573 2.088.895 3.345.895v-2Z"
          fill={color || colorCtx || "#000000"}
        />
        <path
          stroke={color || colorCtx || "#000000"}
          strokeWidth="2"
          strokeLinejoin="round"
          d="M4 7h24v18H4z"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

CardholderRegular.displayName = "CardholderRegular";

export default CardholderRegular;
