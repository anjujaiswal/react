const heading = React.createElement("h1",{id:"headin"}, [React.createElement("div",{id:"child1"},"child1"),
React.createElement("div",{id:"child2"},"child2")]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);