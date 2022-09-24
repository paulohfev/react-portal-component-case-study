import React from 'react';
import Portal from '../Portal';

type Props = {
  open: boolean;
}

const Modal: React.FC<Props> = ({ open }) => {
  return (
    <>
      {open && (
        <Portal rootSelector='modal-root'>
          <div>
            Test portal container
          </div>
        </Portal>
      )}
    </>
  );
};

export default Modal;
