import dateIcon from "../assets/svg/date.svg";
import time from "../assets/svg/time.svg";
import tag from "../assets/svg/tag.svg";
import cashIn from "../assets/svg/cash-in.svg";
import cashSaved from "../assets/svg/cash-saved.svg";

import React, { useRef, useState, useEffect } from "react";

import "../styles/ModalBox.css";

function ModalBox(props) {

  useEffect(() => {
    document.addEventListener("mousedown", props.handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", props.handleClickOutside);
    };
  }, []);

  return (
    <React.Fragment>
   {/*    <button
        onClick={props.handleShow}
        class="bg-green-800 text-white m-24 p-4 rounded hover:bg-blue-700 hover:text-white text-xs"
      >
        Personal
      </button> */}

      <div
        ref={props.modalRef}
        className={`animated-div modal ${
          props.show ? "slide-in" : "slide-out"
        } w-1/2 h-screen shadow-xl px-20 py-2 absolute right-0 top-0 bg-white`}
      >
        <h2 className="text-3xl font-extrabold mt-8">Pay in PEWOSA </h2>
        <div className="my-4">
          <table className="w-full">
            <tr className="h-8">
              <span className="flex flex-start">
                <img src={dateIcon} alt="" className="w-6" />
                <td className="font-bold py-2">Date & Time</td>
              </span>
              <td>January 5th Friday, 2024</td>
            </tr>
            <tr className="h-8">
              <span className="flex flex-start">
                <img src={cashIn} alt="" className="w-6" />
                <td className="font-bold py-2">Cash In</td>
              </span>
              <td>Ugx 400,000</td>
            </tr>
            <tr className="h-8">
              <span className="flex flex-start">
                <img src={cashSaved} alt="" className="w-6" />
                <td className="font-bold py-2">Cash saved</td>
              </span>
              <td>Ugx 220,000</td>
            </tr>
            <tr className="h-8">
              <span className="flex flex-start">
                <img src={tag} alt="" className="w-6" />
                <td className="font-bold py-2">Tag</td>
              </span>
              <td>
                <span class="bg-blue-500 text-white px-1 py-1 rounded hover:bg-blue-700 hover:text-white text-xs">
                  PEWOSA
                </span>
              </td>
            </tr>
            <tr className="h-8">
              <span className="flex flex-start">
                <img src={time} alt="" className="w-6" />
                <td className="font-bold py-2">Entry create</td>
              </span>
              <td>Friday 5th January, 2024 6:00PM</td>
            </tr>
          </table>
        </div>
        <hr />
      </div>
    </React.Fragment>
  );
}

export default ModalBox;
