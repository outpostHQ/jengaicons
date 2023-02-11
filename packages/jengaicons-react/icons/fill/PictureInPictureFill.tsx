import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const PictureInPictureFill = forwardRef<SVGSVGElement, JengaIconProps>(
  (props, ref) => {
    const { size = 32 } = props;

    return (
      <svg
        style={{ width: size, height: size }}
        ref={ref}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        {...props}
      >
        <path
          fillRule="evenodd"
          clip-rule="evenodd"
          d="M28.96 8.283a.5.5 0 0 0-.5-.5h-23a.5.5 0 0 0-.5.5v17a.5.5 0 0 0 .5.5h23a.5.5 0 0 0 .5-.5v-17Zm-1.287 9a.5.5 0 0 0-.5-.5H18.46a.5.5 0 0 0-.5.5v6.989a.5.5 0 0 0 .5.5h8.713a.5.5 0 0 0 .5-.5v-6.989Z"
          fill="#1C1B1F"
        />
      </svg>
    );
  }
);

PictureInPictureFill.displayName = "PictureInPictureFill";

export default PictureInPictureFill;
