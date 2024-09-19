import { useEffect, type FC } from 'react';

import { CommentsList } from '@/components/comments-list';

import { useDispatch } from '@/hooks';
import {
  startLoading,
  success,
  error as errorInComments,
} from '@/store/slices/comments';

const getErrorMessage = (error: unknown) => {
  if (error instanceof Error) return error.message;
  else return String(error);
};

const App: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      dispatch(startLoading());
      try {
        const data = await fetch('../data.json');
        const res = await data.json();
        dispatch(success({ comments: res.comments }));
      } catch (err) {
        const error = getErrorMessage(err);
        dispatch(errorInComments({ error: error }));
      }
    }
    fetchData();
  }, []);

  return (
    <div className="max-w-container mx-auto py-8 px-4 box-content">
      <CommentsList />
    </div>
  );
};

export default App;
