import { RefObject, useEffect } from 'react';

const useOnClickOutside = <T extends HTMLElement = HTMLElement>(ref: RefObject<T>, handler: () => void) => {
  useEffect(() => {
    const clickHandler = (event: MouseEvent) => {
      const element = ref?.current;

      if (!element || element.contains(event.target as Node)) {
        return;
      }

      handler();
    };

    document.addEventListener('click', clickHandler);

    return () => document.removeEventListener('click', clickHandler);
  });
};

export default useOnClickOutside;
