import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import PageTheme from "./PageTheme";
import PageTooltip from "./PageTooltip";
import PageQuery from "./PageQuery";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "./ThemeContext";
import Nav from "./Nav";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: "light",

      // method consumers will use to toggle the theme
      toggleTheme: () => {
        this.setState(prevState => {
          const { theme: prevTheme } = prevState;
          return {
            theme: prevTheme === "light" ? "dark" : "light"
          };
        });
      }
    };
  }

  render() {
    return (
      <div>
        <Router>
          <ThemeProvider value={this.state}>
            <Nav />

            {/* Switch makes it so only the first path that matches will render a component we still need
            exact on the '/' path because otherwise /theme won't ever get rendered*/}
            <Switch>
              {/* 
                Router wraps these component so it can pass info about the route to the component(internally via context)
                We need exact so otherwise "/theme" which has a partial match will also render "/" 
                */}
              <Route exact path="/" component={() => <h1>Hello world</h1>} />
              <Route path="/theme" component={PageTheme} state={this.state} />
              <Route path="/tooltip" component={PageTooltip} />
              <Route path="/query" component={PageQuery} />

              {/* If none of those above match  */}
              <Route render={() => <h1>404 Not found</h1>} />
            </Switch>
          </ThemeProvider>
        </Router>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
