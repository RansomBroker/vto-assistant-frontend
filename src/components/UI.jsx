import { useRef } from "react";
import { useChat } from "../hooks/useChat";

export const UI = ({ hidden, ...props }) => {
  const input = useRef();
  const { chat, loading, cameraZoomed, setCameraZoomed, message, isEndChat } = useChat();

  const sendMessage = () => {
    const text = input.current.value;
    if (!loading && !message) {
      chat(text);
      input.current.value = "";
    }
  };
  if (hidden) {
    return null;
  }

  return (
    <>
      <div className="fixed top-0 left-0 right-0 bottom-0 z-10 flex justify-between p-4 flex-col">
        <div className="self-start backdrop-blur-md bg-white bg-opacity-50 p-4 rounded-lg">
          <h1 className="font-black text-xl">My virtual assistant</h1>
        </div>
        <div className="w-full flex flex-col items-end justify-center gap-4">
          <button
            onClick={() => setCameraZoomed(!cameraZoomed)}
            className="pointer-events-auto hover:bg-blue-600 bg-blue-500 text-white p-4 rounded-md"
          >
            {cameraZoomed ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM13.5 10.5h-6"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6"
                />
              </svg>
            )}
          </button>
          <button
            onClick={() => {
              const body = document.querySelector("body");
              if (body.classList.contains("greenScreen")) {
                body.classList.remove("greenScreen");
              } else {
                body.classList.add("greenScreen");
              }
            }}
            className="pointer-events-auto hover:bg-blue-600 bg-blue-600 text-white p-4 rounded-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
              />
            </svg>
          </button>
        </div>
        <div className="w-full flex flex-col ">
          <div className="flex items-center gap-2 pointer-events-auto max-w-screen-sm w-full mx-auto">
            <input
              className="w-full placeholder:text-gray-800 placeholder:italic p-4 rounded-md bg-opacity-50 bg-white backdrop-blur-md"
              placeholder="Type a message..."
              ref={input}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  sendMessage();
                }
              }}
            />
            <button
              disabled={loading || message}
              onClick={sendMessage}
              className={`hover:bg-blue-600 bg-blue-600 text-white p-4 px-10 font-semibold uppercase rounded-md ${
                loading || message ? "cursor-not-allowed opacity-30" : ""
              }`}
            >
              Send
            </button>
          </div>
          
          {isEndChat ?  <div className="w-full h-48 bg-white mt-5 rounded-md bg-opacity-50 backdrop-blur-md flex justify-start md:justify-center overflow-auto">
            <div className="w-36 bg-white rounded-md shadow-md p-2 m-2 flex-none">
              <div className="text-xs text-center font-semibold mb-2">Product 1</div>
              <img src="https://via.placeholder.com/150" alt="Product 1" className="w-full h-20 object-cover mb-4" />
              <button className="w-full text-xs bg-blue-500 text-white px-2 py-2 rounded-sm hover:bg-blue-600">
                Detail
              </button>
            </div>
            <div className="w-36 bg-white rounded-md shadow-md p-2 m-2 flex-none">
              <div className="text-xs text-center font-semibold mb-2">Product 2</div>
              <img src="https://via.placeholder.com/150" alt="Product 1" className="w-full h-20 object-cover mb-4" />
              <button className="w-full text-xs bg-blue-500 text-white px-2 py-2 rounded-sm hover:bg-blue-600 bg-blue-500">
                Detail
              </button>
            </div>
            <div className="w-36 bg-white rounded-md shadow-md p-2 m-2 flex-none">
              <div className="text-xs text-center font-semibold mb-2">Product 3</div>
              <img src="https://via.placeholder.com/150" alt="Product 1" className="w-full h-20 object-cover mb-4" />
              <button className="w-full text-xs bg-blue-500 text-white px-2 py-2 rounded-sm hover:bg-blue-600">
                Detail
              </button>
            </div>
            <div className="w-36 bg-white rounded-md shadow-md p-2 m-2 flex-none">
              <div className="text-xs text-center font-semibold mb-2">Product 4</div>
              <img src="https://via.placeholder.com/150" alt="Product 1" className="w-full h-20 object-cover mb-4" />
              <button className="w-full text-xs bg-blue-500 text-white px-2 py-2 rounded-sm hover:bg-blue-600">
                Detail
              </button>
            </div>
            <div className="w-36 bg-white rounded-md shadow-md p-2 m-2 flex-none">
              <div className="text-xs text-center font-semibold mb-2">Product 5</div>
              <img src="https://via.placeholder.com/150" alt="Product 1" className="w-full h-20 object-cover mb-4" />
              <button className="w-full text-xs bg-blue-500 text-white px-2 py-2 rounded-sm hover:bg-blue-600">
                Detail
              </button>
            </div>
          </div> :
            <div></div>
          }        
        </div>
      </div>
    </>
  );
};
