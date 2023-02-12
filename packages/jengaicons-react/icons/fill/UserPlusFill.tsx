import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const UserPlusFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M12.494 18.657a5.642 5.642 0 1 0 0-11.283 5.642 5.642 0 0 0 0 11.284Zm14.643-2.815a1 1 0 1 0-2 0v1.823h-1.823a1 1 0 1 0 0 2h1.823v1.823a1 1 0 1 0 2 0v-1.823h1.823a1 1 0 1 0 0-2h-1.823v-1.823ZM5.025 25.194a7.536 7.536 0 0 1 14.938 0c.072.548-.382.998-.935.998H5.96c-.553 0-1.007-.45-.935-.998Z"
        clip-rule="evenodd"
      />
    </svg>
  );
});

UserPlusFill.displayName = "UserPlusFill";

export default UserPlusFill;
