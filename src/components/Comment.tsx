import React from 'react';

import DeleteCommentButton from './DeleteCommentButton';
import Reply from './Reply';
import ScoreButtons from './ScoreButtons';
import { CreateReply } from './create-reply';

import type { ReplyType, User } from '@/types.type';
import { Button } from './ui/button';
import { EditIcon, ReplyIcon } from './icons';

type Props = {
  user: User;
  curUser: User;
  content: string;
  createdAt: string;
  id: number;
  replies: ReplyType[];
  score: number;
};

const Comment: React.FC<Props> = ({
  content,
  user,
  curUser,
  createdAt,
  replies,
  score,
}) => {
  const [isReplying, setIsReplying] = React.useState<boolean>(false);
  const [isEditing, setIsEditing] = React.useState<boolean>(false);

  const isOwn = user.username === curUser.username;

  return (
    <div className="flex flex-col gap-4">
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
          {isEditing ? (
            <textarea
              placeholder="Add a comment..."
              className="w-full p-4 border border-l-gray-light rounded-lg min-h-[96px] col-start-1 md:col-start-2 row-start-2 col-span-2 resize-none text-blue-dark outline-none focus:border-blue-dark"
              value={`@${user.username} ${content}`}
              // onChange={handleChange}
              // ref={commentRef}
            />
          ) : (
            <p className="col-start-1 md:col-start-2 row-start-2 col-span-2">
              {content}
            </p>
          )}
          <ScoreButtons score={score} />
          <div className="flex items-start justify-end flex-wrap gap-4 col-start-2 row-start-3 md:col-start-3 md:row-start-1">
            {isOwn ? (
              <>
                <DeleteCommentButton />

                <Button
                  onClick={() => setIsEditing(val => !val)}
                  className={isEditing ? 'text-red-soft' : ''}
                  variant="link"
                  size="link"
                >
                  <EditIcon />
                  {isEditing ? 'Cancel' : 'Edit'}
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

          {isEditing && (
            <Button className="uppercase col-start-3 justify-self-end hover:bg-blue-moderate/50">
              Update
            </Button>
          )}
        </article>

        {isReplying && <CreateReply replyingTo={user.username} />}
      </div>

      {replies && replies.length > 0 && (
        <div className="flex flex-col gap-4 border-l-gray-light border-l-2 pl-4 md:pl-6 md:ml-6">
          {replies.map(reply => (
            <Reply key={reply.id} curUser={curUser} {...reply} />
          ))}
        </div>
      )}
    </div>
  );
};
export default Comment;
