import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const WatchFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M12.28 4.633a1 1 0 0 1 .988-.85h7.384a1 1 0 0 1 .99.85l.91 6.005a8.286 8.286 0 0 1 2.716 6.145 8.286 8.286 0 0 1-2.717 6.145l-.91 6.005a1 1 0 0 1-.989.85h-7.384a1 1 0 0 1-.989-.85l-.91-6.005a8.286 8.286 0 0 1-2.717-6.145 8.286 8.286 0 0 1 2.717-6.145l.91-6.005Zm1.333 19.756.515 3.394h5.665l.514-3.394a8.278 8.278 0 0 1-3.347.702 8.28 8.28 0 0 1-3.347-.702Zm6.18-18.606.514 3.394a8.28 8.28 0 0 0-3.347-.702 8.28 8.28 0 0 0-3.347.702l.515-3.394h5.665Zm-1.833 6.385a1 1 0 0 0-2 0v4.615a1 1 0 0 0 1 1h4.615a1 1 0 1 0 0-2H17.96v-3.615Z"
        clip-rule="evenodd"
      />
    </svg>
  );
});

WatchFill.displayName = "WatchFill";

export default WatchFill;
