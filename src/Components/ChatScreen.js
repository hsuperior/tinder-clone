import React, { useState } from "react";

const ChatScreen = () => {
  const [messages, setMessages] = useState([
    {
      name: "Selena",
      image: "...",
      message: "Hello",
    },
    {
      name: "Selena",
      image: "...",
      message: "I like you",
    },
    {
      message: "Nice",
    },
  ]);

  return (
    <div className="chatScreen">
      <h2>In Chat Screen</h2>
    </div>
  );
};

export default ChatScreen;
