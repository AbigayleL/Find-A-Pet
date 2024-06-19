import "./Cats.scss";
import React, { useState, useEffect } from "react";
import axios from "axios";
import CatComponent from "../CatComponent/CatComponent";

function Cats() {
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
      <h1>Find Me A Cat</h1>
      <div className="home-page__pets">
        {cats.map((cat) => (
          <CatComponent
            key={cat.id}
            name={cat.name}
            image={cat.url}
            bred={cat.bred_for}
            life={cat.life_span}
            temperament={cat.temperament}
            origin={cat.origin}
          />
        ))}
      </div>
    </section>
  );
}

export default Cats;
