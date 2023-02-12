import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const FilmStripFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M11.96 7.783h4v2h-4v-2Zm-6 0h4v2h-4v-2Zm4 16h-4v2h4v-2Zm2 0v2h4v-2h-4Zm6 0v2h4v-2h-4Zm6 0v2h4v-2h-4Zm0-14h4v-2h-4v2Zm-2 0v-2h-4v2h4Zm7-4h-24a1 1 0 0 0-1 1v20a1 1 0 0 0 1 1h24a1 1 0 0 0 1-1v-20a1 1 0 0 0-1-1Z"
          clip-rule="evenodd"
        />
      </svg>
    );
  }
);

FilmStripFill.displayName = "FilmStripFill";

export default FilmStripFill;
