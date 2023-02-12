import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const FilmScriptFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          fill={color || "#000000"}
          fillRule="evenodd"
          d="M26.96 5.783a1 1 0 0 0-1-1h-18a1 1 0 0 0-1 1v22a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-22Zm-14 4.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm-1.5-5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
          clip-rule="evenodd"
        />
      </svg>
    );
  }
);

FilmScriptFill.displayName = "FilmScriptFill";

export default FilmScriptFill;
