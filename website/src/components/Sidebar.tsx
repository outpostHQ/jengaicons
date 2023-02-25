import { Block } from "@cube-dev/ui-kit";
import { Copy, Download, X } from "@jengaicons/react";
import React, { useEffect } from "react";
import {
  CPButton,
  CPColumn,
  CPCopySnippet,
  CPRow,
  CPText,
} from "./shared/library";

function Sidebar() {
  return (
    <CPColumn>
      <CPRow
        alignItems="center"
        justifyContent="space-between"
        padding=".6125rem 1.25rem 0.8rem 1.25rem"
        style={{ borderBottom: "1px solid var(--cp-border)" }}
      >
        <CPText variant="displaySmall">Student</CPText>
        <X size="1.25rem" />
      </CPRow>
      <CPColumn padding="1.25rem" gap="1.25rem" flex="1">
        <CPRow>
          <CPButton
            width="100%"
            fontWeight="500"
            styles={{
              borderTopRightRadius: "0",
              borderBottomRightRadius: "0",
              borderRightWidth: 0,
            }}
            variant="outline"
            fill="var(--cp-surface-primary)"
          >
            Code block
          </CPButton>
          <CPButton
            width="100%"
            fontWeight="500"
            styles={{
              borderTopLeftRadius: "0",
              borderBottomLeftRadius: "0",
            }}
            variant="outline"
          >
            Preview
          </CPButton>
        </CPRow>
        <Block width="280px" height="280px" fill="blue"></Block>
        <CPColumn>
          <CPText>React:</CPText>
          <CPCopySnippet
            width="100%"
            language="javascript"
            code="<Student-regular sie={32} />"
          />
        </CPColumn>
        <CPColumn>
          <CPText>HTML/CSS: </CPText>
          <CPCopySnippet
            width="100%"
            language="javascript"
            code='<i class="ji-student-regular"></i>'
          />
        </CPColumn>
      </CPColumn>
      <CPRow padding="1.25rem" justifyContent="space-between">
        <CPButton variant="invisible" icon={<Copy />}>
          Copy SVG
        </CPButton>
        <CPButton variant="invisible" icon={<Download />}>
          Download SVG
        </CPButton>
      </CPRow>
    </CPColumn>
  );
}

export default Sidebar;
