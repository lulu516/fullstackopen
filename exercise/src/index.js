import React from "react";
import ReactDOM from "react-dom";

const Header = props => {
  console.log(props);
  return <h1>{props.course.name}</h1>;
};
const Part = props => {
  return (
    <p>
      {props.part.name} {props.part.exercises}
    </p>
  );
};

const Content = props => {
  return props.course.parts.map(part => <Part part={part} />);
};

const Total = props => {
  return (
    <p>
      Number of exercises{" "}
      {props.course.parts.map(part => part.exercises).reduce((a, b) => a + b)}
    </p>
  );
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Foundamentals of React",
        exercises: 10
      },
      {
        name: "Using props to pass data",
        exercises: 7
      },
      {
        name: "State of a component",
        exercises: 14
      }
    ]
  };

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
