import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  games: {},
};

const gamesSlice = createSlice({
  name: 'games',
  initialState,
  reducers: {
    setGamesList: (state, action) => {
      state.games[action.payload.queryInfo] = action.payload.data;
    },
  },
});

export const { setGamesList } = gamesSlice.actions;
export default gamesSlice.reducer;