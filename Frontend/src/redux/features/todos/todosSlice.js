import { createSlice } from "@reduxjs/toolkit";
const todosSlice = createSlice({
  // it has name for for in redux and store that show in 'todos/reducer'
  name: "todo",
  initialState: [],
  reducers: {
    add(state, { payload }) {
      // for state is array for add to array use Methode push
      state.push(payload);
    },
    edit(state, { payload: { index, text } }) {
      // index for which one selected , and text for edit text bcuase Object
      state[index].text = text;
    },
    delItem(state, { payload: index }) {
      // remove on li
      state.splice(index, 1);
    },
    delAll(state, payload) {
      // for empty data for delete all
      state.length = 0;
    },
  },
});
// for use in card
export const { add, edit, delAll, delItem } = todosSlice.actions;
// for use in store
export default todosSlice.reducer;
