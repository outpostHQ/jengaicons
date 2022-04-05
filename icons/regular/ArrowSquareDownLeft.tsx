import * as React from "react";
import { SVGProps } from "react";

const SvgArrowSquareDownLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={32}
    height={32}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      stroke="#000"
      strokeWidth={2}
      strokeLinejoin="round"
      d="M4 4h24v24H4z"
    />
    <path
      d="M12.465 13.536v6h6M19.536 12.464l-7.071 7.071"
      stroke="#000"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgArrowSquareDownLeft;
