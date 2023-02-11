import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const CopyFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M11.005 3.783a1 1 0 0 0-1 1v6.492c0 .018 0 .036.002.053H5.46a1 1 0 0 0-1 1v15.455a1 1 0 0 0 1 1h15.454a1 1 0 0 0 1-1v-4.546H28.46a1 1 0 0 0 1-1V4.783a1 1 0 0 0-1-1H11.005Zm10.91 17.455h5.545V5.782H12.005v5.492l-.001.053h8.91a1 1 0 0 1 1 1v8.91Z"
        fill="#1C1B1F"
      />
    </svg>
  );
});

CopyFill.displayName = "CopyFill";

export default CopyFill;
