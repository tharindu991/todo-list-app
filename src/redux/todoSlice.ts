import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Todo } from "../types/todoTypes";

// Define the initial state
const initialState: Todo[] = [];

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    // Add a new todo
    addTodo: (state, action: PayloadAction<string>) => {
      state.push({
        id: Date.now(), // Generate a unique timestamp based ID for each TODO item
        text: action.payload,
      });
    },
    // Remove a todo by ID
    removeTodo: (state, action: PayloadAction<number>) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
    // Update a todo
    updateTodo: (
      state,
      action: PayloadAction<{ id: number; text: string }>
    ) => {
      const todo = state.find((t) => t.id === action.payload.id);
      if (todo) {
        todo.text = action.payload.text;
      }
    },
  },
});

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;
