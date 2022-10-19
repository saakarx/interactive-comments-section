import React from 'react';
import Button from './Button';

interface ModalContentProps {
  handleModalClose: () => void;
}

const ModalContent: React.FC<ModalContentProps> = ({ handleModalClose }) => {
  return (
    <div
      className="w-full h-full bg-black bg-opacity-25 fixed top-0 left-0 text-white flex items-center justify-center p-4 backdrop-blur-sm"
      onClick={handleModalClose}
    >
      <div
        className="bg-white text-blue-grayish max-w-[400px] rounded-lg p-8 space-y-4"
        onClick={e => e.stopPropagation()}
      >
        <h2 className="text-blue-dark font-bold text-2xl">Delete Comment</h2>
        <p>
          Are you sure you want to delete this comment? This will remove the
          comment and can&apos;t be undone
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
  );
};

export default ModalContent;
