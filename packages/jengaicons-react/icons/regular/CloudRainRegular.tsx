import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const CloudRainRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="m15.077 28.5 3.035-4.615M12.62 25.73l3.645-5.403M11.835 9.42a5.54 5.54 0 1 0-1.378 10.907h8.639c1.936 0 3.874-.524 5.252-1.885.396-.391.79-.823 1.146-1.28a7.914 7.914 0 1 0-14.245-4.749"
        />
      </svg>
    );
  }
);

CloudRainRegular.displayName = "CloudRainRegular";

export default CloudRainRegular;
