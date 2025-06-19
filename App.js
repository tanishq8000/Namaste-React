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

const nested = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am a h1 tag"),
    React.createElement("h2", {}, "I am a h2 tag"),
  ])
);

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World From React!!!"
);

// console.log(heading);  //It is not actual h1 tag till now it is just an object
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(nested); // It takes React Object or element and create a tag which browser understands and render it inside the root

// it replcaes the content of the root with provided data. Means if something is already there in this root div written in html page then it will replace that not append to that

// React is called library not framework because it can work on small portion your web page

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
