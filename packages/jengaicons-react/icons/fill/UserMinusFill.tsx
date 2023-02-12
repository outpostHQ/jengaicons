import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const UserMinusFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M12.173 18.578a5.401 5.401 0 1 0 0-10.803 5.401 5.401 0 0 0 0 10.803Zm10.043.686a1 1 0 0 1 1-1h5.744a1 1 0 0 1 0 2h-5.744a1 1 0 0 1-1-1Zm-17.188 5.53a7.215 7.215 0 0 1 14.29 0c.075.547-.38.997-.932.997H5.96c-.552 0-1.007-.45-.932-.997Z"
          clip-rule="evenodd"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

UserMinusFill.displayName = "UserMinusFill";

export default UserMinusFill;
