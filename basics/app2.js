{/* <div id="parent">
    <div id="child">
    sibling
        <h1>I am h1 tag </h1>
        <h2>I am h2 tag </h2>

    </div>
</div> */}
const heading = React.createElement(
    "div",
    { id: "parent" },
    React.createElement(
        "div",
        { id: "child" },
        [
            React.createElement("h1", {}, "I am h1 tag"),
            React.createElement("h2", {}, "I am a h2 tag")
        ]
    )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

console.log(heading);
//ReactElement(object)-->html browser understands
