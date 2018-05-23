import React from 'react';
import { compose, withState, withHandlers } from 'recompose'; // импортируем compose, withState и withHandlers

const withToggle = compose( // теперь используем withState & withHandlers в методе compose
  withState('toggledOn', 'toggle', false),
  withHandlers({ // withHandlers принимает объект обработчиков событий
    show: ({ toggle }) => (e) => toggle(true),
    hide: ({ toggle }) => (e) => toggle(false),
    toggle: ({ toggle }) => (e) => toggle((current) => !current)
  })
)

const StatusList = () => // StatusList - текст который будет виден при клике на слово Active
  <div className="StatusList">
    <div>pending</div>
    <div>inactive</div>
    <div>active</div>
  </div>;

const Status = withToggle(({ status, toggledOn, toggle }) =>
  <span onClick={ toggle }>
    { status }
    { toggledOn && <StatusList /> }
  </span>
);

const Tooltip = withToggle(({ text, children, toggledOn, show, hide }) =>
  <span>
    { toggledOn && <div className="Tooltip">{ text }</div> }
    <span onMouseEnter={ show } onMouseLeave={ hide }>{ children }</span>
  </span>
);

const User = ({ name, status }) =>
  <div className="User">
    <Tooltip text="Cool Dude!">{ name }</Tooltip>—
    <Status status={ status } />
  </div>;

export const Lesson5 = () =>
  <div>
    <User name="Tim" status="active" />
  </div>;