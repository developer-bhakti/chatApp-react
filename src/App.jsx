import React from "react";
import ChatbotIcon from "./Components/ChatbotIcon";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg flex flex-col ">
        
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b bg-blue-950">
          <div className="flex items-center space-x-2 ">
            <ChatbotIcon />
            <h2 className="text-xl font-semibold text-white">Chatbot</h2>
          </div>
          <button className="material-symbols-rounded text-white  hover:text-gray-700">
            keyboard_arrow_down
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 px-4 py-6 space-y-4 overflow-y-auto">
          <div className="flex items-start space-x-2">
            <ChatbotIcon />
            <p className="bg-gray-200 px-4 py-2 rounded-xl">
              Hey there👋<br /> How can I help you today?
            </p>
          </div>

          <div className="flex justify-end">
            <p className="bg-blue-950 text-white px-4 py-2 rounded-xl max-w-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In
              molestiae, iure natus sed molestias commodi voluptatem illo
              tenetur aut laborum illum, at cupiditate error. Quis dicta error
              necessitatibus qui amet!
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t px-4 py-3">
          <form action="#" className="flex items-center space-x-2">
            <input
              type="text"
              placeholder="Message..."
              required
              className="flex-1 px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              type="submit"
              className="material-symbols-rounded text-blue-500 hover:text-blue-700"
            >
              arrow_upward
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default App;
