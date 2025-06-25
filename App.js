import React from "react";
import ReactDOM from "react-dom/client";

{
  /* <div id="parent">
  <div id="child">
    <h1>I am a h1 tag</h1>
    <h2>I am a h2 tag</h2>
  </div>
</div>; */
}

// To create the above nested structure using react
// To created multiple children pass third argument as array [] of childrens

// const nested = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", { key: "h1" }, "I am a h1 tag"),
//     React.createElement("h2", { key: "h2" }, "I am a h2 tag"),
//   ])
// );

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello World From React!!!"
// );

// console.log(heading);  //It is not actual h1 tag till now it is just an object
// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(nested); // It takes React Object or element and create a tag which browser understands and render it inside the root

// it replcaes the content of the root with provided data. Means if something is already there in this root div written in html page then it will replace that not append to that

// React is called library not framework because it can work on small portion your web page

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Using JSX to create React ELements from now onwards

// const jsxHeading = <h1 className="parent">Namaste React using JSX 🚀</h1>;
// root.render(jsxHeading);

// React Functional Component

// Below 2 ways are same bcz if you have only 1 line you can avoid curly brackets and return statment in arrow function
// const HeadingComponent1 = () => {
//   return <h1 className="heading">React Functional Component-1</h1>;
// };

// const Title = () => <h1>This is Namaste React </h1>;

// When you put or use 1 comp into another it is known as Component Composition
// in {} you can write React Elements using JSX also
// using smae {} you can write React Element into another React ELement
// Also we can use Func Comp inside React ELement using <Comp Name />

// const HeadingComponent2 = () => (
//   <>
//     <Title />
//     <h2>{console.log("dbsisnisnin")}</h2>
//     {jsxHeading}
//     <h1 className="heading">React Functional Component-2</h1>
//   </>
// );

// To render functional component we have to wrap the name into <  /> structure
// root.render(<HeadingComponent2 />);

// ---------------------------------------------------------------------------------------------------------
// Building a Simple Food App using React

// UI Planning

// Header
//    - Logo
//    - Nav Items

// Body
//    - Search
//    - Restaurant Container
//         - Restaurant Card

// Footer
//    - Copyright
//    - Links
//    - Address
//    - Contact

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://dynamic.brandcrowd.com/asset/logo/de2f1188-627e-4b67-a8c3-1a2fc17d783e/logo-search-grid-2x?logoTemplateVersion=2&v=638579027116130000"
        ></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = () => {
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="Logo Of Restaurant"
        src="https://dineout-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/v1668153027/luodkqgbo0vl7qdipviy.webp"
      />
      <h3 className="res-name">Friends Cafe</h3>
      <h5 className="res-type">Cafe, North Indian, Asian</h5>
      <h5 className="res-rating">4.6⭐</h5>
      <div className="offer">Flat 10% off on pre-bookings</div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard />
        <RestaurantCard />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
