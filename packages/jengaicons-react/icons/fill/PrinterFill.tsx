import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const PrinterFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M8.28 6.98a1 1 0 0 1 1-1h15.36a1 1 0 0 1 1 1v4.8h2.32a1 1 0 0 1 1 1v9.52a1 1 0 0 1-1 1h-2.216c-.035 0-.07-.003-.104-.006v2.292a1 1 0 0 1-1 1H9.28a1 1 0 0 1-1-1v-2.288l-.06.001H5.96a1 1 0 0 1-1-1v-9.52a1 1 0 0 1 1-1h2.32v-4.8Zm2 1v2.8h13.36v-2.8H10.28ZM25.6 16.1a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0Zm-15.32 8.486V21.42h13.36v3.167H10.28Z"
        clip-rule="evenodd"
      />
    </svg>
  );
});

PrinterFill.displayName = "PrinterFill";

export default PrinterFill;
