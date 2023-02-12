import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const UserFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M16.987 19.174a7.195 7.195 0 1 0-.054 0c-4.958.014-9.033 3.782-9.531 8.61-.057.55.396.999.949.999h17.218c.552 0 1.006-.45.949-.998-.499-4.83-4.573-8.597-9.53-8.611Z"
        clip-rule="evenodd"
      />
    </svg>
  );
});

UserFill.displayName = "UserFill";

export default UserFill;
