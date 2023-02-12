import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const ImageSquareRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M19.5 14.1c.828 0 1.5-.806 1.5-1.8s-.672-1.8-1.5-1.8-1.5.806-1.5 1.8.672 1.8 1.5 1.8Z"
        />
        <path
          stroke={color || "#000000"}
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 4.5h24v24H4z"
        />
        <path
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="m4.088 22.368 6.65-7.98 6.65 7.98 4.504-5.406 5.935 7.122"
        />
      </svg>
    );
  }
);

ImageSquareRegular.displayName = "ImageSquareRegular";

export default ImageSquareRegular;
