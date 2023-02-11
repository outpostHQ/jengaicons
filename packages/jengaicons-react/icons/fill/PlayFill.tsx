import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const PlayFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M26.244 17.212a.5.5 0 0 0 0-.858L7.719 5.24a.5.5 0 0 0-.758.428v22.231a.5.5 0 0 0 .758.43l18.525-11.116Z"
        fill="#1C1B1F"
      />
    </svg>
  );
});

PlayFill.displayName = "PlayFill";

export default PlayFill;
