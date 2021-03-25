import React, { useState } from "react";
import TinderCard from "react-tinder-card";

const TinderCards = () => {
  // Declaring a variable the "React Way"
  const [people, setPeople] = useState([
    {
      name: "Bill Gates",
      // Image Url
      url: "",
    },
    {
      name: "Mark Zuckerburg",
      url: "",
    },
  ]);

  /** Not the React way, don't do this */
  // const people = []; <== same as above
  //people.push('person1', 'person2')

  /** Correct way to push to an array in React */
  // setPeople([...people, 'person1', 'person2'])
  return (
    <div>
      <h1>Tinder Cards</h1>

      {people.map((person) => (
        <TinderCard>
          <div
            style={{ backgroundImage: `url(${person.url})` }}
            className="card"
          >
            <h3>{person.name}</h3>
          </div>
        </TinderCard>
      ))}
    </div>
  );
};

export default TinderCards;
