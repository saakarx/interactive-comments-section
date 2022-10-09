import React, { useState } from 'react';
import Button from './Button';

interface Props {
  userImage: string;
}

const CommentCreator: React.FC<Props> = ({ userImage }) => {
  const [inputVal, setInputVal] = useState('');

  function handleChange(e: React.FormEvent<HTMLTextAreaElement>) {
    setInputVal(e.currentTarget.value);
  }
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
  }

  return (
    <div className="bg-white p-4 md:p-6 rounded-lg mt-4">
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-comment-create-mobile md:grid-cols-comment-create-desktop grid-rows-comment-create-mobile md:grid-rows-comment-create-desktop gap-4"
      >
        <img
          src={userImage}
          alt="avatar"
          className="w-8 h-8 md:w-10 md:h-10 row-start-2 md:row-start-1 md:col-start-1"
        />
        <textarea
          placeholder="Add a comment..."
          className="w-full p-4 border border-l-gray-light rounded-lg min-h-[96px] col-span-2 md:col-span-1 resize-none text-blue-dark outline-none focus:border-blue-dark"
          value={inputVal}
          onChange={handleChange}
        />
        <Button
          handleClick={() => console.log('Send button clicked')}
          className="row-start-2 md:row-start-1 md:col-start-3"
          width="w-28"
          bg="bg-blue-moderate"
          text="Send"
        />
      </form>
    </div>
  );
};

export default CommentCreator;
