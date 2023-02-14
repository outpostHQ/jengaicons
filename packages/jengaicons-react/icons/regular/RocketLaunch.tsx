import * as React from "react";
import { forwardRef, useContext } from "react";
import type { Context } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconRegularProps } from "../../src/base";

const RocketLaunch = forwardRef<SVGSVGElement, JengaIconRegularProps>(
  (props, ref) => {
    const { size, color, alt, children, mirrored, weight } = props;

    const {
      alt: altCtx,
      children: childrenCtx,
      color: colorCtx,
      mirrored: mirroredCtx,
      size: sizeCtx,
      weight: weightCtx,
    } = useContext(JengaIconContext as Context<JengaIconRegularProps>);

    return (
      <svg
        width={size || sizeCtx || 32}
        height={size || sizeCtx || 32}
        transform={mirrored || mirroredCtx ? "scale(-1, 1)" : undefined}
        strokeWidth={weight || weightCtx || 2}
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
          strokeWidth={weight || weightCtx || "2"}
          d="m18.385 8.551-7.846 7.845 5.138 5.137 7.845-7.845c2.476-2.588 2.328-5.753 1.945-7.011-3.355-1.093-6.12.794-7.082 1.874ZM11.942 23.45c-.982 1.062-3.603 3.091-6.234 2.723-.116-.99.276-3.616 2.77-6.186M16.5 10.283H8.81l-4.394 4.394 6.403 1.287"
        />
        <path
          stroke={color || colorCtx || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={weight || weightCtx || "2"}
          d="M21.645 15.553v7.69l-4.394 4.394-1.286-6.403"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

RocketLaunch.displayName = "RocketLaunch";

export default RocketLaunch;
