import { Block, BreakpointsProvider, CubeBlockProps } from "@cube-dev/ui-kit";
import React from "react";

function SectionContainer(props: CubeBlockProps) {
  const { children, styles, ...otherProps } = props;
  return (
    <BreakpointsProvider value={[1440, 770, 540]}>
      <Block padding={["0", "0 1.25rem", "0 1.25rem"]} {...otherProps}>
        <Block margin="0 auto" styles={{ maxWidth: "1040px", ...styles }}>
          {children}
        </Block>
      </Block>
    </BreakpointsProvider>
  );
}

export default SectionContainer;
