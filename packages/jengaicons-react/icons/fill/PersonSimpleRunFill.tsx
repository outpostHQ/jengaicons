import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const PersonSimpleRunFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M23.2 7.663a2.88 2.88 0 1 1-5.76 0 2.88 2.88 0 0 1 5.76 0Zm-5.947 6.378c-1.324-1.176-2.846-1.581-4.277-1.593-1.575-.013-2.998.455-3.792.87a1 1 0 0 1-.927-1.771c1.049-.549 2.794-1.115 4.736-1.099 1.967.016 4.174.633 6.016 2.504 2.891 2.938 7.042 2.812 8.738 2.369a1 1 0 0 1 .506 1.935c-1.829.478-5.938.69-9.343-1.763a20.431 20.431 0 0 1-1.945 4.185c1.106.355 2.473.94 3.721 1.89 1.9 1.445 3.514 3.733 3.514 7.215a1 1 0 0 1-2 0c0-2.758-1.238-4.492-2.724-5.623-1.253-.953-2.688-1.477-3.717-1.753-2.116 2.663-5.36 4.989-9.939 4.531a1 1 0 1 1 .2-1.99c3.718.372 6.378-1.492 8.232-3.86a14.417 14.417 0 0 0 .322-.428c1.541-2.123 2.389-4.462 2.68-5.619Z"
          fill={color || colorCtx || "#000000"}
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

PersonSimpleRunFill.displayName = "PersonSimpleRunFill";

export default PersonSimpleRunFill;
