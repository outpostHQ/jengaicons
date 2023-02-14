import * as React from "react";
import { forwardRef, useContext } from "react";
import type { Context } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconRegularProps } from "../../src/base";

const Tree = forwardRef<SVGSVGElement, JengaIconRegularProps>((props, ref) => {
  const { size, color, alt, children, mirrored, weight } = props;

  const {
    alt: altCtx,
    children: childrenCtx,
    color: colorCtx,
    mirrored: mirroredCtx,
    size: sizeCtx,
    weight: weightCtx,
  } = useContext(JengaIconContext as Context<JengaIconRegularProps>);

  return (
    <svg
      width={size || sizeCtx || 32}
      height={size || sizeCtx || 32}
      transform={mirrored || mirroredCtx ? "scale(-1, 1)" : undefined}
      strokeWidth={weight || weightCtx || 2}
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 32 32"
    >
      {(!!altCtx || !!alt) && <title>{alt || altCtx}</title>}

      <path
        stroke={color || colorCtx || "#000000"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={weight || weightCtx || "2"}
        d="M16 28.5V11.883M16 19.268l-5.539-2.77M16 16.499l5.539-2.77"
      />
      <path
        fill={color || colorCtx || "#000000"}
        d="m16 21.22.802-.597L16 19.547l-.802 1.076.802.598ZM9.278 10.673l.2.98.74-.152.057-.751-.997-.077Zm13.342-.02-.997.08.061.761.75.142.186-.983Zm-7.422 9.971a5.682 5.682 0 0 1-4.568 2.296v2a7.682 7.682 0 0 0 6.172-3.101l-1.604-1.195ZM10.63 22.92a5.692 5.692 0 0 1-5.692-5.692h-2a7.692 7.692 0 0 0 7.692 7.692v-2Zm-5.692-5.692a5.694 5.694 0 0 1 4.54-5.575l-.401-1.96a7.694 7.694 0 0 0-6.139 7.535h2Zm5.337-6.478A5.692 5.692 0 0 1 15.95 5.5v-2a7.692 7.692 0 0 0-7.67 7.096l1.995.153ZM15.95 5.5a5.692 5.692 0 0 1 5.673 5.232l1.994-.16A7.692 7.692 0 0 0 15.95 3.5v2Zm6.485 6.135a5.694 5.694 0 0 1 4.627 5.592h2a7.694 7.694 0 0 0-6.256-7.557l-.372 1.965Zm4.627 5.592a5.692 5.692 0 0 1-5.692 5.692v2a7.692 7.692 0 0 0 7.692-7.692h-2ZM21.37 22.92c-1.87 0-3.529-.9-4.568-2.296l-1.604 1.195a7.682 7.682 0 0 0 6.172 3.101v-2Z"
      />

      {children || childrenCtx}
    </svg>
  );
});

Tree.displayName = "Tree";

export default Tree;
