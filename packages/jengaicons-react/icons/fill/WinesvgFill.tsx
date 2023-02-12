import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const WinesvgFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M16.862 21.783v6.5M12.218 28.283h9.287"
      />
      <path
        fill={color || "#000000"}
        fillRule="evenodd"
        d="M8.575 13.156a8.418 8.418 0 1 0 16.777-.168l-.002.002c-1.536.634-5.67 2.004-8.489 0-3.124-2.222-6.77-.546-8.286.166Z"
        clip-rule="evenodd"
      />
      <path
        fill={color || "#000000"}
        d="m8.575 13.156-.425-.905a1 1 0 0 0-.572.833l.997.072Zm16.777-.168.996-.092a1 1 0 0 0-1.467-.79l.471.882Zm-.002.002.381.924c.031-.013.061-.027.09-.043l-.471-.882Zm-8.489 0-.579.815.58-.816Zm-7.308.784c0-.183.007-.365.02-.545l-1.995-.145a9.543 9.543 0 0 0-.025.69h2Zm7.418 7.418a7.418 7.418 0 0 1-7.418-7.418h-2a9.418 9.418 0 0 0 9.418 9.418v-2Zm7.418-7.418a7.418 7.418 0 0 1-7.418 7.418v2a9.418 9.418 0 0 0 9.418-9.418h-2Zm-.032-.694c.02.229.032.46.032.694h2c0-.296-.014-.589-.04-.878l-1.992.184Zm.524-.974-.003.002.943 1.763.003-.001-.943-1.764Zm.087-.04c-.722.297-2.041.762-3.489.919-1.458.158-2.91-.009-4.038-.81l-1.159 1.63c1.692 1.202 3.716 1.352 5.413 1.168 1.708-.185 3.223-.723 4.037-1.06l-.764-1.848Zm-7.527.108c-1.835-1.304-3.814-1.447-5.478-1.19-1.647.255-3.052.91-3.813 1.267l.85 1.81c.755-.354 1.931-.893 3.268-1.1 1.318-.203 2.724-.073 4.014.844l1.159-1.63Z"
      />
      <path
        stroke={color || "#000000"}
        strokeLinecap="round"
        strokeWidth="2"
        d="M21.976 4.283h-10.29a.5.5 0 0 0-.476.346l-2.984 9.238a7.903 7.903 0 0 0 7.902 7.916h1.666a7.903 7.903 0 0 0 7.9-7.917l-3.246-9.249a.5.5 0 0 0-.472-.334Z"
      />
    </svg>
  );
});

WinesvgFill.displayName = "WinesvgFill";

export default WinesvgFill;
