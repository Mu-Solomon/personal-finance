import React from "react";

function Months(props) {
  console.log(props.months);
  return (
    <div id="month-cards" className="grid grid-cols-6 gap-4 mt-5">
      {props.months.map((month, key) => (
        <div id="card" className="shadow-md px-4 py-2  rounded">
          <span className="flex items-center justify-start gap-2">
            <div className="relative">
              <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
            </div>
            <h2 className="font-bold">{month.name}</h2>
          </span>

          <p className="py-2 text-sm">
            Income: Ugx{" "}
            {month.days
              .reduce((accumulator, previous) => {
                return accumulator + previous.cashIn;
              }, 0)
              .toLocaleString("en-US")}
          </p>
          <p className="py-2 text-sm">
            Savings: Ugx{" "}
            {month.days
              .reduce((accumulator, previous) => {
                return accumulator + previous.cashSaved;
              }, 0)
              .toLocaleString("en-US")}
          </p>
        </div>
      ))}
      <div id="card" className="shadow-md px-4 py-2  rounded">
        <span className="flex items-center justify-start gap-2">
          <div className="relative">
            <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
          </div>
          <h2 className="font-bold">January</h2>
        </span>

        <p className="py-2 text-sm">Income: Ugx {props.cashInSum}</p>
        <p className="py-2 text-sm">Savings: Ugx {props.cashSavedSum}</p>
      </div>
    </div>
  );
}

export default Months;
