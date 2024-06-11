import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Donut from "./Donut";
import "./wiseStyle.css";

function PestleWise() {
  const [pestles, setPestles] = useState([]);

  // const url = "http://localhost:3000/fields";
  const url = "https://dashboard-react-server.onrender.com/fields";

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

  return (
    <div className="wise-list">
      <div className="title-area">
        <h2 className="wise-title">Field Wise</h2>
        <Link to={`/`}>
          <p className="back-button">
            <i className="bi bi-house"></i>Back
          </p>
        </Link>
      </div>
      <div className="body-area">
        <div className="pestle-list">
          <ul className="">
            {pestles
              .filter((pestle) => pestle._id !== "")
              .map((pestle, index) => (
                <li className="list-items" key={index}>
                  {pestle._id}
                </li>
              ))}
          </ul>
        </div>
        <div className="donut">
          <Donut />
        </div>
      </div>
    </div>
  );
}

export default PestleWise;
