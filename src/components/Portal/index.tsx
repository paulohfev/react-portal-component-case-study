import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

type Props = {
  children: React.ReactNode;
  rootSelector: string;
}

const Portal: React.FC<Props> = ({ rootSelector, children }) => {
  const element = useRef(document.getElementById(rootSelector));

  useEffect(() => {
    return () => {
      if (!!element.current) {
        if (element.current.childNodes.length === 0) {
          element.current.remove();
          element.current = null;
        }
      }
    };
  }, [rootSelector, element]);

  if (!element.current) {
    element.current = document.createElement("div");
    element.current.setAttribute("id", rootSelector);
    document.body.appendChild(element.current);
  }

  return createPortal(children, element.current);
};

export default Portal;
