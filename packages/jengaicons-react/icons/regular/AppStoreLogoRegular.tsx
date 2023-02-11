import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const AppStoreLogoRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="m18.146 14.165 7.085 11.989M13.23 5.846 16 10.531M7.865 24.308 6.77 26.154M18.77 5.846l-8.724 14.77M21.954 20.616H28M4 20.616h13.673"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);

AppStoreLogoRegular.displayName = "AppStoreLogoRegular";

export default AppStoreLogoRegular;
