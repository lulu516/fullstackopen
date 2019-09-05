import React from "react";
import ReactDOM from "react-dom";

const Header = props => {
  return <h1>{props.course}</h1>;
};
const Part = props => {
  return (
    <p>
      {props.part} {props.exercise}
    </p>
  );
};

const Content = props => {
  return [
    <Part part={props.part[0]} exercise={props.exercise[0]} />,
    <Part part={props.part[1]} exercise={props.exercise[1]} />,
    <Part part={props.part[2]} exercise={props.exercise[2]} />
  ];
};

const Total = props => {
  return (
    <p>
      Number of exercises{" "}
      {props.exercises[0] + props.exercises[1] + props.exercises[2]}
    </p>
  );
};

const App = () => {
  const course = "Half Stack application development";
  const part1 = "Foundamentals of React";
  const exercise1 = 10;
  const part2 = "Using props to pass data";
  const exercise2 = 7;
  const part3 = "State of a component";
  const exercise3 = 14;

  return (
    <div>
      <Header course={course} />
      <Content
        part={[part1, part2, part3]}
        exercise={[exercise1, exercise2, exercise3]}
      />
      <Total exercises={[exercise1, exercise2, exercise3]} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
