import React, { useEffect, useState } from "react";
import "./topiccard.css";

function TopicCard(props) {
  const cards = props.cards;
  const reqKey = props.rKey;
  const [isLoading, setIsLoading] = useState(true);
  const [countryCount, setCountryCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!cards || typeof cards !== "object") {
          throw new Error("Invalid data provided. Please provide an object.");
        }

        const uniqueCountries = new Set(
          cards.map((item) => item[reqKey].trim())
        );

        setCountryCount(uniqueCountries.size);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [cards]);

  return (
    <div className="topic-card">
      <h2 className="topic-title">
        {props.title}
        {isLoading ? (
          <p className="count">Loading...</p>
        ) : (
          <p className="count">{countryCount}</p>
        )}
      </h2>
    </div>
  );
}

export default TopicCard;
