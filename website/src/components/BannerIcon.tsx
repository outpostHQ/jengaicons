import { Block } from "@cube-dev/ui-kit";
import { JengaIconContext } from "@jengaicons/react";
import React, { ReactNode } from "react";

function BannerIcon({ icon }: { icon: ReactNode }) {
  return (
    <Block
      padding="1.25rem"
      style={{
        background:
          "linear-gradient(354.82deg, #272826 57.95%, #121312 91.69%)",
        border: "1px solid var(--cp-border)",
        borderRadius: "0.5rem",
        width: "max-content",
      }}
    >
      <JengaIconContext.Provider
        value={{
          color: "red",
          size: "2rem",
        }}
      >
        <Block>{icon}</Block>
      </JengaIconContext.Provider>
    </Block>
  );
}

export default BannerIcon;
