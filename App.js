const heading = React.createElement("h1", { id: "parent" }, [
  React.createElement("h1", { id: "child" }, "Hello from react"),
  React.createElement("h1", { id: "child2" }, "Hello from react"),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
