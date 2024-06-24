import { Component } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export class Skleton extends Component {
  render() {
    return (
      <div className="flex rounded-[15px] bg-[#FEFEFE] shadow-[0px_16px_30px_-10px_rgba(70,96,187,0.20)] dark:bg-[#1E2A47] px-[32px] py-[22px] flex-col">
        <>
          <div className="flex gap-10 wt:max-wd:mb-5">
            <Skeleton className=" w-[117px] h-[117px] rounded-full  wm:max-wd:w-[70px] wm:max-wd:h-[70px]" />
            <div className="flex  gap-40 flex-wrap gap-y-0">
              <div>
                <h2>
                  <Skeleton className="w-[180px] h-5" />
                </h2>
                <a>
                  <Skeleton className="w-[120px] h-3" />
                </a>
              </div>
              <div className="flex-1">
                <Skeleton className="w-[70px] h-5 mt-3" />
              </div>
            </div>
          </div>
          <div className="max-w-[475px] ml-auto w-full -mt-5 wt:max-wd:ml-0 wm:max-wd:mt-3">
            <p className="font-normal opacity-75 mb-8 ">
              <Skeleton count={3.5} />
            </p>
            <div className="flex justify-between px-10 py-7 bg-[#F6F8FF] dark:bg-[#141D2F] rounded-xl mb-10 wm:max-wd:px-[24px] wm:max-wd:py-[18px]">
              <div>
                <p className="w-[70px]">
                  <Skeleton />
                </p>
                <h2 className="text-[24px] font-bold">
                  <Skeleton />
                </h2>
              </div>
              <div>
                <p className="w-[70px]">
                  <Skeleton />
                </p>
                <h2 className="text-[24px] font-bold">
                  <Skeleton />
                </h2>
              </div>
              <div>
                <p className="w-[70px]">
                  <Skeleton />
                </p>
                <h2 className="text-[24px] font-bold">
                  <Skeleton />
                </h2>
              </div>
            </div>
            <ul className="flex flex-wrap gap-y-3 wm:max-wt:gap-x-1 wm:max-wt:text-[13px]">
              <li className="flex w-[50%] gap-3 items-center">
                <Skeleton className="w-4 h-4 " />
                <p>
                  <Skeleton className="w-[150px] h-4" />
                </p>
              </li>
              <li className="flex w-[50%] gap-3 items-center">
                <Skeleton className="w-4 h-4 " />
                <p>
                  <Skeleton className="w-[150px] h-4" />
                </p>
              </li>
              <li className="flex w-[50%] gap-3 items-center">
                <Skeleton className="w-4 h-4 " />
                <a target="_blank" className="hover:underline">
                  <Skeleton className="w-[150px] h-4" />
                </a>
              </li>
              <li className="flex w-[50%] gap-3 items-center">
                <Skeleton className="w-4 h-4 " />
                <p>
                  <Skeleton className="w-[150px] h-4" />
                </p>
              </li>
            </ul>
          </div>
        </>
      </div>
    );
  }
}
