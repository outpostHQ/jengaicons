import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const ArmchairsvgFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M6.565 13.808a3.43 3.43 0 0 0 1.824 6.332v4.286a.857.857 0 0 0 .857.857h3.017v-2.616h-.03a1 1 0 0 1-1-1v-3.421a1.016 1.016 0 0 1-.005-.105c0-1.125-.52-2.477-1.591-3.36-.703-.579-1.704-1.004-3.072-.973Zm15.538 8.86v2.615h2.571a.857.857 0 0 0 .858-.857V20.14a3.429 3.429 0 0 0 1.817-6.336c-2.31.103-4.182 2.1-4.248 4.22a.99.99 0 0 1 .002.072v3.572a1 1 0 0 1-1 1ZM10.389 7.283h13.143a2 2 0 0 1 2 2v2.836c-2.249.772-3.943 2.794-4.343 5.022h-8.047c-.236-1.397-.965-2.858-2.234-3.904a6.154 6.154 0 0 0-2.52-1.24V9.283a2 2 0 0 1 2-2Z"
          clip-rule="evenodd"
        />
        <path
          fill={color || "#000000"}
          fillRule="evenodd"
          d="M12.233 22.672v2.611h9.87v-2.61a1 1 0 0 1-1-1v-3.01h-7.87v3.01a1 1 0 0 1-1 1Z"
          clip-rule="evenodd"
        />
      </svg>
    );
  }
);

ArmchairsvgFill.displayName = "ArmchairsvgFill";

export default ArmchairsvgFill;
