import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const FunnelFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M26.78 5.524H7.153a1 1 0 0 0-.755 1.656l7.338 8.448a1 1 0 0 1 .245.656v8.882a1 1 0 0 0 1.557.83l4.041-2.712a1 1 0 0 0 .443-.83v-6.172a1 1 0 0 1 .242-.653l7.274-8.452a1 1 0 0 0-.758-1.653Z"
      />
    </svg>
  );
});

FunnelFill.displayName = "FunnelFill";

export default FunnelFill;
