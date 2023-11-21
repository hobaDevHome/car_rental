"use client ";
import React from "react";

const SearchInput = () => {
  return (
    <div>
      <h2 className="text-center text-lg"> Let's search what you need</h2>

      <div className=" bg-gray-100 rounded-xl">
        <div className="flex justify-center ">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 text-gray-400"
            >
              <path
                fillRule="evenodd"
                d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                clipRule="evenodd"
              />
            </svg>

            <input
              type="text"
              placeholder="Location"
              className="p-2  bg-transparent outline-gray-400"
            />
          </div>
          <div>
            <input
              type="date"
              className="p-2  bg-transparent outline-gray-400"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchInput;
