import React from "react";
import { ThemeConsumer } from "./ThemeContext";

export default function ThemedToggle() {
  return (
    // Anything wrapped in consumer will be updated when the provider updates
    // Below is RENDER PROP pattern
    <ThemeConsumer>
      {/* This is destructing out of the provider the values that are made avaialble */}
      {({ theme, toggleTheme }) => (
        <div>
          {/* Use the theme values from Provider */}
          {theme === "light" ? "🔦" : "💡"}

          {/* Use the method from Provider to that will update theme*/}
          <button onClick={toggleTheme}>Toggle theme</button>
        </div>
      )}
    </ThemeConsumer>
  );
}
