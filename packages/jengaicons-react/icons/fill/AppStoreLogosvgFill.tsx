import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const AppStoreLogosvgFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="m19.106 14.59 7.085 11.988M14.19 6.27l2.77 4.685M8.826 24.732l-1.097 1.846M19.73 6.27l-8.724 14.77M22.914 21.04h6.046M4.96 21.04h13.673"
        />
      </svg>
    );
  }
);

AppStoreLogosvgFill.displayName = "AppStoreLogosvgFill";

export default AppStoreLogosvgFill;
