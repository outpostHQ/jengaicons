import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const CompassFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M5.96 16.283c0-6.075 4.925-11 11-11s11 4.925 11 11-4.925 11-11 11-11-4.925-11-11Zm11-13c-7.18 0-13 5.82-13 13s5.82 13 13 13 13-5.82 13-13-5.82-13-13-13Zm2.2 14.944a.5.5 0 0 1-.258.254l-6.097 2.613a.5.5 0 0 1-.656-.657l2.613-6.097a.5.5 0 0 1 .253-.259l6.367-2.894a.5.5 0 0 1 .663.66l-2.884 6.38Z"
        clip-rule="evenodd"
      />
    </svg>
  );
});

CompassFill.displayName = "CompassFill";

export default CompassFill;
