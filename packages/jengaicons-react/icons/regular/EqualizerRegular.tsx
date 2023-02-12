import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const EqualizerRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M4 12.326h5.217M4 16.5h5.217M4 20.674h5.217M4 24.848h5.217M13.391 16.5h5.218M13.391 20.674h5.218M13.391 24.848h5.218M22.783 12.326H28M22.783 8.152H28M22.783 16.5H28M22.783 20.674H28M22.783 24.848H28"
        />
      </svg>
    );
  }
);

EqualizerRegular.displayName = "EqualizerRegular";

export default EqualizerRegular;
