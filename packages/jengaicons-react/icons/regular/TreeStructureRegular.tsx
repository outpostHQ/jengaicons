import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const TreeStructureRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          strokeLinejoin="round"
          strokeWidth="2"
          d="M20.32 5.44H28v7.68h-7.68zM20.32 18.88H28v7.68h-7.68zM4 12.64h6.72v6.72H4z"
        />
        <path
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M11.33 16h4.19M19.917 9.245h-3.994v13.469h3.994"
        />
      </svg>
    );
  }
);

TreeStructureRegular.displayName = "TreeStructureRegular";

export default TreeStructureRegular;
