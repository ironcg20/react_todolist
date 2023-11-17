import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
  todos: [],
};

export const todoslice = createSlice({
  name: "tod",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: Math.random() * 100,
        text: action.payload,
      };
      state.todos.push(todo);
      state.count += 1;
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
      state.count -= 1;
    },
  },
});

export const { addTodo, removeTodo } = todoslice.actions;
export default todoslice.reducer;
