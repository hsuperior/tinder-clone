import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import database from "../firebase";
import "../Styles/TinderCards.css";

const TinderCards = () => {
  // Declaring a variable the "React Way"
  const [people, setPeople] = useState([]);

  // Piece of code which runs based on a condition
  useEffect(() => {
    // Run stuff here
    database.collection("people").onSnapshot((snapshot) => {
      // Let's shuffle the docs
      let unshuffledTinderPeople = snapshot.docs;
      let tinderPeople = unshuffledTinderPeople
        .map((a) => ({ sort: Math.random(), value: a })) // sort is a random key
        .sort((a, b) => a.sort - b.sort) // sorts in place
        .map((a) => a.value); // create new array of just the values
      setPeople(tinderPeople.map((doc) => doc.data()));
    });

    // this will run once when the component loads, and never again
  }, []);

  /** Not the React way, don't do this */
  // const people = []; <== same as above
  //people.push('person1', 'person2')

  /** Correct way to push to an array in React */
  // setPeople([...people, 'person1', 'person2'])
  return (
    <div>
      <h1>Tinder Cards</h1>

      <div className="tinderCards__cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            // The key is important because it allows React to efficiently re-render a list; helps with app speed
            key={person.name}
            preventSwipe={["up", "down"]}
          >
            <div
              style={{ backgroundImage: `url(${person.url})` }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
};

export default TinderCards;
