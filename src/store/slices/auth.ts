import { User } from '@/types.type';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: User = {
  id: '5e8513f1-c3bc-434b-beb3-4e56694fb549',
  username: 'juliusomo',
  image: {
    png: '/images/avatars/image-juliusomo.png',
    webp: '/images/avatars/image-juliusomo.webp',
  },
};

const authSlice = createSlice({
  initialState: initialState,
  name: '@AUTH',
  reducers: {
    login: (state, payload: PayloadAction<User>) => {
      console.log('state', state);
      console.log('payload', payload.payload);
      state = payload.payload;
    },
    logout: state => {
      state = initialState;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
