import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const BellSimpleFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M6.617 22.555c-.218.34.026.8.431.8h19.823c.405 0 .65-.46.432-.8-.777-1.215-2.161-3.567-2.469-5.33a11.313 11.313 0 0 1-.122-2.595C25 9.694 21.904 4.283 16.96 4.283S8.919 9.694 9.208 14.63c.052.891.022 1.768-.123 2.595-.307 1.762-1.692 4.115-2.468 5.33Zm6.343 4.728a1 1 0 1 0 0 2h8a1 1 0 0 0 0-2h-8Z"
          clip-rule="evenodd"
        />
      </svg>
    );
  }
);

BellSimpleFill.displayName = "BellSimpleFill";

export default BellSimpleFill;
