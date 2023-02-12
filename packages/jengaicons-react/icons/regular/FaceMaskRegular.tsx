import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const FaceMaskRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12.172 14.755h7.655M12.172 17.817h7.655"
        />
        <path
          stroke={color || "#000000"}
          strokeLinejoin="round"
          strokeWidth="2"
          d="m7.828 11.693 8.208-3.694 8.137 3.694v6.18a5 5 0 0 1-3.596 4.8L16.037 24l-4.602-1.334a5 5 0 0 1-3.607-4.802v-6.172Z"
        />
        <path
          stroke={color || "#000000"}
          strokeLinejoin="round"
          strokeWidth="2"
          d="M7.828 11.693h-.383a3.445 3.445 0 1 0 0 6.89h.383v-6.89ZM24.172 11.693h.383a3.445 3.445 0 1 1 0 6.89h-.383v-6.89Z"
        />
      </svg>
    );
  }
);

FaceMaskRegular.displayName = "FaceMaskRegular";

export default FaceMaskRegular;
