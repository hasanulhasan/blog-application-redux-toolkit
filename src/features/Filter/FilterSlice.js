import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
  post: [],
  isSave: ''
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    isSaved: (state, action) => {
      state.isSave = action.payload;
    }
  }
})

export default filterSlice.reducer;
export const { isSaved } = filterSlice.actions