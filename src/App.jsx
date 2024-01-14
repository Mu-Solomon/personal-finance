import monthIcon from "./assets/svg/month.svg";
import financeIcon from "./assets/svg/finance-log.svg";
import cashBookIcon from "./assets/svg/cashbook.svg";
import searchIcon from "./assets/svg/search.svg";
import addIcon from "./assets/svg/add.svg";

import React, { useRef, useState, useEffect } from "react";
import Table from "./components/Table";
import Months from "./components/Months";
import ModalBox from "./components/ModalBox";
import Filter from "./components/Filter";

import "./styles/Table.css";
import Modal from "./components/Add";

function App() {
  /* OPENING UP THE MODAL BOX */
  const [show, setShow] = useState(false); /* Showing Modal */
  const modalRef = useRef();
  const [whatToShow, setWhatToShow] = useState({ cashIn: 4, cashSaved: 0 });

  const handleShow = (item) => {
    setWhatToShow({ ...whatToShow, ...item });
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

  const [monthNumber, setMonthNumber] = useState(new Date().getMonth());
  /* const [monthNumber, setMonthNumber] = useState(2); */

  const months = [
    {
      name: "January",
      colour: "bg-indigo-800",
      days: [
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
          cashIn: 800000,
          cashSaved: 400000,
          tag: "Personal",
          entryDate: formattedDate,
        },
      ],
    },
    {
      name: "February",
      colour: "bg-green-800",
      days: [
        {
          notes: "1st February money ",
          date: shortFormatDate,
          cashIn: 12500000,
          cashSaved: 8750000,
          tag: "Personal",
          entryDate: formattedDate,
        },
        {
          notes: "My initial income",
          date: shortFormatDate,
          cashIn: 14000000,
          cashSaved: 26700000,
          tag: "Personal",
          entryDate: formattedDate,
        },
      ],
    },
    {
      name: "March",
      colour: "bg-pink-500",
      days: [],
    },
    { name: "April", colour: "bg-slate-500", days: [] },
    { name: "May", colour: "bg-amber-500", days: [] },
    { name: "June", colour: "bg-lime-500", days: [] },
    { name: "July", colour: "bg-pink-500", days: [] },
    { name: "August", colour: "bg-purple-500", days: [] },
    { name: "September", colour: "bg-indigo-500", days: [] },
    { name: "October", colour: "bg-teal-500", days: [] },
    { name: "November", colour: "bg-blue-500", days: [] },
    { name: "December", colour: "bg-cyan-500", days: [] },
  ];

  const localStorageKey = "monthsData";

  // Initialize sortedData with data from local storage if available
  const [sortedData, setSortedData] = useState(() => {
    const storedData = localStorage.getItem(localStorageKey);
    return storedData ? JSON.parse(storedData) : months;
  });

  // Save data to localStorage whenever sortedData changes
  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(sortedData));
  }, [sortedData]);
  /* const [sortedData, setSortedData] = useState(months); */
  const [sortOrder, setSortOrder] = useState({
    cashIn: null,
    cashSaved: null,
    date: "asc",
  });

  const [activeSort, setActiveSort] = useState("Date & Time");

  const handleSort = (val) => {
    const newSortedData = [...sortedData];

    if (newSortedData[monthNumber] && newSortedData[monthNumber].days) {
      const sortingFunction = (a, b, prop) => {
        if (prop === "date") {
          const dateA = new Date(a[prop]) || new Date(0);
          const dateB = new Date(b[prop]) || new Date(0);
          return sortOrder[prop] === "desc" ? dateB - dateA : dateA - dateB;
        } else {
          const valueA = a[prop] || 0;
          const valueB = b[prop] || 0;
          return sortOrder[prop] === "desc" ? valueB - valueA : valueA - valueB;
        }
      };

      switch (val) {
        case "Date & Time":
          newSortedData[monthNumber].days.sort((a, b) =>
            sortingFunction(a, b, "date")
          );
          setSortOrder({
            ...sortOrder,
            date: sortOrder.date === "desc" ? "asc" : "desc",
            cashIn: null,
            cashSaved: null,
          });
          break;
        case "Cash In":
          newSortedData[monthNumber].days.sort((a, b) =>
            sortingFunction(a, b, "cashIn")
          );
          setSortOrder({
            ...sortOrder,
            cashIn: sortOrder.cashIn === "desc" ? "asc" : "desc",
            cashSaved: null,
            date: null,
          });
          break;
        case "Cash Saved":
          newSortedData[monthNumber].days.sort((a, b) =>
            sortingFunction(a, b, "cashSaved")
          );
          setSortOrder({
            ...sortOrder,
            cashIn: null,
            cashSaved: sortOrder.cashSaved === "desc" ? "asc" : "desc",
            date: null,
          });
          break;
        default:
          // Handle other cases if needed
          break;
      }
    }

    console.log(val);
    setSortedData(newSortedData);
    setActiveSort(val);
  };

  /* SHOWING THE TABLE ITEMS */
  /*  const [monthNumber, setMonthNumber] = useState(0); */
  var monthToShow = sortedData[monthNumber].days;

  /* SHOW THE MONTH DATA THAT IS CLICKED ON */
  const showMonthData = (value) => {
    setMonthNumber(value);
  };

  const cashInSum = monthToShow
    .reduce((accumulator, currentValue) => {
      return accumulator + currentValue.cashIn;
    }, 0)
    .toLocaleString("en-US");

  const cashSavedSum = monthToShow
    .reduce((accumulator, currentValue) => {
      return accumulator + currentValue.cashSaved;
    }, 0)
    .toLocaleString("en-US");

  const monthTitle = months[monthNumber].name;

  /* SHOW OR HIDE FILTER */
  const [showFilter, setShowFilter] = useState(false);
  const handleShowFilter = () => {
    setShowFilter(!showFilter);
  };

  /* SHOW OR HID INPUT FOR SEARCH */

  const [isInputVisible, setIsInputVisible] = useState(false);
  const [width, setWidth] = useState("w-0 opacity-0");

  const handleShowInput = () => {
    setIsInputVisible(!isInputVisible);
    setWidth(isInputVisible ? "w-0 opacity-0" : "w-50 opacity-1");
    console.log(width);
  };

  const [filteredData, setFilteredData] = useState([...monthToShow]);
  const [wordEntered, setWordEntered] = useState("");

  const handleSearch = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);

    const filterData = [...months];
    const filteredDays = filterData[monthNumber].days.filter((value) => {
      return value.notes
        .toLocaleLowerCase()
        .includes(searchWord.toLocaleLowerCase());
    });

    // Create a new array with the filtered days
    const updatedMonths = filterData.map((month, index) => {
      if (index === monthNumber) {
        return {
          ...month,
          days: filteredDays,
        };
      }
      return month;
    });

    // Set the updated array to the state
    setSortedData(updatedMonths);
  };

  const setMonthToShow = (filteredData) => {
    // Update monthToShow based on filteredData or other logic as needed
    monthToShow = filteredData;
  };

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  //HANGLING ADDING NEW RECORD
  const entryDate =
    new Date().toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    }) +
    " at " +
    new Date().toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric",
    });
  const [record, setRecord] = useState({
    notes: "",
    date: "",
    cashIn: "",
    cashSaved: "",
    entryDate,
    tag: "",
  });

  const formatNumber = (value) => {
    return value.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const handleRecord = (field, value) => {
    setRecord((prevRecord) => ({
      ...prevRecord,
      [field]:
        field === "cashIn" || field === "cashSaved"
          ? formatNumber(value)
          : value,
    }));
  };

  const saveRecord = () => {
    const convertedRecord = {
      ...record,
      cashIn: parseFloat(record.cashIn.replace(/,/g, "")),
      cashSaved: parseFloat(record.cashSaved.replace(/,/g, "")),
      date: new Date(record.date).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      }),
      entryDate,
    };

    if (
      convertedRecord.notes &&
      convertedRecord.date &&
      convertedRecord.cashIn &&
      convertedRecord.cashSaved &&
      convertedRecord.tag
    ) {
      setSortedData((prevData) => {
        const convertedRecords = [...prevData];
        convertedRecords[monthNumber].days.unshift(convertedRecord);
        return convertedRecords;
      });

      closeModal();
    }
    console.log(convertedRecord);
  };

  const handleTag = (text) => {
    setRecord((prevRecord) => ({
      ...prevRecord,
      tag: text,
    }));
  };

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
          <Months
            months={sortedData}
            showMonthData={showMonthData}
            monthNumber={monthNumber}
          />
        </div>
        <hr className="my-8" />
        <p className="font-extrabold text-2xl py-4">{monthTitle}</p>
        <div className="flex justify-between ">
          <span className="flex items-center border-b-2 border-gray-600 w-24">
            <img src={cashBookIcon} alt="Month icon" className="w-4" />
            <p className="font-bold text-md ml-2">Cashbook</p>
            <button onClick={openModal}>
              <img src={addIcon} className="w-10 ml-6 " alt="Add record" />
            </button>
          </span>

          <span className="flex">
            <button
              className="text-sm px-1 rounded-sm hover:bg-slate-100"
              onClick={handleShowFilter}
            >
              Filter
            </button>
            <button onClick={handleShowInput}>
              <img src={searchIcon} className="w-5 ml-3 hover:bg-slate-100" />
            </button>

            <input
              type="text"
              name="Type here to search..."
              placeholder="Type here to search..."
              id=""
              value={wordEntered}
              className={`px-2 py-1 border-gray-300 transition-all ${width} duration-300 ease-in-out`}
              onChange={(event) => handleSearch(event)}
            />
          </span>
        </div>

        <hr className="" />
        {showFilter ? (
          <Filter
            handleFilter={handleSort}
            sortOrder={sortOrder}
            activeSort={activeSort}
          />
        ) : (
          ""
        )}

        {/* Table here */}
        <Table
          handleShow={handleShow}
          tableItems={monthToShow}
          cashInSum={cashInSum}
          cashSavedSum={cashSavedSum}
          showFilter={showFilter}
        />

        <ModalBox
          handleClickOutside={handleClickOutside}
          handleShow={handleShow}
          show={show}
          whatToShow={whatToShow}
          modalRef={modalRef}
        />
        <Modal
          showModal={showModal}
          closeModal={closeModal}
          record={record}
          handleRecord={handleRecord}
          saveRecord={saveRecord}
          handleTag={handleTag}
        />
      </div>
    </React.Fragment>
  );
}

export default App;
