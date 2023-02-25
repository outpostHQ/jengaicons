import { useScrollPosition } from "@/hooks/useScrollPosition";
import { Block, Flex, Item, MenuTrigger, Slider } from "@cube-dev/ui-kit";
import { CaretDownFill, Sun } from "@jengaicons/react";
import React, { useEffect, useState } from "react";
import { isNullOrUndefined } from "util";
import {
  CPButton,
  CPMenu,
  CPRow,
  CPSearchInput,
  CPText,
} from "./shared/library";
function Header() {
  const scroll = useScrollPosition();

  useEffect(() => {
    const header = document.getElementById("header");
    window.addEventListener("scroll", () => {
      if (header?.getBoundingClientRect().top < 0) {
        header?.classList.add("fixed");
      } else {
        header?.classList.remove("fixed");
      }
    });
  }, []);
  return (
    <Block
      id="header"
      className="header"
      padding={["1.25rem 0", "1.25rem 0", "1.25rem "]}
      styles={{
        boxShadow: "0px 4px 12px 0.75px rgba(0, 0, 0, 0.33)",
      }}
    >
      <Block
        id="header"
        styles={{
          maxWidth: "1040px",
          margin: "0 auto",
        }}
      >
        <Flex
          flow={["row wrap", "row wrap", "column"]}
          justifyContent="space-between"
          gap=".6125rem"
          width="100%"
        >
          <CPRow flex="1" gap="10px" width="100%">
            <MenuTrigger>
              <CPButton
                padding="12px"
                rightIcon={<CaretDownFill />}
                variant="outline"
              >
                Regular
              </CPButton>
              <CPMenu width="6.3rem">
                <Item>Regular</Item>
                <Item>Filled</Item>
                <Item>Outline</Item>
              </CPMenu>
            </MenuTrigger>
            <CPSearchInput padding="12px 10px" width="100%" />
          </CPRow>
          <CPRow
            flex="1"
            flow={["row", "row", "column"]}
            gap="10px"
            width="100%"
          >
            <Flex
              padding="12px 10px"
              style={{
                border: "1px solid var(--cp-border)",
                borderRadius: "0.5rem",
              }}
              alignItems="center"
              gap="0.25rem"
              width="100%"
            >
              <CPText>Size</CPText>
              <Slider width="100%" />
              <CPText>32px</CPText>
            </Flex>

            <Flex
              padding="12px 10px"
              style={{
                border: "1px solid var(--cp-border)",
                borderRadius: "0.5rem",
              }}
              alignItems="center"
              gap="0.25rem"
              width="100%"
            >
              <CPText>Size</CPText>
              <Slider width="100%" />
              <CPText>2px</CPText>
            </Flex>
          </CPRow>
          <CPRow width={["auto", "auto", "100%"]} gap="10px">
            <Flex
              padding="6px 12px"
              style={{
                border: "1px solid var(--cp-border)",
                borderRadius: "0.5rem",
              }}
              alignItems="center"
              gap="0.5rem"
            >
              <input type="color" />
              <CPText>#2b2962</CPText>
            </Flex>

            <CPButton
              height="100%"
              variant="outline"
              icon={<Sun size="1.25rem" />}
            />
            <CPButton
              height="100%"
              variant="outline"
              icon={<Sun size="1.25rem" />}
            />
          </CPRow>
        </Flex>
      </Block>
    </Block>
  );
}

export default Header;
