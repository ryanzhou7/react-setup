import React from "react";
import ThemeToggler from "./ThemeToggler";
export default function PageTheme() {
  return (
    <>
      {/* Wrap what will be changing Whatever we pass to value will be available to consumers */}

      <ThemeToggler />
      <ThemeToggler />
      <ThemeToggler />
    </>
  );
}
