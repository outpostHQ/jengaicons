import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const BackspaceRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="m20.598 13.126-5.555 5.556M20.598 18.681l-5.555-5.555M28 6.725H9.714L4 15.956l5.714 9.319H28V6.725Z"
        />
      </svg>
    );
  }
);

BackspaceRegular.displayName = "BackspaceRegular";

export default BackspaceRegular;
