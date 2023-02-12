import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const TrainRegionalFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="m16.878 15.367 10.003-1.664-2.776-8.723a1 1 0 0 0-.953-.697H10.768a1 1 0 0 0-.953.697l-2.772 8.713 9.835 1.674Zm1.082 1.847 8.732-1.452-2.587 8.132a1 1 0 0 1-.953.697h-1.25l2.32 3.092a1 1 0 0 1-1.6 1.2l-3.22-4.292H17.96v-7.377Zm-2 .025v7.352h-1.442l-3.22 4.292a1 1 0 1 1-1.6-1.2l2.32-3.092h-1.25a1 1 0 0 1-.953-.697l-2.59-8.141 8.735 1.486Zm-3.692-6.495a1 1 0 0 1 1-1h7.384a1 1 0 1 1 0 2h-7.384a1 1 0 0 1-1-1Z"
          clip-rule="evenodd"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

TrainRegionalFill.displayName = "TrainRegionalFill";

export default TrainRegionalFill;
