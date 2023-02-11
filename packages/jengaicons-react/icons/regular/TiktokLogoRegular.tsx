import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const TiktokLogoRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M20.898 13.549a11.702 11.702 0 0 0 6.858 2.206v-4.898A6.857 6.857 0 0 1 20.898 4H16v15.674a3.428 3.428 0 1 1-4.898-3.1v-5.098a8.327 8.327 0 1 0 9.796 8.197V13.55Z"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);

TiktokLogoRegular.displayName = "TiktokLogoRegular";

export default TiktokLogoRegular;
