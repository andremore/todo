import _ from 'lodash';
import './style.css';
import './style.scss';

// Todo
let todoList = [];

class todoItem {
    constructor(title, description, checklist, notes, priority, dueDate) {
        this.title = title;
        this.description = description;
        this.checklist = checklist;
        this.notes = notes;
        this.priority = priority;
        this.dueDate = dueDate;
    }
}

const design = new todoItem(
    'Design',
    'Website',
    'Depois vejo',
    'Humba aqui',
    'Muy importante',
    '24/09/2021'
);

const frontend = new todoItem(
    'Frontend',
    'Website',
    'Depois vejo',
    'Humba aqui',
    'Muy importante',
    '24/09/2021'
);

const backend = new todoItem(
    'Backend',
    'Website',
    'Depois vejo',
    'Humba aqui',
    'Muy importante',
    '24/09/2021'
);

todoList.push(design, frontend, backend);

export { todoList, todoItem };
