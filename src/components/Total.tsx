import React from "react";
import { CourseParts } from './Content';

interface TotalProps {
  courseParts: CourseParts[];
}

export const Total = (props: TotalProps) => {
  return (
    <div>
      <p>
        Number of exercises{" "}
        {props.courseParts.reduce((carry, part) => carry + part.exerciseCount, 0)}
      </p>
    </div>
  );
};