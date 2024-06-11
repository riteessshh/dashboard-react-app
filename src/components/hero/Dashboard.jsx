import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./dashboard.css";
import axios from "axios";
import TopicCard from "./TopicCard";
import BChart from "./Bchart";
import Donut from "./Donut";
import SectorCard from "./SectorCard";

function Dashboard() {
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
    if (!cards.length) {
      fetchData();
    }
  }, []);

  return (
    <div>
      <section className="dashboard section">
        <div className="mainChart">
          <BChart info={cards} />
        </div>
        <div className="sideChart">
          <div className="sectorCard">
            <SectorCard />
          </div>
          <div className="donutCard">
            <Donut />
          </div>
        </div>
        <div className="cardBox">
          <div className="cardItem">
            <Link to={`/countries`}>
              <TopicCard cards={cards} title={"Countries"} rKey={"country"} />
            </Link>
          </div>
          <div className="cardItem">
            <Link to={`/topics`}>
              <TopicCard cards={cards} title={"Topics"} rKey={"topic"} />
            </Link>
          </div>
          <div className="cardItem">
            <Link to={`/pestles`}>
              <TopicCard cards={cards} title={"Fields"} rKey={"pestle"} />
            </Link>
          </div>
          <div className="cardItem">
            <Link to={`/sources`}>
              <TopicCard cards={cards} title={"Source"} rKey={"source"} />
            </Link>
          </div>
          <div className="cardItem">
            <Link to={`/regions`}>
              <TopicCard cards={cards} title={"Region"} rKey={"region"} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
