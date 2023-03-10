import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  sort: '',
  isSave: ''
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    isSaved: (state, action) => {
      state.isSave = action.payload;
    },
    sortSelected: (state, action) => {
      state.sort = action.payload;
    }
  }
})

export default filterSlice.reducer;
export const { isSaved, sortSelected } = filterSlice.actions