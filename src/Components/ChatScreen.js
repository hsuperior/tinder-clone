import { Avatar } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../Styles/ChatScreen.css";

const ChatScreen = () => {
  const [name, setName] = useState("");

  const getName = () => {
    let location = window.location.pathname;
    let urlElements = location.split("/");
    let nameInPath = urlElements[2];
    setName(nameInPath);
  };

  useEffect(() => {
    getName();
  }, []);

  const [input, setInput] = useState("");
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

  const handleSend = (e) => {
    e.preventDefault();

    setMessages([...messages, { message: input }]);
    setInput("");
  };

  return (
    <div className="chatScreen">
      <p className="chatScreen__timestamp">
        YOU MATCHED WITH {name} ON 10/08/20
      </p>
      {messages.map((message) =>
        message.name ? (
          <div className="chatScreen__message">
            <Avatar
              className="chatScreen__image"
              alt={message.name}
              src={message.image}
            />
            <p className="chatScreen__text">{message.message}</p>
          </div>
        ) : (
          <div className="chatScreen__message">
            <p className="chatScreen__textUser">{message.message}</p>
          </div>
        )
      )}

      <form className="chatScreen__input">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="chatScreen__inputField"
          placeholder="Type a message..."
          type="text"
        />
        <button
          onClick={handleSend}
          type="submit"
          className="chatScreen__inputButton"
        >
          SEND
        </button>
      </form>
    </div>
  );
};

export default ChatScreen;
