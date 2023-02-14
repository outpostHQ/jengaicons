import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const AstrologoFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M20.548 5.026c.198.243.299.572.5 1.228l4.413 14.348a18.487 18.487 0 0 0-5.275-1.768l-2.873-9.61a.373.373 0 0 0-.358-.265.373.373 0 0 0-.36.266l-2.837 9.604c-1.879.324-3.66.93-5.299 1.77l4.434-14.348c.203-.656.304-.983.502-1.226.175-.215.402-.381.66-.484.293-.117.64-.117 1.332-.117h3.167c.693 0 1.04 0 1.333.117.258.104.486.27.66.485ZM21.076 21.284c-.728.616-2.18 1.036-3.852 1.036-2.052 0-3.772-.633-4.229-1.483-.163.487-.2 1.045-.2 1.402 0 0-.107 1.75 1.123 2.967a1.15 1.15 0 0 1 1.156-1.144c1.094 0 1.093.945 1.092 1.712v.068c0 1.164.718 2.162 1.74 2.582a2.328 2.328 0 0 1-.238-1.028c0-1.11.659-1.524 1.424-2.004.609-.382 1.285-.807 1.751-1.659a3.111 3.111 0 0 0 .232-2.449Z"
          clip-rule="evenodd"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

AstrologoFill.displayName = "AstrologoFill";

export default AstrologoFill;
