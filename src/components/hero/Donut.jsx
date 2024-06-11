import React, { useState, useEffect } from "react";
import axios from "axios";
import { Chart as ChartJS } from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";

function Donut() {
  const [pestles, setPestles] = useState([]);

  const url = "http://localhost:3000/fields";

  async function fetchData() {
    try {
      const response = await axios.get(url);
      const fetchedData = response.data;
      setPestles(fetchedData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const colors = [
    "#FF6384",
    "#36A2EB",
    "#FFCE56",
    "#4BC0C0",
    "#9966FF",
    "#FF9F40",
    "#E8A0BF",
    "#8E44AD",
    "#3498DB",
    "#1ABC9C",
    "#2ECC71",
    "#F1C40F",
  ];

  return (
    <div className="">
      <h4>Fields Distribution</h4>
      <div>
        <Doughnut
          data={{
            labels: pestles
              .filter((sector) => sector._id !== "")
              .map((data) => (data._id ? data._id : null)),
            datasets: [
              {
                label: "Topics",
                data: pestles
                  .filter((sector) => sector._id !== "")
                  .map((data) => (data.count ? data.count : null)),
                backgroundColor: colors,
              },
            ],
          }}
        />
      </div>
    </div>
  );
}

export default Donut;
