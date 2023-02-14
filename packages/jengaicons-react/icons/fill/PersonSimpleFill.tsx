import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const PersonSimpleFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M19.83 7.667a2.884 2.884 0 1 1-5.767 0 2.884 2.884 0 0 1 5.768 0Zm5.089 9.115a24.267 24.267 0 0 0-6.959-1.364v4.392c.044.04.086.083.126.13l7.1 8.188a1 1 0 1 1-1.51 1.31l-6.728-7.758-6.913 7.768a1 1 0 1 1-1.494-1.33l7.291-8.193a1.52 1.52 0 0 1 .128-.128V15.42c-2.797.123-5.2.742-6.959 1.363-.98.346-1.757.691-2.283.947a14.547 14.547 0 0 0-.741.387l-.033.019-.006.003a1 1 0 0 1-1.029-1.715l.515.858-.514-.858.002-.002.005-.002.015-.01.05-.028a16.508 16.508 0 0 1 .86-.45c.586-.285 1.432-.66 2.494-1.035 2.12-.749 5.119-1.5 8.624-1.5 3.505 0 6.504.751 8.625 1.5 1.061.374 1.907.75 2.493 1.035a16.508 16.508 0 0 1 .91.479l.015.009.005.002.002.001-.514.858.515-.857a1 1 0 0 1-1.028 1.716l-.001-.001-.006-.003-.033-.02a14.566 14.566 0 0 0-.74-.387 21.986 21.986 0 0 0-2.284-.947Z"
          clip-rule="evenodd"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

PersonSimpleFill.displayName = "PersonSimpleFill";

export default PersonSimpleFill;
