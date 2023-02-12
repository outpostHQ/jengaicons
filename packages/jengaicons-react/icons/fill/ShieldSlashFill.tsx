import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const ShieldSlashFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M4.8 3.57a1 1 0 0 1 1.415.011l22.7 23.06a1 1 0 1 1-1.425 1.404l-3.637-3.695c-1.474 1.368-3.385 2.513-5.972 3.728a.99.99 0 0 1-.874-.018c-6.727-3.483-9.458-6.012-10.53-12.546a.998.998 0 0 1-.013-.16V6.685l-1.674-1.7A1 1 0 0 1 4.8 3.57Zm23.617 11.738V6.223a1 1 0 0 0-1-1h-13.82l13.016 15.42c.099-.21.368-.83.49-1.112.478-1.151.892-2.46 1.283-3.975a.99.99 0 0 0 .032-.248Z"
          clip-rule="evenodd"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

ShieldSlashFill.displayName = "ShieldSlashFill";

export default ShieldSlashFill;
