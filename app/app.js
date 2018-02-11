import React from 'react';
import ReactDom from 'react-dom';

import ToDoItem from "./CreateComponent/todoList";
import TryPropTypes from './CreateComponent/propTypes';
import HomePage from './RouterComponent/index';

ReactDom.render(<TryPropTypes />,document.getElementById('propTypes'));
ReactDom.render(<ToDoItem/>,document.getElementById('todoList'));
ReactDom.render(<HomePage/>,document.getElementById('routerContent'));