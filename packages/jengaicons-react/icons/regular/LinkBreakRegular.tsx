import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const LinkBreakRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M11.2 7.6V4M20.8 28v-3.6M7.6 11.2H4M28 20.8h-3.6M7.454 16.06l-1.697 1.697a6 6 0 0 0 8.486 8.486l1.697-1.697M24.546 15.94l1.697-1.697a6 6 0 0 0-8.485-8.486L16.06 7.454"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

LinkBreakRegular.displayName = "LinkBreakRegular";

export default LinkBreakRegular;
