import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const CloudSunFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M12.72 5.958a1 1 0 0 0-1.97.35l.321 1.806a6.152 6.152 0 0 0-2.764 1.683l-1.599-1.12a1 1 0 0 0-1.147 1.638l1.623 1.137a6.174 6.174 0 0 0-.548 3.125l-1.851.33a1 1 0 1 0 .35 1.969l1.998-.356a6.294 6.294 0 0 0 1.005 1.597 5.568 5.568 0 0 0 1.824 8.821c.72.326 1.5.494 2.29.495h8.914c1.797 0 3.59-.49 4.886-1.735.453-.434.91-.924 1.317-1.447a7.955 7.955 0 0 0-8.857-12.329.995.995 0 0 0-.087-.395 6.17 6.17 0 0 0-.94-1.488l1.309-1.868a1 1 0 0 0-1.638-1.147l-1.204 1.719a6.173 6.173 0 0 0-2.891-.867l-.342-1.918Zm4.135 6.731a.996.996 0 0 1-.256-.347 4.174 4.174 0 0 0-7.923 2.425c.135.745.463 1.44.953 2.018.033.039.063.08.09.122a5.569 5.569 0 0 1 3.918-.439c.574-1.122 1.693-2.708 2.716-3.445.163-.118.33-.229.502-.334Z"
        clip-rule="evenodd"
      />
    </svg>
  );
});

CloudSunFill.displayName = "CloudSunFill";

export default CloudSunFill;
