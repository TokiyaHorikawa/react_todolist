import dispatcher from "../dispatcher"

export function createTodo(text) {
  dispatcher.dispatch({
    type: "CREATE_TODO",
    text
  });
}

export function deleteTodo(id) {
  dispatcher.dispatch({
    type: "DELETE_TODO",
    id
  });
}

export function reloadTodos() {
  dispatcher.dispatch({type: "FETCH_TODOS"});

  setTimeout(() => {
    dispatcher.dispatch({type: "RECEIVE_TODOS", todos: [
      {
        id: 893648712548,
        text: "今日のTODO1",
        complete: false
      },
      {
        id: 168251827458,
        text: "明日のTODO2",
        complite: true
      }
    ]});
  }, 1000);
}
