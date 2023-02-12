import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const FaceMasksvgFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          fill={color || "#000000"}
          fillRule="evenodd"
          d="m16.584 7.488-7.753 3.489-.044-.001h-.382a4.445 4.445 0 1 0 0 8.89h.382c.09 0 .176-.013.258-.035a5 5 0 0 0 3.35 3.216l4.321 1.254a1 1 0 0 0 .56-.001l4.26-1.247a5 5 0 0 0 3.341-3.22c.082.02.167.032.255.032h.383a4.445 4.445 0 1 0 0-8.89h-.383l-.042.002-7.682-3.488a1 1 0 0 0-.824-.001Zm-4.452 7.55a1 1 0 0 1 1-1h7.655a1 1 0 0 1 0 2h-7.655a1 1 0 0 1-1-1Zm0 3.062a1 1 0 0 1 1-1h7.655a1 1 0 1 1 0 2h-7.655a1 1 0 0 1-1-1Zm-4.345-5.046v4.732a2.446 2.446 0 0 1 0-4.732Zm18.345 4.732v-4.732a2.446 2.446 0 0 1 0 4.732Z"
          clip-rule="evenodd"
        />
      </svg>
    );
  }
);

FaceMasksvgFill.displayName = "FaceMasksvgFill";

export default FaceMasksvgFill;
