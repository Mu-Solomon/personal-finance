import monthIcon from "./assets/svg/month.svg";
import financeIcon from "./assets/svg/finance-log.svg";
import cashBookIcon from "./assets/svg/cashbook.svg";

import React, { useRef, useState, useEffect } from "react";
import Table from "./components/Table";
import Months from "./components/Months";
import ModalBox from "./components/ModalBox";

function App() {
  /* OPENING UP THE MODAL BOX */
  const [show, setShow] = useState(false);
  const modalRef = useRef();

  const handleShow = () => {
    setShow(!show);
  };

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setShow(false);
    }
  };

  /* Formatting the date to put in the table */

  const formattedDate = new Date().toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  const shortDate = new Date();
  const shortFormatDate = shortDate.toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  /* SHOWING THE TABLE ITEMS */
  const [tableItems, setTableItems] = useState([
    {
      notes: "Sente z'ekibiina ",
      date: shortFormatDate,
      cashIn: 500000,
      cashSaved: 350000,
      tag: "PEWOSA",
      entryDate: formattedDate,
    },
    {
      notes: "Sente z'awaka",
      date: shortFormatDate,
      cashIn: 100000,
      cashSaved: 400000,
      tag: "Personal",
      entryDate: formattedDate,
    },
  ]);

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
          {/* Month cards here */}
          <Months />
        </div>
        <hr className="my-8" />

        <span className="flex border-b-2 border-gray-600 w-24">
          <img src={cashBookIcon} alt="Month icon" className="w-4" />
          <p className="font-bold text-md ml-2">Cashbook</p>
        </span>
        <hr className="" />
        <p className="font-extrabold text-2xl py-4">January</p>
        {/* Table here */}
        <Table handleShow={handleShow} tableItems={tableItems} />
        <ModalBox
          handleClickOutside={handleClickOutside}
          handleShow={handleShow}
          show={show}
        />
      </div>
    </React.Fragment>
  );
}

export default App;
