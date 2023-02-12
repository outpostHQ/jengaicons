import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const HandsClappingRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="m21.26 4.5-.423 1.579M24.346 5.94l-.937 1.338M26.755 8.348l-1.339.937"
        />
        <path
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeWidth="2"
          d="m10.966 20.503-3.814-6.605a1.816 1.816 0 1 1 3.146-1.816l3.814 6.605"
        />
        <path
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="m10.966 20.504-2.332-4.04a1.816 1.816 0 1 0-3.145 1.817l3.85 6.668c1.97 3.412 6.36 4.566 9.805 2.577a7.211 7.211 0 0 0 3.616-6.47l-.188-5.555a1.816 1.816 0 1 0-3.627.192l.137 2.795c.021.428-.547.596-.762.224l-4.036-6.99a1.816 1.816 0 1 0-3.146 1.816l2.974 5.15"
        />
        <path
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeWidth="2"
          d="m8.091 10.757-.979-1.505a1.834 1.834 0 0 1 3.195-1.802l1.711 3.165"
        />
        <path
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M11.971 10.355 11.14 8.89a1.816 1.816 0 1 1 3.145-1.816l4.036 6.991c.215.371.783.204.762-.224l-.137-2.796a1.816 1.816 0 0 1 1.718-1.91c1.002-.052 1.698.698 1.75 1.7l.189 5.554"
        />
      </svg>
    );
  }
);

HandsClappingRegular.displayName = "HandsClappingRegular";

export default HandsClappingRegular;
