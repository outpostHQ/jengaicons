import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const PictureInPictureFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M28.96 8.283a.5.5 0 0 0-.5-.5h-23a.5.5 0 0 0-.5.5v17a.5.5 0 0 0 .5.5h23a.5.5 0 0 0 .5-.5v-17Zm-1.287 9a.5.5 0 0 0-.5-.5H18.46a.5.5 0 0 0-.5.5v6.989a.5.5 0 0 0 .5.5h8.713a.5.5 0 0 0 .5-.5v-6.989Z"
          clip-rule="evenodd"
        />
      </svg>
    );
  }
);

PictureInPictureFill.displayName = "PictureInPictureFill";

export default PictureInPictureFill;
