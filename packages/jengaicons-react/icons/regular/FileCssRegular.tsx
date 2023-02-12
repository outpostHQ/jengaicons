import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const FileCssRegular = forwardRef<SVGSVGElement, JengaIconProps>(
  (props, ref) => {
    const { size, color } = props;

    return (
      <svg
        style={{ width: size || 32, height: size || 32 }}
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 32 32"
        {...props}
      >
        <path
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4.764 17.484V4h14.631l7.841 7.875v5.609"
        />
        <path
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M19.471 11.799V4.144l7.662 7.655H19.47Z"
        />
        <path
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeWidth="2"
          d="M9.407 21.542H7.992a3.229 3.229 0 0 0-3.228 3.23v0A3.229 3.229 0 0 0 7.992 28h1.415M17.992 21.542h-3.03c-.89 0-1.614.723-1.614 1.615v0c0 .891.723 1.614 1.615 1.614h1.488M26.577 21.542h-3.029c-.892 0-1.614.723-1.614 1.615v0c0 .891.722 1.614 1.614 1.614h1.488M14.848 24.771h1.53c.891 0 1.614.723 1.614 1.615v0c0 .891-.723 1.614-1.614 1.614h-3.03M23.433 24.771h1.53c.891 0 1.614.723 1.614 1.615v0c0 .891-.723 1.614-1.614 1.614h-3.03"
        />
      </svg>
    );
  }
);

FileCssRegular.displayName = "FileCssRegular";

export default FileCssRegular;
