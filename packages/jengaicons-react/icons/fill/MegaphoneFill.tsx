import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const MegaphoneFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M4.96 5.408c0-.405.451-.649.794-.431 5.124 3.254 8.332 4.191 13.41 5.03-.01.056-.014.113-.014.172l.05 10.025 1.99-.01v4.119h2v-4.125H21.2l-.05-10.014 3.239-.002c2.512 0 4.571 2.468 4.571 4.98 0 2.324-1.06 4.141-3.77 4.879v5.282a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-4.96c-5.65.977-8.848 2.095-13.383 5.797a.518.518 0 0 1-.847-.396V5.408Z"
          clip-rule="evenodd"
        />
      </svg>
    );
  }
);

MegaphoneFill.displayName = "MegaphoneFill";

export default MegaphoneFill;
