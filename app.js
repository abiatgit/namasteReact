const heading=React.createElement("div",
{id:"parent"},React.createElement("div",
{id:"child"},
[React.createElement("h1",{id:"my heading"},"Hello World"),
React.createElement("h1",{id:"my headingOne"},"Hello World One")]
),)





const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(heading)