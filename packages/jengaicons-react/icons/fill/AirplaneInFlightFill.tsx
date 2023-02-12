import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const AirplaneInFlightFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          fillRule="evenodd"
          clip-rule="evenodd"
          d="M28.46 19.18H8.96a4 4 0 0 1-4-4v-4.018a.5.5 0 0 1 .5-.5h2.659a.5.5 0 0 1 .406.21l1.476 2.065a.5.5 0 0 0 .407.21h2.541a.5.5 0 0 0 .472-.666l-1.262-3.593a.5.5 0 0 1 .471-.665h2.396a.5.5 0 0 1 .375.169l4.05 4.586a.5.5 0 0 0 .374.169h6.135a3 3 0 0 1 3 3v2.533a.5.5 0 0 1-.5.5ZM9.215 23.343a1 1 0 1 0 0 2h15.49a1 1 0 0 0 0-2H9.215Z"
          fill={color || colorCtx || "#000000"}
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

AirplaneInFlightFill.displayName = "AirplaneInFlightFill";

export default AirplaneInFlightFill;
