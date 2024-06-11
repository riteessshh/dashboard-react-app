import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import "./bchart.css";

const availableYAxisOptions = [
  {
    name: "Intensity",
    key: "intensity",
  },
  {
    name: "Likelihood",
    key: "likelihood",
  },
  {
    name: "Relevance",
    key: "relevance",
  },
  {
    name: "End Year",
    key: "end_year",
  },
  {
    name: "Start Year",
    key: "start_year",
  },
];

function BChart(props) {
  const sourceData = props.info;
  const [selectedYAxis, setSelectedYAxis] = useState(availableYAxisOptions[0]);

  const handleYAxisChange = (event) => {
    const selectedOption = availableYAxisOptions.find(
      (option) => option.key === event.target.value
    );
    setSelectedYAxis(selectedOption);
  };

  return (
    <div className="chart-main">
      <h3>Real-time Data</h3>

      <select
        className="select-button"
        value={selectedYAxis.key}
        onChange={handleYAxisChange}
      >
        {availableYAxisOptions.map((option) => (
          <option key={option.key} value={option.key}>
            {option.name}
          </option>
        ))}
      </select>

      <div className="bchart">
        <Bar
          data={{
            labels: sourceData.map((data) =>
              data.country ? data.country : null
            ),
            datasets: [
              {
                label: selectedYAxis.name,
                data: sourceData.map((data) =>
                  data[selectedYAxis.key] ? data[selectedYAxis.key] : null
                ),
                backgroundColor: "#E8A0BF",
              },
            ],
          }}
        />
      </div>
    </div>
  );
}

export default BChart;
