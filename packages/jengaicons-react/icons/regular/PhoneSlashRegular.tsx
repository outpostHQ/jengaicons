import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const PhoneSlashRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="m7.29 6.42 17.42 19.16M14.584 14.443a9.134 9.134 0 0 0-1.603.4.864.864 0 0 0-.557.649l-.642 3.212a.87.87 0 0 1-.531.638l-5.15 2.06a.868.868 0 0 1-1.009-.269 5.227 5.227 0 0 1 .439-6.893 14.746 14.746 0 0 1 5.655-3.536M15.186 9.926A14.768 14.768 0 0 1 26.47 14.24a5.227 5.227 0 0 1 .439 6.893.868.868 0 0 1-1.008.27l-.441-.177"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);

PhoneSlashRegular.displayName = "PhoneSlashRegular";

export default PhoneSlashRegular;
