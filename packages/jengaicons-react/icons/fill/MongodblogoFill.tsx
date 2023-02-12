import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const MongodblogoFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M13.762 7.53c1.082-1.2 2-2.401 2.2-2.659a.059.059 0 0 1 .074 0c.184.258 1.119 1.459 2.2 2.66 9.244 11.033-1.448 18.48-1.448 18.48l-.092.05a60.385 60.385 0 0 1-.275 2.797h-.807s-.201-1.647-.275-2.796l-.091-.069c-.037.017-10.728-7.43-1.486-18.462ZM16 25.84s.477-.378.606-.584v-.017l-.587-12.01c0-.035-.055-.035-.055 0l-.587 12.01v.017c.128.206.623.584.623.584Z"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

MongodblogoFill.displayName = "MongodblogoFill";

export default MongodblogoFill;
