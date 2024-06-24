import { Component } from "react";
import { Mode } from "./components/Mode";
import SearchIcon from "./assets/search.svg";

import axios from "axios";
import { ResultContainer } from "./components/ResultContainer";
import { Skleton } from "./components/Skeleton";

class App extends Component {
  state = {
    searchValue: "",
    responseData: null,
    month: {
      "01": "Jan",
      "02": "Feb",
      "03": "Mart",
      "04": "April",
      "05": "May",
      "06": "June",
      "07": "July",
      "08": "Aug",
      "09": "Sep",
      10: "Oct",
      11: "Nov",
      12: "Dec",
    },
    isDefined: false,
    isLoading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.searchValue !== this.state.searchValue &&
      this.state.searchValue?.trim()
    ) {
      this.setState({ isLoading: true, responseData: null });
      axios
        .get(`https://api.github.com/users/${this.state.searchValue}`)
        .then((data) =>
          setTimeout(() => {
            this.setState({
              responseData: data.data,
              isDefined: false,
              isLoading: false,
            });
          }, 500)
        )
        .catch(() => this.setState({ isDefined: true, isLoading: false }));
    }
  }
  render() {
    console.log("app render", this.state.responseData);
    return (
      <div className="flex flex-col max-w-[738px] mx-3 w-[100vw] rounded-[15px] p-5 wt:max-wd:max-w-[573px]">
        <div className="flex justify-between w-[100%] mb-8">
          <h1 className="text-[var(--logo-clr)] text-[26px] font-semibold">
            devfinder
          </h1>
          <Mode />
        </div>
        <div className="flex rounded-[15px] bg-[#FEFEFE] shadow-[0px_16px_30px_-10px_rgba(70,96,187,0.20)] dark:bg-[#1E2A47] px-[32px] py-[22px] items-center gap-5 mb-6 wm:max-wt:gap-1 wm:max-wt:px-[16px] wm:max-wt:py-[15px]">
          <SearchIcon className="flex-shrink-0 wm:max-wt:w-[20px]" />
          <input
            type="search"
            autoComplete="off"
            placeholder="Search GitHub username…"
            onInput={(e) =>
              this.setState({ inputValue: e.target.value, isDefined: false })
            }
            spellCheck="false"
            className="flex-1 wm:max-wt:text-[13px]"
          />
          {this.state.isDefined && (
            <span className="text-[red] font-semibold wm:max-wt:text-[10px]">
              Not Founded!
            </span>
          )}
          <button
            onClick={() =>
              this.setState({ searchValue: this.state.inputValue })
            }
            className="bg-[#0079FF] px-[24px] py-[13px] rounded-[10px] font-bold wm:max-wt:text-[13px]"
          >
            Search
          </button>
        </div>
        {this.state.isLoading ? (
          <Skleton isLoading={this.state.isLoading} />
        ) : (
          <ResultContainer
            responseData={this.state.responseData}
            month={this.state.month}
          />
        )}
      </div>
    );
  }
}

export default App;
