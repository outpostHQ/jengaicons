import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const ListChecksRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M15.973 16H26M15.973 8.708H26M15.973 23.293H26M6 8.807l1.95 1.95 4.1-4.1M6 16.1l1.95 1.95 4.1-4.1M6 23.392l1.95 1.95 4.1-4.1"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);

ListChecksRegular.displayName = "ListChecksRegular";

export default ListChecksRegular;
