import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const MedalFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M22.103 19.712a8.571 8.571 0 1 0-10.286 0v7.73a.5.5 0 0 0 .739.44l4.19-2.277a.5.5 0 0 1 .48.001l4.137 2.27a.5.5 0 0 0 .74-.438v-7.726Zm-5.143-1.715a5.143 5.143 0 1 0 0-10.286 5.143 5.143 0 0 0 0 10.286Z"
        clip-rule="evenodd"
      />
    </svg>
  );
});

MedalFill.displayName = "MedalFill";

export default MedalFill;
