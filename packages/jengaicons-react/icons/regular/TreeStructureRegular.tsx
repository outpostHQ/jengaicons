import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const TreeStructureRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinejoin="round"
          d="M20.32 5.44H28v7.68h-7.68zM20.32 18.88H28v7.68h-7.68zM4 12.64h6.72v6.72H4z"
        />
        <path
          d="M11.33 16h4.19M19.917 9.245h-3.994v13.469h3.994"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);

TreeStructureRegular.displayName = "TreeStructureRegular";

export default TreeStructureRegular;
