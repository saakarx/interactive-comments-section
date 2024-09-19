import { useSelector } from '@/hooks';
import CommentCreator from './CommentCreator';
import Comment from './Comment';
import { LoaderIcon } from './icons';

export const CommentsList = () => {
  const {
    auth: curUser,
    comments: { comments, error, loading },
  } = useSelector(state => state);

  if (loading)
    return (
      <div className="min-h-[90svh] flex items-center justify-center flex-col gap-4">
        <LoaderIcon className="motion-reduce:hidden size-[26px]" />
        <p className="hidden motion-reduce:block">Loading...</p>
      </div>
    );
  else if (error)
    return (
      <div className="max-w-lg mx-auto min-h-96 flex items-center justify-center">
        <p className="text-red-soft font-medium text-lg text-justify">
          {error}
        </p>
      </div>
    );
  else
    return (
      <div>
        {comments.length > 0 ? (
          <>
            <div className="flex flex-col gap-4">
              {comments.map(comment => (
                <Comment key={comment.id} curUser={curUser} {...comment} />
              ))}
            </div>
          </>
        ) : (
          <div>No Comments here, Create one!</div>
        )}
        <CommentCreator userImage={curUser?.image?.webp} />
      </div>
    );
};
