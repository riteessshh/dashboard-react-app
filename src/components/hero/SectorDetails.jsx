import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import "./sectorDetails.css";

function SectorDetails() {
  const [cards, setCards] = useState([]);

  const url = "http://localhost:3000/data";

  async function fetchData() {
    try {
      const response = await axios.get(url);
      const fetchedData = response.data;
      setCards(fetchedData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const [selectedSector, setSelectedSector] = useState(null);
  const { sector } = useParams();

  useEffect(() => {
    setSelectedSector(sector);
  }, [sector]);

  const filteredItems = cards.filter((item) => item.sector === selectedSector);

  const topicList = filteredItems.map((item) => (
    <li key={item.id || Math.random()}>
      {item.topic} - {item.title}
    </li>
  ));

  return (
    <div className="sector-main">
      <h2>
        <Link to={`/`}>{selectedSector} sector</Link>
        <Link to={`/`}>
          <p>
            <i class="bi bi-house"></i>Back
          </p>
        </Link>
      </h2>
      <h4>Topics and their Titles</h4>
      <div className="list-area">
        {filteredItems.length > 0 ? (
          <ul className="list-main">{topicList}</ul>
        ) : (
          <p>No items found for this sector.</p>
        )}
      </div>
    </div>
  );
}

export default SectorDetails;
