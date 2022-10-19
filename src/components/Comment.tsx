import React from 'react';

import { ReplyType, UserType } from '../types.type';
import CommentButton from './CommentButton';
import Reply from './Reply';
import ScoreButtons from './ScoreButtons';

interface Props {
  user: UserType;
  content: string;
  createdAt: string;
  id: number;
  replies: ReplyType[];
  score: number;
}

const Comment: React.FC<Props> = ({
  content,
  user,
  createdAt,
  replies,
  score
}) => {
  return (
    <div className="flex flex-col gap-4">
      <article className="bg-white p-4 md:p-6 rounded-lg grid grid-cols-comment-mobile md:grid-cols-comment-desktop grid-rows-comment-mobile md:grid-rows-comment-desktop gap-4">
        <div className="flex gap-4 items-center flex-wrap col-start-1 col-span-2 md:col-span-1 md:col-start-2 row-start-1">
          <img className="w-8 h-8" src={user.image.webp} alt="" />
          <div className="flex gap-2 items-center">
            <p className="text-blue-dark font-bold">{user.username}</p>
            <span className="h-5 w-9 bg-blue-moderate text-white flex items-center justify-center text-xs font-bold">
              you
            </span>
          </div>
          <p>{createdAt}</p>
        </div>
        <p className="col-start-1 md:col-start-2 row-start-2 col-span-2">
          {content}
        </p>
        <ScoreButtons score={score} />
        <div className="flex items-start justify-end flex-wrap gap-4 col-start-2 row-start-3 md:col-start-3 md:row-start-1">
          <CommentButton text="Delete" red={true}>
            <svg
              className="fill-red-soft"
              width="12"
              height="14"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1.167 12.448c0 .854.7 1.552 1.555 1.552h6.222c.856 0 1.556-.698 1.556-1.552V3.5H1.167v8.948Zm10.5-11.281H8.75L7.773 0h-3.88l-.976 1.167H0v1.166h11.667V1.167Z" />
            </svg>
          </CommentButton>
          <CommentButton text="Edit">
            <svg
              className="fill-blue-moderate"
              width="14"
              height="14"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M13.479 2.872 11.08.474a1.75 1.75 0 0 0-2.327-.06L.879 8.287a1.75 1.75 0 0 0-.5 1.06l-.375 3.648a.875.875 0 0 0 .875.954h.078l3.65-.333c.399-.04.773-.216 1.058-.499l7.875-7.875a1.68 1.68 0 0 0-.061-2.371Zm-2.975 2.923L8.159 3.449 9.865 1.7l2.389 2.39-1.75 1.706Z" />
            </svg>
          </CommentButton>
          <CommentButton text="Reply">
            <svg
              width="14"
              height="13"
              className="fill-blue-moderate"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M.227 4.316 5.04.16a.657.657 0 0 1 1.085.497v2.189c4.392.05 7.875.93 7.875 5.093 0 1.68-1.082 3.344-2.279 4.214-.373.272-.905-.07-.767-.51 1.24-3.964-.588-5.017-4.829-5.078v2.404c0 .566-.664.86-1.085.496L.227 5.31a.657.657 0 0 1 0-.993Z" />
            </svg>
          </CommentButton>
        </div>
      </article>
      {replies && replies.length > 0 && (
        <div className="flex flex-col gap-4 border-l-gray-light border-l-2 pl-4 md:pl-6 md:ml-6">
          {replies.map(reply => (
            <Reply key={reply.id} {...reply} />
          ))}
        </div>
      )}
    </div>
  );
};
export default Comment;
