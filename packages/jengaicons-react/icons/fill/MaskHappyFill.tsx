import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const MaskHappyFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M5.766 4.916c-.087 1.474-.259 5.271.042 8.657l.006.073C6.2 18.001 7.112 28.283 16.55 28.283c7.807 0 11.03-5.42 11.516-14.71.39-7.47.153-8.934.045-9.22-.02-.054-.07-.061-.124-.042-3.528 1.228-12.549 2.894-21.572.162a.5.5 0 0 0-.649.443Zm5.717 10.204a2.026 2.026 0 0 1 2.338.5 1 1 0 1 0 1.492-1.333 4.025 4.025 0 0 0-6.005 0 1 1 0 0 0 1.492 1.332c.19-.213.423-.383.683-.5Zm9.076 0a2.026 2.026 0 0 1 2.338.5 1 1 0 1 0 1.492-1.333 4.026 4.026 0 0 0-6.005 0 1 1 0 0 0 1.492 1.332c.19-.213.423-.383.683-.5Zm-7.884 5.33a1 1 0 0 1 1.386-.28 5.039 5.039 0 0 0 5.575 0 1 1 0 1 1 1.107 1.667 7.038 7.038 0 0 1-7.788 0 1 1 0 0 1-.28-1.386Z"
          clip-rule="evenodd"
        />
      </svg>
    );
  }
);

MaskHappyFill.displayName = "MaskHappyFill";

export default MaskHappyFill;
