import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const PushPinSimpleSlashFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M24.392 5.283h.728a1 1 0 1 0 0-2H13.029a1 1 0 0 0-.74 1.673l12.62 13.882a1 1 0 0 0 1.725-.847L24.392 5.283ZM8.58 3.61A1 1 0 1 0 7.1 4.956L9.986 8.13 7.96 19.603H6.88a1 1 0 1 0 0 2H16.44v6.68a1 1 0 0 0 2 0v-6.68h3.794l4.066 4.473a1 1 0 0 0 1.48-1.346l-4.358-4.793-.006-.007-11.62-12.782a1.878 1.878 0 0 0-.005-.005L8.58 3.61Z"
          clip-rule="evenodd"
        />
      </svg>
    );
  }
);

PushPinSimpleSlashFill.displayName = "PushPinSimpleSlashFill";

export default PushPinSimpleSlashFill;
