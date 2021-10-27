import _ from 'lodash';
import './style.css';
import './style.scss';

import { todoList, todoItem } from './todos.js';
import { projectList } from './projects.js';

function component() {
    const element = document.createElement('div');

    console.log(projectList);

    return element;
}

document.body.appendChild(component());
