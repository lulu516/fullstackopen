import React from "react";
import ReactDOM from "react-dom";

const Footer = () => {
  return (
    <div>
      greeting app created by
      <a href="https://github.com/lulu516/fullstackopen">Lulu</a>
    </div>
  );
};

const Hello = props => {
  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>
    </div>
  );
};

const App = () => {
  const name = "Ruud";
  const age = 34;

  return (
    <>
      <h1>Greetings</h1>
      <Hello name="Lulu" age={12 + 16} />
      <Hello name={name} age={age} />
      <Footer />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
