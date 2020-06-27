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

  createTodo(text) {
    const id = Date.now();

    this.todos.push({
      id, text, complite: false,
    });

    this.emit('change');
  }

  getAll() {
    return this.todos;
  }
}

const todoStore = new TodoStore;
// ブラウザのコンソールからデータを入力してみる実験
window.todoStore = todoStore;

export default todoStore;
