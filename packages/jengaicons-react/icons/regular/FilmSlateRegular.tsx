import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const FilmSlateRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="m16.955 6.88 6.3 3.64M8.02 9.285l6.287 3.639"
        />
        <path
          stroke={color || "#000000"}
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5.371 15.315H28v12.343H5.371zM4 10.199l21.858-5.857 1.37 5.117-21.857 5.856L4 10.2Z"
        />
      </svg>
    );
  }
);

FilmSlateRegular.displayName = "FilmSlateRegular";

export default FilmSlateRegular;
