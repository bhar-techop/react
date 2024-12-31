{/* <div id="parent">
    <div id="child">
        <h1>I am h1 tag </h1>
    </div>
</div> */}
const heading=React.createElement("div",{
    id:"parent"
},
React.createElement("div",{
    id:"child"
},React.createElement("h1",{},"I am h1 tag")))
console.log(heading);
//ReactElement(object)-->html browser understands
const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(heading)