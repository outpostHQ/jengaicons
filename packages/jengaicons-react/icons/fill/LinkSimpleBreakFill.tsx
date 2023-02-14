import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const LinkSimpleBreakFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M21.813 5.283c-1.63 0-3.194.647-4.347 1.8l-3.033 3.033a1 1 0 0 0 1.414 1.414l3.033-3.033a4.147 4.147 0 0 1 5.866 5.865l-3.034 3.033a1 1 0 0 0 1.415 1.415l3.033-3.033a6.148 6.148 0 0 0-4.347-10.494Zm-9.606 9.887a1 1 0 0 0-1.414-1.414L7.76 16.79a6.147 6.147 0 0 0 8.693 8.694l3.034-3.033a1 1 0 0 0-1.414-1.414l-3.034 3.033a4.148 4.148 0 0 1-5.865-5.866l3.033-3.033Z"
          clip-rule="evenodd"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

LinkSimpleBreakFill.displayName = "LinkSimpleBreakFill";

export default LinkSimpleBreakFill;
