import "./Cats.scss";

import React, { useState, useEffect } from "react";
import axios from "axios";

function Dogs() {
  const [dogs, setDogs] = useState([]);
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const catResponse = await axios.get(
          "https://api.thecatapi.com/v1/breeds",
          {
            headers: {
              "x-api-key":
                "live_0SgwXJJj6GSWNMkjzS3Z6HKa4ie0O6zL1CjzwqRzGVDRxax1fVpjeaKJ5AECgVqP",
            },
          }
        );

        // Set state
        setCats(catResponse.data);
      } catch (error) {
        console.log("Error encountered, Please try again later.");
      }
    };
    fetchPets();
  }, []);

  if (!cats) {
    return <div>Loading...</div>;
  }

  return (
    <section className="home-page">
      <h1>Find Me A Dog</h1>
      <div className="home-page__pets">
        <ul>
          {dogs.map((cat) => (
            <li key={cat.id}>
              <h2>{cat.name}</h2>
              <img src={cat.image.url} alt={cat.name} />
              {cat.name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Dogs;
