import React from 'react'
import { withState } from 'recompose'; // импортируем compose и withState

const StatusList = () => // StatusList - текст который будет виден при клике на слово Active
  <div className="StatusList">
    <div>pending</div>
    <div>inactive</div>
    <div>active</div>
  </div>;

// Используем hoc withState, 
// где первый аргумент isToggle — имя стейта, второй toggle - имя функции stateUpdater-а
// и третий аргумент initialState

// 'isToggle', 'toggle' доступны в качестве аргументов
const Status =  withState('isToggle', 'toggle', false)(
  ({ status, isToggle, toggle }) => 
    <span onClick={ () => toggle(!isToggle) }> {/* На event onClick обрабатываем стейт компонента */}
      { status }
      { isToggle && <StatusList /> }
    </span>
);

// Используем hoc withState, 
// где первый аргумент isToggle — имя стейта, второй toggle - имя функции stateUpdater-а
// и третий аргумент initialState

// 'isToggle', 'toggle' доступны в качестве аргументов
const Tooltip =  withState('isToggle', 'toggle', false)(
  ({ text, children, isToggle, toggle }) =>
    <span>
      { isToggle && <div className="Tooltip">{ text }</div> }
      <span onMouseEnter={ () => toggle(true) } onMouseLeave={ () => toggle(false) }>{ children }</span>
     {/* На event-ы onMouseEnter, onMouseLeave обрабатываем стейт компонента */}
    </span>
  );

// Используем hoc withState, 
// где первый аргумент isToggle — имя стейта, второй toggle - имя функции stateUpdater-а
// и третий аргумент initialState
const User = ({ name, status }) =>
  <div className="User">
    <Tooltip text="Cool Dude!">{ name }</Tooltip>—
    <Status status={ status } />
  </div>;

export const Lesson3 = () =>
  <div>
    <User name="Tim" status="active" />
  </div>;