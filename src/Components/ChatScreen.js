import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import "../Styles/ChatScreen.css";

const ChatScreen = ({ name }) => {
  const [messages, setMessages] = useState([
    {
      name: "Selena",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/e/ed/191125_Selena_Gomez_at_the_2019_American_Music_Awards_%28cropped%29.png",
      message: "Hello",
    },
    {
      name: "Selena",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/e/ed/191125_Selena_Gomez_at_the_2019_American_Music_Awards_%28cropped%29.png",
      message: "I like you",
    },
    {
      message: "Nice",
    },
  ]);

  return (
    <div className="chatScreen">
      <p className="chatScreen__timestamp">
        YOU MATCHED WITH {name} ON 10/08/20
      </p>
      {messages.map((message) => (
        <div className="chatScreen__message">
          <Avatar
            className="chatScreen__image"
            alt={message.name}
            src={message.image}
          />
          <p className="chatScreen__text">{message.message}</p>
        </div>
      ))}
    </div>
  );
};

export default ChatScreen;
