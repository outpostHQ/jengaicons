import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const FlowerLotusFill = forwardRef<SVGSVGElement, JengaIconProps>(
  (props, ref) => {
    const { size, color, alt, children, mirrored } = props;

    const {
      alt: altCtx,
      children: childrenCtx,
      color: colorCtx,
      mirrored: mirroredCtx,
      size: sizeCtx,
    } = useContext(JengaIconContext);

    return (
      <svg
        width={size || sizeCtx || 32}
        height={size || sizeCtx || 32}
        transform={mirrored || mirroredCtx ? "scale(-1, 1)" : undefined}
        ref={ref}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
      >
        {(!!altCtx || !!alt) && <title>{alt || altCtx}</title>}

        <path
          fillRule="evenodd"
          clip-rule="evenodd"
          d="M16.96 7.633c-.39 0-.772.125-1.087.356l-.01.008c-.823.622-2.322 1.997-3.238 4.343a7.933 7.933 0 0 0-2.386-.962.803.803 0 0 0-.947.546c-.245.756-.531 2.12-.216 3.886-1.637-.298-2.94-.124-3.747.085a1.812 1.812 0 0 0-1.303 2.245c.38 1.38 1.545 3.878 4.932 5.828 3.36 1.934 6.303 1.965 7.997 1.965h.02c1.692 0 4.634-.024 7.989-1.967 3.383-1.959 4.55-4.444 4.93-5.826a1.811 1.811 0 0 0-1.303-2.245c-.808-.21-2.11-.383-3.748-.077.317-1.77.03-3.137-.215-3.894a.802.802 0 0 0-.947-.546c-.845.19-1.65.515-2.386.961-.916-2.345-2.414-3.72-3.238-4.342l-.01-.008a1.833 1.833 0 0 0-1.087-.356ZM9.665 17.828a.995.995 0 0 1-.557.03c-1.374-.317-2.451-.212-3.1-.07.317 1.007 1.25 2.894 3.948 4.446 1.54.887 2.97 1.31 4.213 1.513l-.054-.067c-.134-.17-.268-.352-.4-.545-1.16-.921-2.38-2.189-3.311-3.801-.3-.519-.543-1.022-.74-1.506Zm13.851 1.506c.298-.516.54-1.015.736-1.497a.997.997 0 0 0 .566.03c1.37-.325 2.446-.22 3.094-.078-.317 1.004-1.25 2.883-3.95 4.446a12.183 12.183 0 0 1-4.214 1.517 11.044 11.044 0 0 0 .457-.618c1.161-.92 2.38-2.188 3.311-3.8Zm-6.531 4.37-.025.018-.024-.019a7.527 7.527 0 0 1-1.248-1.258c-.907-1.155-1.845-3-1.845-5.746 0-4.117 2.122-6.239 3.117-7.022.995.783 3.117 2.905 3.117 7.022 0 2.746-.938 4.591-1.845 5.746a7.53 7.53 0 0 1-1.247 1.258Z"
          fill={color || colorCtx || "#000000"}
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

FlowerLotusFill.displayName = "FlowerLotusFill";

export default FlowerLotusFill;
