import * as React from "react";

export function useDisableBodyScroll(disabled: boolean): void {
  const scrollPosition = React.useRef(0);
  React.useEffect(() => {
    // Don't do anything if scroll is already blocked somewhere else.
    if (!disabled || document.body.style.position === 'fixed') {
      return undefined;
    }
    scrollPosition.current = window.scrollY;
    document.body.style.top = -window.scrollY + 'px';
    document.body.style.left = '0';
    document.body.style.right = '0';
    document.body.style.overflowY = 'hidden';
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    return () => {
      document.body.style.overflowY = 'initial';
      document.body.style.overflow = 'initial';
      document.body.style.position = 'initial';
      document.body.style.top = '0';
      window.scrollTo(0, scrollPosition.current);
    };
  }, [disabled]);
}
