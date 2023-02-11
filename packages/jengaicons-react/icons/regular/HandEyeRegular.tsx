import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const HandEyeRegular = forwardRef<SVGSVGElement, JengaIconProps>(
  (props, ref) => {
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
          d="M11.597 20.962a.795.795 0 0 0 0 .854c.553.853 2.017 2.676 4.403 2.676 2.386 0 3.85-1.823 4.403-2.676a.796.796 0 0 0 0-.854c-.553-.853-2.017-2.677-4.403-2.677-2.386 0-3.85 1.824-4.403 2.677Z"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 22.553a1.164 1.164 0 1 0 0-2.328 1.164 1.164 0 0 0 0 2.328Z"
          fill="#1C1B1F"
        />
        <path
          d="M11.795 15.167V6.722c0-1.227.995-2.222 2.223-2.222v0c1.227 0 2.222.995 2.222 2.222v8.445"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M11.795 15.167v-4.818a2.222 2.222 0 0 0-4.444 0v9.422c0 4.821 3.946 8.73 8.814 8.73 3.377 0 6.535-2.462 7.508-4.434.97-1.97.972-6.198.972-6.212 0 0 0 0 0 0 0-1.518.121-2.432-.972-2.988a2.222 2.222 0 0 0-2.989.972m-4.444-.672V8.779a2.222 2.222 0 1 1 4.444 0v7.825"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);

HandEyeRegular.displayName = "HandEyeRegular";

export default HandEyeRegular;
