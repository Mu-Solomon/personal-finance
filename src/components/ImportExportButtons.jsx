import React from "react";

import importIcon from "../assets/svg/import.svg";
import exportIcon from "../assets/svg/export.svg";

const ExportImportButtons = ({ months, setSortedData }) => {
  const handleExport = () => {
    try {
      const dataToExport = localStorage.getItem("monthsData");

      if (dataToExport) {
        const blob = new Blob([dataToExport], { type: "application/json" });
        const url = URL.createObjectURL(blob);

        const a = document.createElement("a");
        a.href = url;
        a.download = "Financial data.json";

        // Trigger a click event to prompt the user to save the file
        a.click();

        URL.revokeObjectURL(url);
        alert("Data exported successfully!");
      } else {
        alert("No data to export.");
      }
    } catch (error) {
      console.error("Error exporting data:", error);
      alert("Error exporting data.");
    }
  };

  const handleImport = (event) => {
    const fileInput = event.target;
    const file = fileInput.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const importedData = JSON.parse(e.target.result);
          setSortedData(importedData);
          alert("Data imported successfully!");
        } catch (error) {
          console.error("Error importing data:", error);
          alert("Error importing data.");
        }
      };
      reader.readAsText(file);
    }
  };

  return (
    <div className="flex justify-center items-center">
      <b> Export data</b>

      <button onClick={handleExport}>
        <img src={exportIcon} alt="" className="w-5 mx-2" />
      </button>

      <span className="bg-blue-500 rounded-full p-3 mx-4 text-white text-sm">OR</span>
      <label className="file-input-label cursor-pointer flex">
        <b> Import data</b>
        <img src={importIcon} alt="" className="w-5 mx-2" />

        <input
          className="mx-2 hidden" // Hide the default file input
          type="file"
          accept=".json"
          onChange={handleImport}
        />
      </label>
    </div>
  );
};

export default ExportImportButtons;
