import React from "react";

function Months(props) {
  const nonEmptyMonths = props.months
    .map((month, index) => ({
      ...month,
      isVisible: month.days.length > 0 || index === props.monthNumber,
    }))
    .filter((month) => month.isVisible);

  return (
    <div id="month-cards" className="grid grid-cols-6 gap-4 mt-5">
      {nonEmptyMonths.map((month, key) => (
        <button
          id="card"
          className="shadow-md px-4 py-2  rounded hover:shadow-lg focus:border-2 focus:border-gray-700"
          key={key}
          onClick={() => props.showMonthData(key)}
        >
          <span className="flex items-center justify-start gap-2">
            <div className="relative">
              <div
                className={`w-4 h-4 ${month.colour} rounded-full flex items-center justify-center`}
              >
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
            </div>
            <h2 className="font-bold">{month.name}</h2>
          </span>

          <p className="py-2 text-sm">
            <b>Income:</b> Ugx{" "}
            {month.days
              .reduce((accumulator, previous) => {
                return accumulator + previous.cashIn;
              }, 0)
              .toLocaleString("en-US")}
          </p>
          <p className="py-2 text-sm">
            <b>Savings:</b> Ugx{" "}
            {month.days
              .reduce((accumulator, previous) => {
                return accumulator + previous.cashSaved;
              }, 0)
              .toLocaleString("en-US")}
          </p>
        </button>
      ))}
    </div>
  );
}

export default Months;
