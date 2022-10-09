import React, { useEffect, useState } from 'react';

import { CommentType, UserType } from './types.type';
import Comment from './components/Comment';
import Modal from './components/Modal';
import CommentCreator from './components/CommentCreator';
import Button from './components/Button';

const getErrorMessage = (error: unknown) => {
  if (error instanceof Error) return error.message;
  else return String(error);
};

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');
  const [comments, setComments] = useState<CommentType[]>([]);
  const [curUser, setCurUser] = useState<UserType>({} as UserType);
  const [showModal, setShowModal] = useState<boolean>(true);

  const handleModalClose = () => {
    setShowModal(false);
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetch('../data.json');
        const res = await data.json();
        setIsLoading(false);
        setComments(res.comments);
        setCurUser(res.currentUser);
        setError('');
      } catch (err) {
        const error = getErrorMessage(err);
        setIsLoading(false);
        setComments([]);
        setError(error);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <div className="max-w-45.75rem mx-auto py-8 px-4 box-content">
        {isLoading && <div>Loading...</div>}
        {!isLoading && error && <div>{error}</div>}
        {!isLoading && comments.length > 0 ? (
          <>
            <div className="flex flex-col gap-4">
              {comments.map(comment => (
                <Comment key={comment.id} {...comment} />
              ))}
            </div>
          </>
        ) : (
          <div>No Comments here, Create one!</div>
        )}
        <CommentCreator userImage={curUser?.image?.webp} />
      </div>
      {showModal && (
        <Modal>
          <div className="w-full h-full bg-black bg-opacity-25 fixed top-0 left-0 text-white flex items-center justify-center p-4 backdrop-blur-sm">
            <div className="bg-white text-blue-grayish max-w-[400px] rounded-lg p-8 space-y-4">
              <h2 className="text-blue-dark font-bold text-2xl">
                Delete Comment
              </h2>
              <p>
                Are you sure you want to delete this comment? This will remove
                the comment and can&apos;t be undone
              </p>
              <div className="grid grid-cols-2 gap-x-2">
                <Button
                  handleClick={handleModalClose}
                  text="No, Cancel"
                  width="w-full"
                  bg="bg-blue-grayish"
                />
                <Button
                  handleClick={() => console.log('Yes button clicked')}
                  text="Yes, Delete"
                  width="w-full"
                  bg="bg-red-soft"
                />
              </div>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default App;
