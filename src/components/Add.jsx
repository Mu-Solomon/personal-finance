import React, { useState } from "react";

const Modal = ({
  showModal,
  closeModal,
  record,
  handleRecord,
  saveRecord,
  handleTag,
}) => {
  const modalClassName = showModal ? "block" : "hidden";
  return (
    <div className={`fixed inset-0 bg-black bg-opacity-50 ${modalClassName}`}>
      <div className="container mx-auto p-8 w-2/3">
        <div className="custom-modal bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col overflow-y-auto max-h-screen overflow-hidden">
          <p className="font-extrabold text-3xl text-center">Add New Record</p>
          <div className="mx-20">
            <div className="mb-8">
              <label
                htmlFor="notes"
                className="block text-gray-700 text-sm mb-2"
              >
                NOTES
              </label>
              <div className="flex items-center">
                <input
                  id="notes"
                  name="notes"
                  className="border font-bold  rounded-sm w-full py-4 px-6 text-gray-700 leading-tight focus:border-indigo-600 focus:shadow-outline"
                  type="text"
                  placeholder="Your Notes"
                  value={record?.notes || ""}
                  onChange={(event) =>
                    handleRecord("notes", event.target.value)
                  }
                />
              </div>
            </div>
            <div className="mb-8">
              <label
                htmlFor="date"
                className="block text-gray-700 text-sm mb-2"
              >
                DATE
              </label>
              <div className="flex items-center">
                <input
                  id="date"
                  name="date"
                  className="border font-bold  rounded-sm w-full py-4 px-6 text-gray-700 leading-tight focus:border-indigo-600 focus:shadow-outline"
                  type="date"
                  placeholder="Your Notes"
                  value={record?.date || ""}
                  onChange={(event) => handleRecord("date", event.target.value)}
                />
              </div>
            </div>{" "}
            <div className="mb-8">
              <label
                htmlFor="cashIn"
                className="block text-gray-700 text-sm mb-2"
              >
                CASH IN
              </label>
              <div className="flex items-center">
                <input
                  id="cashIn"
                  name="cashIn"
                  className="border font-bold  rounded-sm w-full py-4 px-6 text-gray-700 leading-tight focus:border-indigo-600 focus:shadow-outline"
                  type="text"
                  placeholder="Money received"
                  value={record?.cashIn || ""}
                  /* onChange={handleCashInChange} */
                  onChange={(event) =>
                    handleRecord("cashIn", event.target.value)
                  }
                />
              </div>
            </div>{" "}
            <div className="mb-8">
              <label
                htmlFor="cashSaved"
                className="block text-gray-700 text-sm mb-2"
              >
                CASH SAVED
              </label>
              <div className="flex items-center">
                <input
                  id="cashSaved"
                  name="cashSaved"
                  className="border font-bold  rounded-sm w-full py-4 px-6 text-gray-700 leading-tight focus:border-indigo-600 focus:shadow-outline"
                  type="text"
                  placeholder="Money saved"
                  value={record?.cashSaved || ""}
                  /* onChange={handleCashSavedChange} */
                  onChange={(event) =>
                    handleRecord("cashSaved", event.target.value)
                  }
                />
              </div>
            </div>{" "}
            <div className="mb-8">
              <label htmlFor="tag" className="block text-gray-700 text-sm mb-2">
                TAG
              </label>
              <div className="flex items-center">
                <span
                  onClick={() => handleTag("PEWOSA")}
                  className="bg-blue-500 text-white px-1 py-1 rounded hover:bg-blue-700 hover:cursor-pointer hover:text-white text-xs"
                >
                  PEWOSA
                </span>
                <span
                  onClick={() => handleTag("Personal")}
                  className="bg-green-800 text-white px-1 py-1 ml-3 rounded hover:bg-green-900 hover:cursor-pointer hover:text-white text-xs"
                >
                  Personal
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <button
              onClick={saveRecord}
              className="bg-black hover:bg-gray-700 text-white font-bold py-4 mb-3 px-12 rounded-full focus:outline-none focus:shadow-outline"
            >
              <span>Finish</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
