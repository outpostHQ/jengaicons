import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const PlayFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M26.244 17.212a.5.5 0 0 0 0-.858L7.719 5.24a.5.5 0 0 0-.758.428v22.231a.5.5 0 0 0 .758.43l18.525-11.116Z"
      />
    </svg>
  );
});

PlayFill.displayName = "PlayFill";

export default PlayFill;
