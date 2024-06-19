import "./Dogs.scss";

import React, { useState, useEffect } from "react";
import axios from "axios";

function HomePage() {
  const [dogs, setDogs] = useState([]);
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const dogResponse = await axios.get(
          "https://api.thedogapi.com/v1/breeds",
          {
            headers: {
              "x-api-key":
                "live_0SgwXJJj6GSWNMkjzS3Z6HKa4ie0O6zL1CjzwqRzGVDRxax1fVpjeaKJ5AECgVqP",
            },
          }
        );

        // Set state
        setDogs(dogResponse.data);
      } catch (error) {
        console.log("Error encountered, Please try again later.");
      }
    };
    fetchPets();
  }, []);

  if (!dogs) {
    return <div>Loading...</div>;
  }

  return (
    <section className="home-page">
      <h1>Find Me A Dog</h1>
      <div className="home-page__pets">
        <ul>
          {dogs.map((dog) => (
            <li key={dog.id}>
              <h2>{dog.name}</h2>
              <img src={dog.image.url} alt={dog.name} />
              {dog.name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default HomePage;
