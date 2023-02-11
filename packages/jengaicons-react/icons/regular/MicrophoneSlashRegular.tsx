import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const MicrophoneSlashRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M16 24.944V28.5M7.111 7.167 24.89 26.722M16 24.33v3.281M23.34 17.765a7.387 7.387 0 0 1-.73 2.473m-1.687 2.21A7.386 7.386 0 0 1 8.66 17.766"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.898 8.671v-.068A4.102 4.102 0 0 1 16 4.5v0a4.103 4.103 0 0 1 4.103 4.103v7.648m-8.206-3.777v4.573a4 4 0 0 0 4 4h3.584"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);

MicrophoneSlashRegular.displayName = "MicrophoneSlashRegular";

export default MicrophoneSlashRegular;
