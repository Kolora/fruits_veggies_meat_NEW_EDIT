import React from "react";

// data is sent as ?name=bob&color=red&ready=true
// id matches the htmlFor in the label - name matches the key we send the data as

export default function Search() {
  return (
    <div>
      <h1>Search</h1>
      <form action={`/fruits/filter`} method="GET">
        <label htmlFor="name">Name:</label> <br />
        <input type="text" id="name" name="name"></input> <br />
        <br />
        <br />
        <label htmlFor="color">Color:</label>
        <br />
        <input type="text" id="color" name="color"></input> <br />
        <br />
        <br />
        <label htmlFor="ready">Ready to Eat:</label>
        <input type="checkbox" id="ready" name="readyToEat"></input>
        <br />
        <br />
        <br />
        <button>Search</button>
      </form>

      <form action="/fruits">
        <button>Back</button>
      </form>
    </div>
  );
}
