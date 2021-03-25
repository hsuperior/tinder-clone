import React, { useState } from "react";
import TinderCard from "react-tinder-card";

const TinderCards = () => {
  // Declaring a variable the "React Way"
  const [people, setPeople] = useState([
    {
      name: "Bill Gates",
      // Image Url
      url:
        "https://pbs.twimg.com/profile_images/988775660163252226/XpgonN0X_400x400.jpg",
    },
    {
      name: "Mark Zuckerburg",
      url:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg/1200px-Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg",
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
