import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const HexagonFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M6.237 10.87a1 1 0 0 1 .512-.872l9.722-5.44a1 1 0 0 1 .977 0l9.723 5.44a1 1 0 0 1 .511.873v10.824a1 1 0 0 1-.511.873l-9.723 5.44a1 1 0 0 1-.977 0l-9.722-5.44a1 1 0 0 1-.512-.873V10.871Z"
      />
    </svg>
  );
});

HexagonFill.displayName = "HexagonFill";

export default HexagonFill;
