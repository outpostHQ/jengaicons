import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const FootballRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M23.317 23.317c-5.372 5.372-12.83 4.944-16.417 4.337A3.115 3.115 0 0 1 4.346 25.1C3.74 21.514 3.311 14.055 8.683 8.683 14.055 3.31 21.513 3.739 25.1 4.346A3.115 3.115 0 0 1 27.653 6.9c.608 3.586 1.036 11.045-4.336 16.417ZM20.14 11.86l-8.28 8.28M15.571 12.645l3.784 3.784M12.644 15.571l3.784 3.784M18.616 4.129l9.255 9.255M4.129 18.616l9.255 9.256"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);

FootballRegular.displayName = "FootballRegular";

export default FootballRegular;
