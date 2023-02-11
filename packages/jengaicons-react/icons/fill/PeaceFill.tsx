import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const PeaceFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M15.95 4.868a.483.483 0 0 0-.54-.486c-5.896.76-10.45 5.799-10.45 11.9 0 1.992.485 3.87 1.343 5.523.135.26.467.333.708.166l8.724-6.062a.5.5 0 0 0 .215-.41V4.869ZM8.153 23.613a.483.483 0 0 0-.091.721 11.975 11.975 0 0 0 7.347 3.85c.29.037.54-.194.54-.486v-8.546a.5.5 0 0 0-.784-.41l-7.012 4.871ZM17.95 27.7c0 .292.25.523.54.486a11.974 11.974 0 0 0 7.33-3.81.483.483 0 0 0-.087-.723l-6.996-4.898a.5.5 0 0 0-.787.41V27.7Zm9.641-5.846a.483.483 0 0 1-.708.163l-8.72-6.106a.5.5 0 0 1-.213-.41V4.867c0-.293.25-.523.54-.487 5.905.752 10.47 5.795 10.47 11.904 0 2.01-.495 3.906-1.369 5.571Z"
        fill="#1C1B1F"
      />
    </svg>
  );
});

PeaceFill.displayName = "PeaceFill";

export default PeaceFill;
