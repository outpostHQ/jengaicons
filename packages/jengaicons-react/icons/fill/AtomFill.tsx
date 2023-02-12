import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const AtomFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 32 32"
    >
      {(!!altCtx || !!alt) && <title>{alt || altCtx}</title>}

      <path
        fill={color || colorCtx || "#000000"}
        fillRule="evenodd"
        d="M9.387 12.554c.36.8.844 1.663 1.442 2.558a32.745 32.745 0 0 1 2.124-2.336 32.746 32.746 0 0 1 2.336-2.124 17.904 17.904 0 0 0-2.558-1.443c-1.02-.459-1.888-.692-2.557-.728-.67-.037-1.023.125-1.207.309-.184.184-.346.537-.31 1.207.037.669.27 1.536.73 2.557Zm-1.824.82c.486 1.081 1.158 2.234 1.988 3.409-.83 1.174-1.502 2.328-1.988 3.408-.518 1.15-.848 2.268-.902 3.27-.055 1 .165 2.002.892 2.729.727.727 1.729.947 2.73.892 1-.054 2.119-.384 3.269-.902 1.08-.486 2.234-1.158 3.408-1.988 1.174.83 2.328 1.502 3.408 1.988 1.15.518 2.268.848 3.27.902 1 .055 2.002-.165 2.73-.892.726-.727.946-1.73.891-2.73-.054-1.001-.384-2.119-.902-3.27-.486-1.08-1.158-2.233-1.988-3.407.83-1.174 1.502-2.328 1.988-3.408.518-1.15.848-2.268.902-3.27.055-1-.165-2.002-.892-2.73-.727-.726-1.729-.946-2.73-.891-1 .054-2.119.384-3.269.902-1.08.486-2.234 1.158-3.408 1.988-1.174-.83-2.328-1.502-3.408-1.988-1.15-.518-2.268-.848-3.27-.903-1-.054-2.002.165-2.729.893-.727.727-.947 1.729-.892 2.73.054 1 .384 2.118.902 3.269Zm5.168 10.982c.8-.36 1.663-.844 2.558-1.442a32.746 32.746 0 0 1-2.336-2.124 32.745 32.745 0 0 1-2.124-2.336 17.914 17.914 0 0 0-1.442 2.558c-.46 1.02-.693 1.888-.73 2.557-.036.67.126 1.023.31 1.207.184.184.537.346 1.207.31.669-.037 1.536-.27 2.557-.73Zm1.636-4.98a30.39 30.39 0 0 0 2.593 2.317 30.371 30.371 0 0 0 2.593-2.317 30.373 30.373 0 0 0 2.317-2.593 30.372 30.372 0 0 0-2.317-2.593 30.371 30.371 0 0 0-2.593-2.317 30.357 30.357 0 0 0-2.593 2.317 30.388 30.388 0 0 0-2.317 2.593 30.389 30.389 0 0 0 2.317 2.593Zm6.822 4.98c-.8-.36-1.663-.844-2.558-1.442a32.766 32.766 0 0 0 2.336-2.124 32.746 32.746 0 0 0 2.124-2.336 17.914 17.914 0 0 1 1.442 2.558c.46 1.02.693 1.888.73 2.557.036.67-.126 1.023-.31 1.207-.184.184-.537.346-1.207.31-.669-.037-1.536-.27-2.557-.73Zm3.344-11.802c-.36.8-.844 1.663-1.442 2.558a32.746 32.746 0 0 0-2.124-2.336 32.766 32.766 0 0 0-2.336-2.124A17.905 17.905 0 0 1 21.19 9.21c1.02-.46 1.888-.693 2.557-.73.67-.036 1.023.126 1.207.31.184.184.346.537.31 1.207-.037.669-.27 1.536-.73 2.557Zm-6.302 4.229a1.273 1.273 0 1 1-2.546 0 1.273 1.273 0 0 1 2.546 0Z"
        clip-rule="evenodd"
      />

      {children || childrenCtx}
    </svg>
  );
});

AtomFill.displayName = "AtomFill";

export default AtomFill;
