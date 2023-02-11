import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const QueueFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M4.96 7.859a1 1 0 1 0 0 2h21.762a1 1 0 1 0 0-2H4.96Zm0 7.913a1 1 0 1 0 0 2h11.87a1 1 0 1 0 0-2H4.96Zm-1 8.914a1 1 0 0 1 1-1h11.87a1 1 0 1 1 0 2H4.96a1 1 0 0 1-1-1Zm24.316-4.866a.5.5 0 0 1 0 .85l-5.736 3.563a.5.5 0 0 1-.764-.425v-7.126a.5.5 0 0 1 .764-.425l5.736 3.563Z"
        fill="#1C1B1F"
      />
    </svg>
  );
});

QueueFill.displayName = "QueueFill";

export default QueueFill;
