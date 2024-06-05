import { createSlice } from "@reduxjs/toolkit";

let id = 1;
const getNextId = () => id++;

// todosSlice is a slice of the Redux store that manages the todos state
// it has a todos array and a boolean showCompleted
export const todosSlice = createSlice({
  // name is the name of the slice
  name: "todos",
  // initialState is the initial state of the slice
  initialState: {
    todos: [
      { id: getNextId(), label: "Laundry", complete: true },
      { id: getNextId(), label: "Groceries", complete: false },
      { id: getNextId(), label: "Dishes", complete: false },
    ],
    // showCompleted is a boolean that determines whether completed todos are shown
    showCompleted: true,
  },
  // reducers is an object that contains the action creators and reducers for the slice
  reducers: {
    // createNewTodo is an action creator that creates a new todo with a label and complete status
    createNewTodo: {
      // prepare is a function that prepares the action payload
      prepare: (label, complete) => {
        // we return an object with the label, complete status, and the next id
        return { payload: { label, complete, id: getNextId() } };
      },
      reducer: (state, action) => {
        // we push the new todo to the todos array
        state.todos.push(action.payload);
      },
    },
    // toggleTodo is an action creator that toggles the complete status of a todo
    toggleTodo: (state, action) => {
      // we find the todo from those in state with the id in the action payload
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        // we toggle the complete status of the todo
        todo.complete = !todo.complete;
      }
    },
    // toggleShowCompletedTodos is an action creator that toggles the showCompleted state
    toggleShowCompletedTodos: (state) => {
      // we toggle the showCompleted state
      state.showCompleted = !state.showCompleted;
    },
  },
});

// we export the action creators and the reducer from the slice to be used in the app and the reducer to be added to the store
export const { createNewTodo, toggleShowCompletedTodos, toggleTodo } =
  todosSlice.actions;
export default todosSlice.reducer;
