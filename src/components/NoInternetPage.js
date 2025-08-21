import React from "react";

const NoInternetPage = () => {
  return (
    <div className="offline-container">
      <h1 className="offline-title">Oops! No Internet Connection</h1>
      <p className="offline-message">
        It looks like you're offline. Please check your internet connection and
        try again.
      </p>
      <div className="offline-suggestions">
        <h3>Here are a few things you can try:</h3>
        <ul className="offline-list">
          <li>Check your Wi-Fi connection.</li>
          <li>Make sure your mobile data is turned on.</li>
          <li>Check your router and modem.</li>
          <li>Try opening a different website in your browser.</li>
        </ul>
      </div>
    </div>
  );
};

export default NoInternetPage;
