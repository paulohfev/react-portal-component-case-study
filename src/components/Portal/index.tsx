import React from 'react';
import { createPortal } from 'react-dom';

type Props = {
  children: React.ReactNode;
  rootSelector: string;
}

const Portal: React.FC<Props> = ({ children, rootSelector }) => {
  return createPortal(children, document.getElementById(rootSelector) as HTMLElement);
}

export default Portal;
