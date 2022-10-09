import React from 'react';
import { createPortal } from 'react-dom';

interface Props {
  children?: React.ReactNode;
}

const Modal: React.FC<Props> = ({ children }) => {
  const el: HTMLElement = document.getElementById('dialog') as HTMLElement;

  return createPortal(children, el);
};

export default Modal;
