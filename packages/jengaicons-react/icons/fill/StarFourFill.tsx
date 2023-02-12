import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const StarFourFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M16.491 6.05a.5.5 0 0 1 .938 0l2.692 7.276a.5.5 0 0 0 .296.296l7.276 2.692a.5.5 0 0 1 0 .938l-7.276 2.692a.5.5 0 0 0-.296.296l-2.692 7.276a.5.5 0 0 1-.938 0l-2.692-7.276a.5.5 0 0 0-.296-.296l-7.276-2.692a.5.5 0 0 1 0-.938l7.276-2.692a.5.5 0 0 0 .296-.296L16.49 6.05Z"
      />
    </svg>
  );
});

StarFourFill.displayName = "StarFourFill";

export default StarFourFill;
