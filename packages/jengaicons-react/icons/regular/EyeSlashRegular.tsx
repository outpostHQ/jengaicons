import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const EyeSlashRegular = forwardRef<SVGSVGElement, JengaIconProps>(
  (props, ref) => {
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
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M18.418 18.866a3.75 3.75 0 0 1-5.43-5.1m3.517-1.482a3.752 3.752 0 0 1 3.204 3.157"
        />
        <path
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M15.83 8.286c3.651.04 7.367 2.618 12.17 7.632a56.85 56.85 0 0 1-2.733 2.84M9.941 10.361C8.105 11.627 6.161 13.476 4 15.918c7.054 7.835 11.76 9.655 17.457 5.954M6.676 6.676l18.648 18.648"
        />
      </svg>
    );
  }
);

EyeSlashRegular.displayName = "EyeSlashRegular";

export default EyeSlashRegular;
