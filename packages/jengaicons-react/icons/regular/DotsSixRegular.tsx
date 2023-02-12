import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const DotsSixRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M16 14a2.77 2.77 0 1 0 0-5.538A2.77 2.77 0 0 0 16 14ZM6.77 14a2.77 2.77 0 1 0 0-5.538 2.77 2.77 0 0 0 0 5.538ZM25.23 14a2.77 2.77 0 1 0 0-5.538 2.77 2.77 0 0 0 0 5.538ZM16 23.538A2.77 2.77 0 1 0 16 18a2.77 2.77 0 0 0 0 5.538ZM6.77 23.538a2.77 2.77 0 1 0 0-5.538 2.77 2.77 0 0 0 0 5.538ZM25.23 23.538a2.77 2.77 0 1 0 0-5.538 2.77 2.77 0 0 0 0 5.538Z"
          stroke={color || colorCtx || "#000000"}
          strokeWidth="2"
          strokeMiterlimit="10"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

DotsSixRegular.displayName = "DotsSixRegular";

export default DotsSixRegular;
