import { todoItem, todoList } from './todos.js';

// Projects
let projectList = [];

class projectItem {
    constructor(title, description, todoItem, priority, dueDate, checkList) {
        this.title = title;
        this.description = description;
        this.todoItem = todoItem;
        this.priority = priority;
        this.dueDate = dueDate;
        this.checklist = checkList;
    }
}

const portfolio = new projectItem(
    'My Portfolio',
    'Website design and developing',
    [todoList[0], todoList[1], todoList[2]],
    'Muy importante',
    '24/09/2021',
    'Check it out now'
);

projectList.push(portfolio);

export { projectList };
