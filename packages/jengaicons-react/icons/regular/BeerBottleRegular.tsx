import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const BeerBottleRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="m23.199 5.537 3.18 3.18M12.07 13.486l6.36 6.359M12.866 25.409l-6.36-6.36M23.967 6.448l-6.031 4.362-4.2.974-9.597 9.596L10.481 28l9.736-9.735.945-4.228 4.363-6.031"
        />
      </svg>
    );
  }
);

BeerBottleRegular.displayName = "BeerBottleRegular";

export default BeerBottleRegular;
