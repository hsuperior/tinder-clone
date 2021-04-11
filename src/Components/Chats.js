import React, { useState, useEffect } from "react";
import Chat from "./Chat";

const Chats = () => {
  const [chats, setChats] = useState([]);

  const getChats = () => {
    fetch("chats.json", {
      headers: {
        "Content-Type": "applicaiton/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (myJson) {
        console.log("myJson: ", myJson.chats);
        setChats(myJson.chats);
      });
  };

  useEffect(() => {
    getChats();
  }, []);
  // Work on getting the chats from chats.json tomorrow

  return (
    <div className="chats">
      {chats &&
        chats.length > 0 &&
        chats.map((chat) => {
          console.log("Name: ", chat.name);
          return (
            <Chat
              key={chat.name}
              name={chat.name}
              message={chat.message}
              timestamp={chat.timestamp}
              profilePic={chat.profilePic}
            />
          );
        })}
    </div>
  );
};

export default Chats;
