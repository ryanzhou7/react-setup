import React from "react";

// Returns out an object, for which we are destructuring the consumer / provider
const { Consumer, Provider } = React.createContext();
export { Consumer as ThemeConsumer };
export { Provider as ThemeProvider };
