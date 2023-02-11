import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const MedalFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M22.103 19.712a8.571 8.571 0 1 0-10.286 0v7.73a.5.5 0 0 0 .739.44l4.19-2.277a.5.5 0 0 1 .48.001l4.137 2.27a.5.5 0 0 0 .74-.438v-7.726Zm-5.143-1.715a5.143 5.143 0 1 0 0-10.286 5.143 5.143 0 0 0 0 10.286Z"
        fill="#1C1B1F"
      />
    </svg>
  );
});

MedalFill.displayName = "MedalFill";

export default MedalFill;
