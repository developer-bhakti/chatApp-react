import React, { useState } from "react";
import ChatbotIcon from "./Components/ChatbotIcon";
import ChatForm from "./Components/ChatForm";


const App = () => {
  const [chatHistory, setChatHistory] = useState([]);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg flex flex-col ">
        
        <div className="flex items-center justify-between px-4 py-3 border-b bg-blue-950">
          <div className="flex items-center space-x-2 ">
            <ChatbotIcon />
            <h2 className="text-xl font-semibold text-white">Chatbot</h2>
          </div>
          <button className="material-symbols-rounded text-white  hover:text-gray-700">
            keyboard_arrow_down
          </button>
        </div>

        <div className="flex-1 px-4 py-6 space-y-4 overflow-y-auto">
          <div className="flex items-start space-x-2">
            <ChatbotIcon />
            <p className="bg-gray-200 px-4 py-2 rounded-xl">
              Hey there👋<br /> How can I help you today?
            </p>
          </div>

           {chatHistory.map((chat, index) => (
            <ChatMessage key={index} chat={chat} />
           ))}
          
        </div>

        {/* Footer */}
        <div className="border-t px-4 py-3">
          <ChatForm setChatHistory={setChatHistory}/>
        </div>
      </div>
    </div>
  );
};

export default App;
