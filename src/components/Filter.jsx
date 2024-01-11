import React from "react";

import up from "../assets/svg/up.svg";
import down from "../assets/svg/down.svg";
import cashIn from "../assets/svg/cash-in.svg";
import cashSaved from "../assets/svg/cash-saved.svg";

function Filter(props) {
  return (
    <div className="flex gap-6">
      <button
        onClick={(event) => props.handleFilter(event.target.textContent)}
        className={`rounded-full border ${
          props.activeSort === "Date & Time"
            ? "border-blue-500"
            : "border-black"
        } flex items-center my-4 px-2`}
      >
        {props.sortOrder.date === "asc" && (
          <img src={down} alt="downIcon" className="w-4" />
        )}

        {props.sortOrder.date === "desc" && (
          <img src={up} alt="upIcon" className="w-4" />
        )}

        <span
          className={`text-sm ml-1 ${
            props.activeSort === "Date & Time" ? "text-blue-500" : ""
          }`}
        >
          Date & Time
        </span>
      </button>
      <button
        onClick={(event) => props.handleFilter(event.target.textContent)}
        className={`rounded-full border ${
          props.activeSort === "Cash In" ? "border-blue-500" : "border-black"
        } flex items-center my-4 px-2`}
      >
        <img src={cashIn} alt="downIcon" className="w-4 " />

        <span
          className={`text-sm ml-1 ${
            props.activeSort === "Cash In" ? "text-blue-500" : ""
          }`}
        >
          Cash In
        </span>
        {props.sortOrder.cashIn && (
          <span className="ml-2">
            {props.sortOrder.cashIn === "desc" ? "🔽" : "🔼"}
          </span>
        )}
      </button>
      <button
        onClick={(event) => props.handleFilter(event.target.textContent)}
        className={`rounded-full border ${
          props.activeSort === "Cash Saved" ? "border-blue-500" : "border-black"
        } flex items-center my-4 px-2`}
      >
        <img src={cashSaved} alt="downIcon" className="w-4 " />
        <span
          className={`text-sm ml-1 ${
            props.activeSort === "Cash Saved" ? "text-blue-500" : ""
          }`}
        >
          Cash Saved
        </span>
        {props.sortOrder.cashSaved && (
          <span className="ml-2">
            {props.sortOrder.cashSaved === "desc" ? "🔽" : "🔼"}
          </span>
        )}
      </button>
    </div>
  );
}

export default Filter;
