import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const BugDroidFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M27.06 6.545a1 1 0 0 0-1.239-1.57l-4.298 3.391a7.99 7.99 0 0 0-4.563-1.422 7.99 7.99 0 0 0-4.487 1.37l-4.23-3.339a1 1 0 0 0-1.24 1.57l3.942 3.11a7.996 7.996 0 0 0-2.012 5.315v.905H4.96a1 1 0 1 0 0 2h3.973v.904a8.027 8.027 0 0 0 16.053 0v-.904h3.974a1 1 0 1 0 0-2h-3.974v-.905c0-2.006-.736-3.84-1.953-5.248l4.027-3.177ZM8.933 17.875h16.053v-2H8.933v2Zm11.527-4a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm-5.5-1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
        clip-rule="evenodd"
      />
    </svg>
  );
});

BugDroidFill.displayName = "BugDroidFill";

export default BugDroidFill;
