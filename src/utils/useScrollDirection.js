import { useState, useRef, DependencyList, useLayoutEffect } from 'react';

export const SCROLL_UP = "up";
export const SCROLL_DOWN = "down";

const isBrowser = typeof window !== `undefined`;
const zeroPosition = { x: 0, y: 0 };

const getClientRect = (element) => element?.getBoundingClientRect();

const getScrollPosition = ({
  element,
  useWindow,
  boundingElement,
}) => {
  if (!isBrowser) {
    return zeroPosition;
  }

  if (useWindow) {
    return { x: window.scrollX, y: window.scrollY };
  }

  const targetPosition = getClientRect(element?.current || document.body);
  const containerPosition = getClientRect(boundingElement?.current);

  if (!targetPosition) {
    return zeroPosition;
  }

  return containerPosition
    ? {
        x: (containerPosition.x || 0) - (targetPosition.x || 0),
        y: (containerPosition.y || 0) - (targetPosition.y || 0),
      }
    : { x: targetPosition.left, y: targetPosition.top };
};

export const useScrollPosition = ({
  effect,
  deps,
  element,
  useWindow,
  wait,
  boundingElement,
}) => {
  const position = useRef(getScrollPosition({ useWindow, boundingElement }));

  let throttleTimeout = null;

  const callBack = () => {
    const currPos = getScrollPosition({ element, useWindow, boundingElement });
    effect({ prevPos: position.current, currPos });
    position.current = currPos;
    throttleTimeout = null;
  };

  useLayoutEffect(() => {
    if (!isBrowser) {
      return undefined;
    }

    const handleScroll = () => {
      if (wait) {
        if (throttleTimeout === null) {
					throttleTimeout = window.setTimeout(callBack, wait);
        }
      } else {
        callBack();
      }
    };

    if (boundingElement) {
      boundingElement.current?.addEventListener('scroll', handleScroll, { passive: true });
    } else {
      window.addEventListener('scroll', handleScroll, { passive: true });
    }

    return () => {
      if (boundingElement) {
        boundingElement.current?.removeEventListener('scroll', handleScroll);
      } else {
        window.removeEventListener('scroll', handleScroll);
      }

      if (throttleTimeout) {
        clearTimeout(throttleTimeout);
      }
    };
  }, deps);
};

useScrollPosition.defaultProps = {
  deps: [],
  element: false,
  useWindow: false,
  wait: null,
  boundingElement: false,
};
