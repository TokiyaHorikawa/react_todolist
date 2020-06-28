import { EventEmitter } from "events";
import dispatcher from "../dispatcher";

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

  receiveTodos(todos) {
    this.todos = todos;
    this.emit("change");
  }

  // すべてを取得
  getAll() {
    return this.todos;
  }

  handleActions(action) {
    switch (action.type) {
      case "CREATE_TODO":
        this.createTodo(action.text);
        break;
      case "RECEIVE_TODOS":
        this.receiveTodos(action.todos)
      default:
        console.log('no action', action.type);
        break;
    }
  }
}

const todoStore = new TodoStore;
dispatcher.register(todoStore.handleActions.bind(todoStore))
window.dispatcher = dispatcher;
export default todoStore;
