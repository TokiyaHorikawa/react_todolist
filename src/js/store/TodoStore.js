import { EventEmitter } from "events";

class TodoStore extends EventEmitter {
  constructor() {
    super();
    this.todos = [
      {
        id: 891740174,
        text: "Eat breakfirst",
        complete: false
      },
      {
        id: 9976342891,
        text: "studing in the morning"
      }
    ];
  }

  getAll() {
    return this.todos;
  }
}

const todoStore = new TodoStore;

export default todoStore;
