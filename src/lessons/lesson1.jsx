import React from 'react'


const hoc = (overrideProps) => (BaseComponent) => (props) =>
  <BaseComponent {...props} {...overrideProps} />;


const User = ({ name }) =>
  <div className="User">{ name }</div>;

const UserJack = hoc({ name: "Jack" })(User);

export const Lesson1 = () =>
  <div>
    <User name="Bob" />
    <UserJack />
  </div>;