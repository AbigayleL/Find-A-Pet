import "./Dogs.scss";

import React, { useState, useEffect } from "react";
import axios from "axios";
import DogComponent from "../DogComponent/DogComponent";

function Dogs() {
  const [dogs, setDogs] = useState([]);

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
        {dogs.map((dog) => (
          <DogComponent
            key={dog.id}
            name={dog.name}
            image={dog.image}
            description={dog.description}
            facts={dog.facts}
          />
        ))}
      </div>
    </section>
  );
}

export default Dogs;
