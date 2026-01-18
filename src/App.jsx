import React from "react";
import Quote from './components/quote';

const App = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>
        Random Quote Generator
      </h1>
      <Quote />
    </div>
  );
};

export default App;
