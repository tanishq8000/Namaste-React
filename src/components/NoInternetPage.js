import React from "react";

const NoInternetPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center bg-gray-50 p-5 font-sans mt-24">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        Oops! No Internet Connection
      </h1>
      <p className="text-lg text-gray-600 mb-8 max-w-2xl leading-relaxed">
        It looks like you're offline. Please check your internet connection and
        try again.
      </p>
      <div className="max-w-md">
        <h3 className="text-xl font-semibold text-gray-700 mb-2">
          Here are a few things you can try:
        </h3>
        <ul className="list-none p-0 text-left text-gray-700">
          <li className="mb-2 pl-5 relative before:content-['•'] before:absolute before:left-0 before:font-bold before:text-gray-400">
            Check your Wi-Fi connection.
          </li>
          <li className="mb-2 pl-5 relative before:content-['•'] before:absolute before:left-0 before:font-bold before:text-gray-400">
            Make sure your mobile data is turned on.
          </li>
          <li className="mb-2 pl-5 relative before:content-['•'] before:absolute before:left-0 before:font-bold before:text-gray-400">
            Check your router and modem.
          </li>
          <li className="mb-2 pl-5 relative before:content-['•'] before:absolute before:left-0 before:font-bold before:text-gray-400">
            Try opening a different website in your browser.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NoInternetPage;
