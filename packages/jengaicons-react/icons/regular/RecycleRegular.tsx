import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const RecycleRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="m19 29-3-3.001L19 23M24.328 9.4l-1.098 4.098-4.098-1.099M9.87 17.596l-1.1-4.098-4.097 1.098"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 26h10.997a2 2 0 0 0 1.731-3.003l-2.994-5.172M8.77 13.498l-5.498 9.5a2 2 0 0 0 1.73 3.001H11M23.23 13.498l-5.499-9.5a2 2 0 0 0-3.462 0L11.275 9.17"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);

RecycleRegular.displayName = "RecycleRegular";

export default RecycleRegular;
