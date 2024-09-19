import React from 'react';

import { ReplyType, User } from '../types.type';

import ScoreButtons from './ScoreButtons';
import DeleteCommentButton from './DeleteCommentButton';
import { CreateReply } from './create-reply';
import { Button } from './ui/button';
import { EditIcon, ReplyIcon } from './icons';

type ReplyProps = ReplyType & {
  curUser: User;
};

const Reply: React.FC<ReplyProps> = ({
  content,
  createdAt,
  score,
  replyingTo,
  user,
  curUser,
}) => {
  const [isReplying, setIsReplying] = React.useState<boolean>(false);

  const isOwn = user.username === curUser.username;

  return (
    <div className="space-y-2">
      <article className="bg-white p-4 md:p-6 rounded-lg grid grid-cols-comment-mobile md:grid-cols-comment-desktop grid-rows-comment-mobile md:grid-rows-comment-desktop gap-4">
        <div className="flex gap-4 items-center flex-wrap col-start-1 col-span-2 md:col-span-1 md:col-start-2 row-start-1">
          <img className="w-8 h-8" src={user.image.webp} alt="" />
          <div className="flex gap-2 items-center">
            <p className="text-blue-dark font-bold">{user.username}</p>
            {isOwn && (
              <span className="h-5 w-9 bg-blue-moderate text-white flex items-center justify-center text-xs font-bold">
                you
              </span>
            )}
          </div>
          <p>{createdAt}</p>
        </div>

        <p className="col-start-1 md:col-start-2 row-start-2 col-span-2">
          <span className="text-blue-moderate font-bold">@{replyingTo}</span>{' '}
          {content}
        </p>

        <ScoreButtons score={score} />

        <div className="flex items-start justify-end flex-wrap gap-4 col-start-2 row-start-3 md:col-start-3 md:row-start-1">
          {isOwn ? (
            <>
              <DeleteCommentButton />
              <Button variant="link" size="link">
                <EditIcon />
                Edit
              </Button>
            </>
          ) : (
            <Button
              variant="link"
              size="link"
              onClick={() => setIsReplying(val => !val)}
            >
              <ReplyIcon />
              Reply
            </Button>
          )}
        </div>
      </article>
      {isReplying && <CreateReply replyingTo={user.username} />}
    </div>
  );
};

export default Reply;
