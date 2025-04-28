import {useRef} from 'react'


const ChatForm = ({setChatHistory}) => {
    const inputRef = useRef();

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const userMessage = inputRef.current.value.trim();
        if(!userMessage) return;
        inputRef.current.value = "";

        setChatHistory((history) => [...history, { role: "user", text: userMessage }]);
    }

  return (
    <form action="#" className="flex items-center space-x-2" onSubmit={handleFormSubmit}>
            <input ref={inputRef}
              type="text"
              placeholder="Message..."
              required
              className="flex-1 px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            /> 
            <button
              type="submit"
              className="material-symbols-rounded text-blue-500 hover:text-blue-700"
            >
              arrow_upword
            </button>
          </form>
  )
}

export default ChatForm