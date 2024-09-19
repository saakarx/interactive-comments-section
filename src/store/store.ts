import { configureStore } from '@reduxjs/toolkit';

import authReducer from './slices/auth';
import commentsReducer from './slices/comments';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    comments: commentsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
