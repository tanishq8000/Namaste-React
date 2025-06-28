#Namaste React

{
/\* <div id="parent">

  <div id="child">
    <h1>I am a h1 tag</h1>
    <h2>I am a h2 tag</h2>
  </div>
</div>; */
}

To create the above nested structure using react
To created multiple children pass third argument as array [] of childrens

const nested = React.createElement(
"div",
{ id: "parent" },
React.createElement("div", { id: "child" }, [
React.createElement("h1", { key: "h1" }, "I am a h1 tag"),
React.createElement("h2", { key: "h2" }, "I am a h2 tag"),
])
);

const heading = React.createElement(
"h1",
{ id: "heading" },
"Hello World From React!!!"
);

console.log(heading); //It is not actual h1 tag till now it is just an object
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(nested); // It takes React Object or element and create a tag which browser understands and render it inside the root

it replcaes the content of the root with provided data. Means if something is already there in this root div written in html page then it will replace that not append to that

React is called library not framework because it can work on small portion your web page

---

Using JSX to create React ELements from now onwards

const jsxHeading = <h1 className="parent">Namaste React using JSX 🚀</h1>;
root.render(jsxHeading);

React Functional Component

Below 2 ways are same bcz if you have only 1 line you can avoid curly brackets and return statment in arrow function
const HeadingComponent1 = () => {
return <h1 className="heading">React Functional Component-1</h1>;
};

const Title = () => <h1>This is Namaste React </h1>;

When you put or use 1 comp into another it is known as Component Composition
in {} you can write React Elements using JSX also
using smae {} you can write React Element into another React ELement
Also we can use Func Comp inside React ELement using <Comp Name />

const HeadingComponent2 = () => (
<>

<Title />
<h2>{console.log("dbsisnisnin")}</h2>
{jsxHeading}
<h1 className="heading">React Functional Component-2</h1>
</>
);

To render functional component we have to wrap the name into < /> structure
root.render(<HeadingComponent2 />);

---

Building a Simple Food App using React

UI Planning

Header

- Logo
- Nav Items

Body

- Search
- Restaurant Container
  - Restaurant Card

Footer

- Copyright
- Links
- Address
- Contact

==> There are 2 types of exports

1. default - to export 1 thing and for import no need to use {} syntax - export default name
2. named - to import multiple things from a file. use {} at time of import syntax - write export infront of comp or other
