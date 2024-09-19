import React, { useLayoutEffect } from 'react';

import { useSelector } from '@/hooks';
import { Button } from './ui/button';

type CreateReplyProps = {
  replyingTo: string;
};

export const CreateReply: React.FC<CreateReplyProps> = ({ replyingTo }) => {
  const [inputVal, setInputVal] = React.useState('');
  const commentRef = React.useRef<HTMLTextAreaElement>(null);
  const curUser = useSelector(state => state.auth);

  React.useLayoutEffect(() => {
    const { current: textArea } = commentRef;
    if (textArea) {
      textArea.focus();
      if (replyingTo && !inputVal.startsWith(`@${replyingTo}`))
        setInputVal(`@${replyingTo} ${inputVal.trimStart()}`);
    }
  }, []);

  function handleChange(e: React.FormEvent<HTMLTextAreaElement>) {
    setInputVal(e.currentTarget.value);
  }
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <div className="bg-white p-4 md:p-6 rounded-lg">
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-comment-create-mobile md:grid-cols-comment-create-desktop grid-rows-comment-create-mobile md:grid-rows-comment-create-desktop gap-4"
      >
        <img
          src={curUser.image.webp}
          alt="avatar"
          className="w-8 h-8 md:w-10 md:h-10 row-start-2 md:row-start-1 md:col-start-1"
        />
        <textarea
          placeholder="Add a comment..."
          className="w-full p-4 border border-l-gray-light rounded-lg min-h-[96px] col-span-2 md:col-span-1 resize-none text-blue-dark outline-none focus:border-blue-dark"
          value={inputVal}
          onChange={handleChange}
          ref={commentRef}
        />
        <Button className="row-start-2 md:row-start-1 md:col-start-3 uppercase">
          Reply
        </Button>
      </form>
    </div>
  );
};
