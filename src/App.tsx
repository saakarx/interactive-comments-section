import React, { useEffect, useState } from 'react';

import { CommentType, UserType } from './types.type';

import Comment from './components/Comment';
import Modal from './components/Modal';
import CommentCreator from './components/CommentCreator';
import ModalContent from './components/ModalContent';

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
    document.body.style.overflow = '';
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
    document.body.style.overflow = 'hidden';
  }, []);

  useEffect(() => {
    const closeModalKeydown = (e: globalThis.KeyboardEvent) => {
      if (e.key !== 'Escape') return;
      if (!showModal) return;
      handleModalClose();
    };
    document.body.addEventListener('keydown', closeModalKeydown);
    return () =>
      document.body.removeEventListener('keydown', closeModalKeydown);
  }, [showModal]);

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
          <ModalContent handleModalClose={handleModalClose} />
        </Modal>
      )}
    </>
  );
};

export default App;
