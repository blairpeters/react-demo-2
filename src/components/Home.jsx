import React from "react";

function Home({ names }) {
  // console.log(props.names);
  const arr = names.map((name, index) => <li key={index}>{name}</li>);

  return (
    <>
      <div>
        <h1>Welcome to Home component</h1>
      </div>
      <div>Hello there</div>
      <div>
        <ul>{arr}</ul>
      </div>
    </>
  );
}

export default Home;
