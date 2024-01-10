import React, { useState } from "react";

import cashIN from "../assets/svg/cash-in.svg";
import cashSaved from "../assets/svg/cash-saved.svg";
import dateIcon from "../assets/svg/date.svg";
import notesIcon from "../assets/svg/notes.svg";
import time from "../assets/svg/time.svg";
import tag from "../assets/svg/tag.svg";

function Table(props) {
  const [tableItems, setTableItems] = useState(props.tableItems);

  console.log(tableItems);

  return (
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
              Date
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
              <img src={cashSaved} alt="Cash saved icon" className="w-6 mr-1" />
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
              <img src={time} alt="Entry Create icon" className="w-6 mr-1" />
              Entry Create
            </span>
          </th>
        </tr>
      </thead>
      <tbody>
        {tableItems.map((row, key) => (
          <tr className=" h-6 " key={key}>
            <td
              className="border-t border-r border-b pt-2 pb-6  pr-16"
              onClick={props.handleShow}
            >
              <span className="cursor-pointer	border-gray-600 border-b border-dotted">
                {row.notes}
              </span>
            </td>
            <td className="border-t border-r border-b pt-2 pb-6 px-4 pr-10">
              {row.date}
            </td>
            <td className="border-t border-r border-b pt-2 pb-6 px-4 text-right">
              Ugx {row.cashIn.toLocaleString("en-US")}
            </td>
            <td className="border-t border-r border-b pt-2 pb-6 px-4 text-right">
              Ugx {row.cashSaved.toLocaleString("en-US")}
            </td>
            <td className="border-t border-r border-b pt-2 pb-6 px-4 text-center">
              {row.tag == "PEWOSA" ? (
                <span className="bg-blue-500 text-white px-1 py-1 rounded hover:bg-blue-700 hover:text-white text-xs">
                  PEWOSA
                </span>
              ) : (
                <span className="bg-green-800 text-white px-1 py-1 rounded hover:bg-blue-700 hover:text-white text-xs">
                  Personal
                </span>
              )}
            </td>
            <td className="border-t border-l border-bpt-2 pb-6 pl-12">
              {row.entryDate}
            </td>
          </tr>
        ))}
    
      </tbody>
    </table>
  );
}

export default Table;
