import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const PhoneSlashFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="m8.25 6.703 17.42 19.16"
        />
        <path
          fill={color || colorCtx || "#000000"}
          d="M15.544 14.725a9.145 9.145 0 0 0-1.603.401.862.862 0 0 0-.557.649l-.643 3.212a.871.871 0 0 1-.53.638l-5.15 2.06a.869.869 0 0 1-1.009-.27 5.226 5.226 0 0 1 .439-6.892 14.745 14.745 0 0 1 5.655-3.536M16.146 10.209a14.77 14.77 0 0 1 11.284 4.314 5.227 5.227 0 0 1 .438 6.893.868.868 0 0 1-1.008.27l-.44-.177"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

PhoneSlashFill.displayName = "PhoneSlashFill";

export default PhoneSlashFill;
