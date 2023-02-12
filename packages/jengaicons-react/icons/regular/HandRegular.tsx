import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const HandRegular = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        strokeWidth="2"
        d="M21.579 16.056V6.722A2.222 2.222 0 0 0 19.356 4.5v0a2.222 2.222 0 0 0-2.222 2.222v9.334"
      />
      <path
        stroke={color || "#000000"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M21.579 16.056v-5.707a2.222 2.222 0 1 1 4.444 0v9.422c0 4.821-3.946 8.729-8.814 8.729a8.824 8.824 0 0 1-7.79-4.644l-3.2-6a2.222 2.222 0 1 1 3.961-2.017l1.565 3.046c.24.467.945.296.945-.228V8.779a2.222 2.222 0 1 1 4.444 0v7.277"
      />
    </svg>
  );
});

HandRegular.displayName = "HandRegular";

export default HandRegular;
