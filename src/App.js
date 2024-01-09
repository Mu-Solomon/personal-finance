import monthIcon from "./assets/svg/month.svg";
import financeIcon from "./assets/svg/finance-log.svg";
import cashBookIcon from "./assets/svg/cashbook.svg";
import cashIN from "./assets/svg/cash-in.svg";
import cashSaved from "./assets/svg/cash-saved.svg";
import dateIcon from "./assets/svg/date.svg";
import notesIcon from "./assets/svg/notes.svg";
import time from "./assets/svg/time.svg";
import tag from "./assets/svg/tag.svg";

import React, { useState } from "react";

function App() {
  const [table, setTable] = useState([{}]);
  return (
    <React.Fragment>
      <div className="App m-8">
        <img src={financeIcon} className="w-20 h-20 mb-6" />
        <div className="header">
          <h2 className="text-black font-extrabold text-5xl	">
            Personal Finance Tracker
          </h2>
        </div>
        <div id="months-outline" className="mt-8">
          <span className="flex">
            <img src={monthIcon} alt="Month icon" className="w-6" />
            <p className="font-bold text-3xl ml-2">Months</p>
          </span>

          <div id="month-cards" className="grid grid-cols-6 gap-4 mt-5">
            <div id="card" className="shadow-md px-4 py-2  rounded">
              <span className="flex items-center justify-start gap-2">
                <div class="relative">
                  <div class="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                    <div class="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>
                <h2 className="font-bold">January</h2>
              </span>

              <p className="py-2 text-sm">Income: Ugx 32,000,000</p>
              <p className="py-2 text-sm">Savings: Ugx 4,000,000</p>
            </div>
            <div id="card" className="shadow-md px-4 py-2  rounded">
              <span className="flex items-center justify-start gap-2">
                <div class="relative">
                  <div class="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                    <div class="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>
                <h2 className="font-bold">January</h2>
              </span>

              <p className="py-2 text-sm">Income: Ugx 32,000,000</p>
              <p className="py-2 text-sm">Savings: Ugx 4,000,000</p>
            </div>{" "}
            <div id="card" className="shadow-md px-4 py-2  rounded">
              <span className="flex items-center justify-start gap-2">
                <div class="relative">
                  <div class="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                    <div class="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>
                <h2 className="font-bold">January</h2>
              </span>

              <p className="py-2 text-sm">Income: Ugx 32,000,000</p>
              <p className="py-2 text-sm">Savings: Ugx 4,000,000</p>
            </div>{" "}
            <div id="card" className="shadow-md px-4 py-2  rounded">
              <span className="flex items-center justify-start gap-2">
                <div class="relative">
                  <div class="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                    <div class="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>
                <h2 className="font-bold">January</h2>
              </span>

              <p className="py-2 text-sm">Income: Ugx 32,000,000</p>
              <p className="py-2 text-sm">Savings: Ugx 4,000,000</p>
            </div>{" "}
            <div id="card" className="shadow-md px-4 py-2  rounded">
              <span className="flex items-center justify-start gap-2">
                <div class="relative">
                  <div class="w-4 h-4 bg-orange-500 rounded-full flex items-center justify-center">
                    <div class="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>
                <h2 className="font-bold">January</h2>
              </span>

              <p className="py-2 text-sm">Income: Ugx 32,000,000</p>
              <p className="py-2 text-sm">Savings: Ugx 4,000,000</p>
            </div>{" "}
            <div id="card" className="shadow-md px-4 py-2  rounded">
              <span className="flex items-center justify-start gap-2">
                <div class="relative">
                  <div class="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                    <div class="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>
                <h2 className="font-bold">January</h2>
              </span>

              <p className="py-2 text-sm">Income: Ugx 32,000,000</p>
              <p className="py-2 text-sm">Savings: Ugx 4,000,000</p>
            </div>{" "}
            <div id="card" className="shadow-md px-4 py-2  rounded">
              <span className="flex items-center justify-start gap-2">
                <div class="relative">
                  <div class="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                    <div class="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>
                <h2 className="font-bold">January</h2>
              </span>

              <p className="py-2 text-sm">Income: Ugx 32,000,000</p>
              <p className="py-2 text-sm">Savings: Ugx 4,000,000</p>
            </div>{" "}
            <div id="card" className="shadow-md px-4 py-2  rounded">
              <span className="flex items-center justify-start gap-2">
                <div class="relative">
                  <div class="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                    <div class="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>
                <h2 className="font-bold">January</h2>
              </span>

              <p className="py-2 text-sm">Income: Ugx 32,000,000</p>
              <p className="py-2 text-sm">Savings: Ugx 4,000,000</p>
            </div>{" "}
            <div id="card" className="shadow-md px-4 py-2  rounded">
              <span className="flex items-center justify-start gap-2">
                <div class="relative">
                  <div class="w-4 h-4 bg-yellow-500 rounded-full flex items-center justify-center">
                    <div class="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>
                <h2 className="font-bold">January</h2>
              </span>

              <p className="py-2 text-sm">Income: Ugx 32,000,000</p>
              <p className="py-2 text-sm">Savings: Ugx 4,000,000</p>
            </div>{" "}
            <div id="card" className="shadow-md px-4 py-2  rounded">
              <span className="flex items-center justify-start gap-2">
                <div class="relative">
                  <div class="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                    <div class="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>
                <h2 className="font-bold">January</h2>
              </span>

              <p className="py-2 text-sm">Income: Ugx 32,000,000</p>
              <p className="py-2 text-sm">Savings: Ugx 4,000,000</p>
            </div>{" "}
            <div id="card" className="shadow-md px-4 py-2  rounded">
              <span className="flex items-center justify-start gap-2">
                <div class="relative">
                  <div class="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                    <div class="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>
                <h2 className="font-bold">January</h2>
              </span>

              <p className="py-2 text-sm">Income: Ugx 32,000,000</p>
              <p className="py-2 text-sm">Savings: Ugx 4,000,000</p>
            </div>{" "}
            <div id="card" className="shadow-md px-4 py-2  rounded">
              <span className="flex items-center justify-start gap-2">
                <div class="relative">
                  <div class="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                    <div class="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>
                <h2 className="font-bold">January</h2>
              </span>

              <p className="py-2 text-sm">Income: Ugx 32,000,000</p>
              <p className="py-2 text-sm">Savings: Ugx 4,000,000</p>
            </div>
          </div>
        </div>
        <hr className="my-8" />

        <span className="flex border-b-2 border-gray-600 w-24">
          <img src={cashBookIcon} alt="Month icon" className="w-4" />
          <p className="font-bold text-md ml-2">Cashbook</p>
        </span>
        <hr className="" />
        <p className="font-extrabold text-2xl py-4">January</p>
        {/* Table here */}
        <table className="table-auto border-collapse w-full">
          <thead>
            <tr>
              <th className="text-left">
                <span className="flex items-center">
                  <img src={notesIcon} alt="Notes icon" className="w-4 mr-1" />
                  Notes
                </span>
              </th>
              <th className="text-left">
                <span className="flex items-center">
                  <img
                    src={dateIcon}
                    alt="Date and time icon"
                    className="w-6 mr-1"
                  />
                  Date and time
                </span>
              </th>
              <th className="text-left">
                <span className="flex items-center">
                  <img src={cashIN} alt="Cash In icon" className="w-6 mr-1" />
                  Cash In
                </span>
              </th>
              <th className="text-left">
                <span className="flex items-center">
                  <img
                    src={cashSaved}
                    alt="Cash saved icon"
                    className="w-6 mr-1"
                  />
                  Cash saved
                </span>
              </th>
              <th className="text-left">
                <span className="flex items-center">
                  <img src={tag} alt="Cash saved icon" className="w-6 mr-1" />
                  Tag
                </span>
              </th>
              <th className="text-left">
                <span className="flex items-center">
                  <img
                    src={time}
                    alt="Entry Create icon"
                    className="w-6 mr-1"
                  />
                  Entry Create
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className=" h-6 ">
              <td className="border-t border-r border-b pt-2 pb-6  pr-16">
                <span className="cursor-pointer	border-gray-600 border-b border-dotted">
                  Pay in PEWOSA
                </span>
              </td>
              <td className="border-t border-r border-b pt-2 pb-6 px-4 pr-10">
                Friday, January 5th, 2024 4:00PM
              </td>
              <td className="border-t border-r border-b pt-2 pb-6 px-4 text-right">
                Ugx 400,000
              </td>
              <td className="border-t border-r border-b pt-2 pb-6 px-4 text-right">
                Ugx 220,000
              </td>
              <td className="border-t border-r border-b pt-2 pb-6 px-4 text-center">
                <span class="bg-green-800 text-white px-1 py-1 rounded hover:bg-blue-700 hover:text-white text-xs">
                  Personal
                </span>
              </td>
              <td className="border-t border-l border-bpt-2 pb-6 pl-12">
                January 5th, 2024 6:00PM
              </td>
            </tr>
            <tr className=" h-6">
              <td className="border-t border-r border-b pt-2 pb-6  pr-16">
                Pay in PEWOSA
              </td>
              <td className="border-t border-r border-b pt-2 pb-6 px-4 pr-10">
                Friday, January 5th, 2024 4:00PM
              </td>
              <td className="border-t border-r border-b pt-2 pb-6 px-4 text-right">
                Ugx 400,000
              </td>
              <td className="border-t border-r border-b pt-2 pb-6 px-4 text-right">
                Ugx 220,000
              </td>
              <td className="border-t border-r border-b pt-2 pb-6 px-4 text-center">
                <span class="bg-blue-500 text-white px-1 py-1 rounded hover:bg-blue-700 hover:text-white text-xs">
                  PEWOSA
                </span>
              </td>
              <td className="border-t border-l border-bpt-2 pb-6 pl-12">
                January 5th, 2024 6:00PM
              </td>
            </tr>
            <tr className="  h-6">
              <td className="border-t border-r border-b pt-2 pb-6 pr-16">
                Pay in PEWOSA
              </td>
              <td className="border-t border-r border-b pt-2 pb-6 px-4 pr-10">
                Friday, January 5th, 2024 4:00PM
              </td>
              <td className="border-t border-r border-b pt-2 pb-6 px-4 text-right">
                Ugx 400,000
              </td>
              <td className="border-t border-r border-b pt-2 pb-6 px-4 text-right">
                Ugx 220,000
              </td>
              <td className="border-t border-r border-b pt-2 pb-6 px-4 text-center">
                <span class="bg-green-800 text-white px-1 py-1 rounded hover:bg-blue-700 hover:text-white text-xs">
                  Personal
                </span>
              </td>
              <td className="border-t border-l border-b pt-2 pb-6 pl-12">
                January 5th, 2024 6:00PM
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
}

export default App;
