import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const CloudFogRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M15.04 24.66H9.28M22.72 24.66h-2.88M19.84 28.5h-6.72M11.668 9.617a5.761 5.761 0 1 0-1.432 11.343h9.102c1.936 0 3.872-.526 5.259-1.877.44-.429.882-.906 1.277-1.414a8.231 8.231 0 1 0-14.815-4.94"
        />
      </svg>
    );
  }
);

CloudFogRegular.displayName = "CloudFogRegular";

export default CloudFogRegular;
