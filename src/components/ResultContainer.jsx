import { Component } from "react";
import LocationIcon from "../assets/location.svg";
import TwitterIcon from "../assets/twitter.svg";
import WorkIcon from "../assets/work.svg";
import LinkIcon from "../assets/link.svg";
import PropTypes from "prop-types";

export class ResultContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log("res render");
    const date = this.props?.responseData?.created_at;
    return (
      <div className="flex rounded-[15px] bg-[#FEFEFE] shadow-[0px_16px_30px_-10px_rgba(70,96,187,0.20)] dark:bg-[#1E2A47] px-[32px] py-[22px] flex-col">
        {!this.props.isDefined && this.props.responseData ? (
          <>
            <div className="flex gap-10 wt:max-wd:mb-5">
              <img
                src={this.props.responseData?.avatar_url}
                alt="user avatar"
                className="max-w-[117px] w-full h-[117px] rounded-full wm:max-wd:w-[70px] wm:max-wd:h-[70px]"
                loading="lazy"
              />
              <div className="flex  gap-40 flex-wrap gap-y-0">
                <div>
                  <h2 className="text-[28px] mb-[3px] wm:max-wd:text-[16px]">
                    {this.props.responseData?.name?.slice(0, 15)||"undefined"}
                  </h2>
                  <a
                    href={this.props.responseData?.html_url}
                    className="text-[#0079FF] hover:underline wm:max-wd:text-[13px]"
                  >
                    @{this.props.responseData?.login}
                  </a>
                </div>
                <div className="flex-1">
                  <p className="mt-2 wm:max-wd:text-[13px]">
                    Joined {date?.slice(8, 10)}{" "}
                    {this.props.month[date?.slice(5, 7)]} {date?.slice(0, 4)}
                  </p>
                </div>
              </div>
            </div>
            <div className="max-w-[475px] ml-auto w-full -mt-5 wt:max-wd:ml-0 wm:max-wd:mt-3">
              <p className="font-normal opacity-75 mb-8 ">
                {this.props.responseData?.bio?.length
                  ? this.props.responseData?.bio
                  : "This profile has no bio"}
              </p>
              <div className="flex justify-between px-10 py-7 bg-[#F6F8FF] dark:bg-[#141D2F] rounded-xl mb-10 wm:max-wd:px-[24px] wm:max-wd:py-[18px]">
                <div>
                  <p className="text-[14px]">Repos</p>
                  <h2 className="text-[24px] font-bold">
                    {this.props.responseData?.public_repos}
                  </h2>
                </div>
                <div>
                  <p className="text-[14px]">Followers</p>
                  <h2 className="text-[24px] font-bold">
                    {this.props.responseData?.followers}
                  </h2>
                </div>
                <div>
                  <p className="text-[14px]">Following</p>
                  <h2 className="text-[24px] font-bold">
                    {this.props.responseData?.following}
                  </h2>
                </div>
              </div>
              <ul className="flex flex-wrap gap-y-3 wm:max-wt:gap-x-1 wm:max-wt:text-[13px]">
                <li className="flex w-[50%] gap-3 items-center">
                  <LocationIcon />
                  <p>
                    {this.props.responseData?.location
                      ? this.props.responseData?.location
                      : "Not Available"}
                  </p>
                </li>
                <li className="flex w-[50%] gap-3 items-center">
                  <TwitterIcon />
                  <p>
                    {this.props.responseData?.twitter_username
                      ? this.props.responseData?.twitter_username
                      : "Not Available"}
                  </p>
                </li>
                <li className="flex w-[50%] gap-3 items-center">
                  <LinkIcon className="flex-shrink-0"/>
                  <a
                    href={this.props.responseData?.html_url}
                    target="_blank"
                    className="hover:underline"
                  >
                    {this.props.responseData?.html_url
                      ? this.props.responseData?.html_url.slice(19, 40)
                      : "Not Available"}
                  </a>
                </li>
                <li className="flex w-[50%] gap-3 items-center">
                  <WorkIcon />
                  <p>
                    {this.props.responseData?.company
                      ? this.props.responseData?.company
                      : "Not Available"}
                  </p>
                </li>
              </ul>
            </div>
          </>
        ) : (
          <div>
            <p>Nothing too see ...</p>
          </div>
        )}
      </div>
    );
  }
}

ResultContainer.propTypes = {
  isDefined: PropTypes.bool,
  responseData: PropTypes.object,
  month: PropTypes.object,
};
