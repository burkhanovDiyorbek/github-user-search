import { Component } from "react";
import LightSvg from "../assets/light.svg";
import DarkSvg from "../assets/dark.svg";

export class Mode extends Component {
  state = {
    theme: localStorage.getItem("theme"),
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.theme !== this.state.theme) {
      localStorage.setItem("theme", this.state.theme);
      if (localStorage.theme === "dark" || !("theme" in localStorage)) {
        document.body.classList.add("dark");
        this.setState({ theme: "dark" });
      } else {
        document.body.classList.remove("dark");
        this.setState({ theme: "light" });
      }
    }
  }

  render() {
    document.body.classList = "body " + this.state.theme;
    return (
      <div className="dark:text-white dark:bg-red cursor-pointer">
        {this.state.theme == "dark" ? (
          <div
            onClick={() => this.setState({ theme: "light" })}
            className="flex gap-3 items-center"
          >
            <LightSvg />
            <p>Light</p>
          </div>
        ) : (
          <div
            onClick={() => this.setState({ theme: "dark" })}
            className="flex gap-3 items-center"
          >
            <DarkSvg />
            <p>Dark</p>
          </div>
        )}
      </div>
    );
  }
}
