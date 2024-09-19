import { CommentType } from '@/types.type';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Success = {
  comments: CommentType[];
};
type Error = {
  error: string;
};

const initialState: {
  loading: boolean;
  error: string;
  comments: CommentType[];
} = {
  loading: false,
  error: '',
  comments: [],
};

const commentsSlice = createSlice({
  name: 'comments',
  initialState: initialState,
  reducers: {
    startLoading: state => {
      state.loading = true;
      state.error = '';
      state.comments = [];
    },

    success: (state, payload: PayloadAction<Success>) => {
      state.loading = false;
      state.error = '';
      state.comments = payload.payload.comments;
    },

    error: (state, payload: PayloadAction<Error>) => {
      state.loading = false;
      state.error = payload.payload.error;
      state.comments = [];
    },

    upvote: () => {},
  },
});

export const { startLoading, success, error } = commentsSlice.actions;
export default commentsSlice.reducer;
