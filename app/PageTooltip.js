import React from "react";
import ToolTip from "./ToolTip";
import ToolTip2 from "./ToolTip2";

export default function PageTooltip() {
  return (
    <>
      <ToolTip text="hello">Hover over me for tool tip</ToolTip>
      <ToolTip2 text="hello">Hover over me for tool tip</ToolTip2>
    </>
  );
}
