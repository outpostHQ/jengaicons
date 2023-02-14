import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const PokerChipFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 32 32"
      >
        {(!!altCtx || !!alt) && <title>{alt || altCtx}</title>}

        <path
          fill={color || colorCtx || "#000000"}
          fillRule="evenodd"
          d="M9.92 7.83a10.95 10.95 0 0 1 6.04-2.502v3.955c0 .024 0 .047.002.07a6.964 6.964 0 0 0-3.196 1.325 1.031 1.031 0 0 0-.049-.052L9.921 7.83ZM7.758 7.1a12.96 12.96 0 0 0-3.797 9.182 12.96 12.96 0 0 0 3.803 9.187l.005.005.004.005a12.959 12.959 0 0 0 9.188 3.803c7.18 0 13-5.82 13-13a12.96 12.96 0 0 0-3.803-9.188l-.005-.005-.005-.004a12.96 12.96 0 0 0-9.187-3.803A12.96 12.96 0 0 0 7.778 7.08l-.01.01-.01.011ZM24 7.83a10.95 10.95 0 0 0-6.039-2.502v3.955c0 .024 0 .047-.003.07 1.188.17 2.28.638 3.197 1.325.015-.018.032-.035.049-.052l2.796-2.796Zm-1.434 4.259a6.964 6.964 0 0 1 1.324 3.196 1.03 1.03 0 0 1 .071-.002h3.955a10.951 10.951 0 0 0-2.502-6.04l-2.796 2.797a.985.985 0 0 1-.052.049Zm1.395 5.194c-.024 0-.047 0-.07-.003a6.963 6.963 0 0 1-1.325 3.197.985.985 0 0 1 .052.049l2.796 2.796a10.95 10.95 0 0 0 2.502-6.039H23.96Zm.039 7.453a10.95 10.95 0 0 1-6.039 2.502v-3.955c0-.024 0-.047-.003-.07a6.963 6.963 0 0 0 3.197-1.325.985.985 0 0 0 .049.052l2.796 2.796Zm-8.039-1.453c0-.024 0-.047.002-.07a6.964 6.964 0 0 1-3.196-1.325 1.072 1.072 0 0 1-.049.052l-2.796 2.796a10.951 10.951 0 0 0 6.039 2.502v-3.955Zm-4.605-2.806a6.965 6.965 0 0 1-1.325-3.197 1.03 1.03 0 0 1-.07.003H6.005a10.95 10.95 0 0 0 2.502 6.039l2.796-2.796c.017-.017.034-.034.052-.049ZM9.96 15.283c.024 0 .047 0 .07.002a6.965 6.965 0 0 1 1.325-3.196.99.99 0 0 1-.052-.049L8.507 9.244a10.95 10.95 0 0 0-2.502 6.039H9.96Z"
          clip-rule="evenodd"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

PokerChipFill.displayName = "PokerChipFill";

export default PokerChipFill;
