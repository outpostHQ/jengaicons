import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const BitbucketLogoFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M27.994 4.72a.5.5 0 0 0-.494-.579h-23a.5.5 0 0 0-.494.58l3.372 20.812a.5.5 0 0 0 .494.42h16.316a.5.5 0 0 0 .494-.421L27.994 4.72Zm-15.43 7.507a.5.5 0 0 1 .491-.597h5.953a.5.5 0 0 1 .492.587l-1.038 5.835a.5.5 0 0 1-.492.413h-3.762a.5.5 0 0 1-.49-.403l-1.153-5.835Z"
          clip-rule="evenodd"
        />
      </svg>
    );
  }
);

BitbucketLogoFill.displayName = "BitbucketLogoFill";

export default BitbucketLogoFill;
