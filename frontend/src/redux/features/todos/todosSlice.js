import { createSlice } from "@reduxjs/toolkit";
const todosslice = createSlice({
  // it has name for for in redux and store that show in 'todos/reducer'
  name: "todos",
  initialState: [],
  reducers: {
    add(state, { payload }) {
      // for state is array for add to array use Methode push
      state.push(payload);
    },
    delAll(state, payload) {
      // for empty data for delete all
      state.length = 0;
    },
    edit(state, { index, text }) {
      // index for which one selected , and text for edit text bcuase Object
      state[index].text = text;
    },
  },
});
// for use in card
export const { add, delAll, edit } = todosslice.actions;
// for use in store
export default todosslice.reducer;
