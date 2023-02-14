import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const CheckSquareOffsetFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M7.73 6.052a1 1 0 0 0-1 1v10a1 1 0 1 0 2 0v-9H25.19v16.462h-9a1 1 0 1 0 0 2h10a1 1 0 0 0 1-1V7.052a1 1 0 0 0-1-1H7.729Zm9.937 13.246a1 1 0 0 0-1.414-1.414l-5.447 5.446-2.37-2.37a1 1 0 0 0-1.414 1.415L10.1 25.45a1 1 0 0 0 1.415 0l6.153-6.153Z"
          clip-rule="evenodd"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

CheckSquareOffsetFill.displayName = "CheckSquareOffsetFill";

export default CheckSquareOffsetFill;
