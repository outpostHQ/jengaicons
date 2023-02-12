import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const FileCssRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M4.764 17.484V4h14.631l7.841 7.875v5.609"
          stroke={color || colorCtx || "#000000"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M19.471 11.799V4.144l7.662 7.655H19.47Z"
          stroke={color || colorCtx || "#000000"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.407 21.542H7.992a3.229 3.229 0 0 0-3.228 3.23v0A3.229 3.229 0 0 0 7.992 28h1.415M17.992 21.542h-3.03c-.89 0-1.614.723-1.614 1.615v0c0 .891.723 1.614 1.615 1.614h1.488M26.577 21.542h-3.029c-.892 0-1.614.723-1.614 1.615v0c0 .891.722 1.614 1.614 1.614h1.488M14.848 24.771h1.53c.891 0 1.614.723 1.614 1.615v0c0 .891-.723 1.614-1.614 1.614h-3.03M23.433 24.771h1.53c.891 0 1.614.723 1.614 1.615v0c0 .891-.723 1.614-1.614 1.614h-3.03"
          stroke={color || colorCtx || "#000000"}
          strokeWidth="2"
          strokeLinecap="round"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

FileCssRegular.displayName = "FileCssRegular";

export default FileCssRegular;
