import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const CloudSunRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="m11.261 8.587-.487-2.737M7.46 10.814l-2.286-1.6M6.738 15.121 4 15.608M15.414 9.6l1.601-2.286M7.906 17.149a5.293 5.293 0 0 1-1.174-2.49 5.174 5.174 0 0 1 9.82-3.008"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12.677 16.185a5.57 5.57 0 1 0-1.385 10.965h8.7c1.936 0 3.874-.524 5.253-1.884.402-.396.803-.834 1.164-1.298a7.957 7.957 0 1 0-14.321-4.774"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);

CloudSunRegular.displayName = "CloudSunRegular";

export default CloudSunRegular;
