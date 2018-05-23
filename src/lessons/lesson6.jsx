import React from 'react'
import { withReducer, withHandlers, compose } from 'recompose';

const withToggle = compose(
  withReducer('toggledOn', 'dispatch', (state, action) => {
    switch(action.type) { // создаем функцию редьюсер
      case 'SHOW':
        return true;
      case 'HIDE':
        return false;
      case 'TOGGLE':
        return !state;
      default:
        return state;
    }
  }, false),
  withHandlers({
    show: ({ dispatch }) => (e) => dispatch({ type: 'SHOW' }), // пробрасываем action-ы в метод dispatch
    hide: ({ dispatch }) => (e) => dispatch({ type: 'HIDE' }),
    toggle: ({ dispatch }) => (e) => dispatch({ type: 'TOGGLE' })
  })
);


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

export const Lesson6 = () =>
  <div>
    <User name="Tim" status="active" />
  </div>;
