import React from 'react'
import { compose, setDisplayName, setPropTypes } from 'recompose';
import PropTypes from 'prop-types';

const enhance = compose(
  setDisplayName('User'),
  setPropTypes({
    name: PropTypes.string.isRequired,
    status: PropTypes.string
  })
);

const User = enhance(({ name, status, dispatch }) =>
  <div className="User">
    { name }: { status }
  </div>
);

console.log(User.displayName); // выводим в консоль displayName

export const Lesson2 = () =>
  <div>
    <User name="Tim" status="active" />,
  </div>;