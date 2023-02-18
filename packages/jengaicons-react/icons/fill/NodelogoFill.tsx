import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const NodelogoFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
  const { size, color, alt, children, mirrored, style } = props;

  const {
    alt: altCtx,
    children: childrenCtx,
    color: colorCtx,
    mirrored: mirroredCtx,
    size: sizeCtx,
    style: styleCtx,
  } = useContext(JengaIconContext);

  return (
    <svg
      width={size || sizeCtx || 32}
      height={size || sizeCtx || 32}
      transform={mirrored || mirroredCtx ? "scale(-1, 1)" : undefined}
      ref={ref}
      style={{
        ...styleCtx,
        ...style,
      }}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 32 32"
    >
      {(!!altCtx || !!alt) && <title>{alt || altCtx}</title>}

      <path
        fill={color || colorCtx || "#000000"}
        d="M16.955 28.283c-.319 0-.642-.086-.923-.248l-2.939-1.738c-.438-.248-.224-.333-.08-.38.585-.206.704-.249 1.328-.606.067-.038.152-.024.219.02l2.257 1.338a.276.276 0 0 0 .272 0l8.796-5.077a.282.282 0 0 0 .133-.238V11.2c0-.1-.052-.19-.138-.243L17.09 5.885a.276.276 0 0 0-.272 0l-8.786 5.077a.278.278 0 0 0-.138.243v10.149c0 .095.052.19.138.233l2.41 1.39c1.31.653 2.11-.114 2.11-.89v-10.02c0-.143.114-.252.256-.252h1.115c.138 0 .257.11.257.252v10.025c0 1.743-.953 2.743-2.605 2.743-.51 0-.91 0-2.024-.552l-2.305-1.33a1.852 1.852 0 0 1-.924-1.604V11.2c0-.657.352-1.276.924-1.605l8.787-5.076a1.928 1.928 0 0 1 1.847 0L26.675 9.6c.572.329.924.943.924 1.605v10.149c0 .657-.352 1.271-.924 1.605l-8.796 5.076c-.28.162-.6.248-.924.248Zm7.101-10.006c0-1.9-1.286-2.405-3.986-2.762-2.734-.362-3.01-.548-3.01-1.186 0-.528.234-1.233 2.258-1.233 1.804 0 2.471.39 2.747 1.61.024.114.129.2.248.2h1.143a.248.248 0 0 0 .186-.082.265.265 0 0 0 .067-.195c-.177-2.1-1.572-3.076-4.391-3.076-2.51 0-4.006 1.057-4.006 2.833 0 1.924 1.491 2.458 3.896 2.696 2.881.28 3.105.705 3.105 1.271 0 .981-.79 1.4-2.643 1.4-2.329 0-2.838-.585-3.01-1.742a.252.252 0 0 0-.252-.215H15.27a.251.251 0 0 0-.253.253c0 1.48.805 3.248 4.658 3.248 2.781-.005 4.381-1.105 4.381-3.02Z"
      />

      {children || childrenCtx}
    </svg>
  );
});

NodelogoFill.displayName = "NodelogoFill";

export default NodelogoFill;
