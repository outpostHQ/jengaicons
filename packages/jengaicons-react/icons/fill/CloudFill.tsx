import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const CloudFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M12.447 13.54a6.001 6.001 0 1 0-1.491 11.816h9.605c1.936 0 3.869-.528 5.265-1.87.488-.468.981-.995 1.42-1.559A8.574 8.574 0 0 0 15.373 9.828c-1.102.794-2.308 2.503-2.927 3.712Z"
        fill="#1C1B1F"
      />
    </svg>
  );
});

CloudFill.displayName = "CloudFill";

export default CloudFill;
