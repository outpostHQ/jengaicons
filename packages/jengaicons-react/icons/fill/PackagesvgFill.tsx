import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const PackagesvgFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          fill={color || "#000000"}
          fillRule="evenodd"
          d="m7.272 9.673 9.731 5.43h.015c.03 0 .06 0 .09.003l3.287-1.89-9.921-5.335-3.202 1.792Zm14.195 5.233v4.13a1 1 0 1 0 2 0v-5.28l4.154-2.388v10.915l-9.603 5.373V16.89l3.45-1.984Zm.969-2.864-9.893-5.32 4.355-2.436 9.643 5.396-4.105 2.36Zm-16.26-.69 9.842 5.49V27.79l-9.842-5.507V11.35Z"
          clip-rule="evenodd"
        />
      </svg>
    );
  }
);

PackagesvgFill.displayName = "PackagesvgFill";

export default PackagesvgFill;
