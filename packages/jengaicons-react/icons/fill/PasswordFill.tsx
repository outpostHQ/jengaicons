import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const PasswordFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M4.96 6.207a1 1 0 0 1 1 1v18.151a1 1 0 1 1-2 0V7.209a1 1 0 0 1 1-1Zm8.067 5.042a1 1 0 0 1 1 1v2.656l2.523-.82a1 1 0 1 1 .619 1.9l-2.525.823 1.562 2.152a1 1 0 0 1-1.618 1.175l-1.56-2.15-1.562 2.15a1 1 0 1 1-1.618-1.175l1.562-2.152-2.524-.822a1 1 0 0 1 .619-1.902l2.522.822v-2.657a1 1 0 0 1 1-1Zm13.1 1a1 1 0 1 0-2 0v2.656l-2.521-.82a1 1 0 1 0-.62 1.9l2.525.823-1.562 2.152a1 1 0 0 0 1.619 1.175l1.56-2.15 1.56 2.15a1 1 0 0 0 1.619-1.175l-1.562-2.152 2.524-.822a1 1 0 0 0-.619-1.902l-2.522.822v-2.657Z"
        fill="#1C1B1F"
      />
    </svg>
  );
});

PasswordFill.displayName = "PasswordFill";

export default PasswordFill;
