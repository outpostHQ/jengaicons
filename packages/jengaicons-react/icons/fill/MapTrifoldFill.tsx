import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const MapTrifoldFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          fillRule="evenodd"
          clip-rule="evenodd"
          d="M12.717 4.313a.996.996 0 0 1 .715.088l7.644 3.822 7.641-1.91a1 1 0 0 1 1.243.97v18a1 1 0 0 1-.758.97l-8 2a1 1 0 0 1-.69-.076l-7.668-3.834-7.641 1.91a1 1 0 0 1-1.243-.97v-18a1 1 0 0 1 .757-.97l8-2Zm.211 17.97a1 1 0 0 1 .48.105l7.552 3.777V10.283a1 1 0 0 1-.447-.106l-7.585-3.792v15.898Z"
          fill="#1C1B1F"
        />
      </svg>
    );
  }
);

MapTrifoldFill.displayName = "MapTrifoldFill";

export default MapTrifoldFill;
