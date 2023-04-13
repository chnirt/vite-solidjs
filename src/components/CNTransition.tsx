import clsx from "clsx";
import React, { useRef } from "react";
import { CSSTransition } from "react-transition-group";

type ICNTransition = {
  className?: string | undefined;
};

const CNTransition = ({
  className,
  show = false,
  timeout = 200,
  duration = 300,

  enter,
  enterFrom,
  enterTo,
  leave,
  leaveFrom,
  leaveTo,
  children,
}: any) => {
  const nodeRef = useRef(null);
  const defaultClassName =
    enter ??
    `transition-opacity duration-[${duration}ms] ease-in-out opacity-0`;
  const defaultTransitionClassNames = {
    entering: enterFrom ?? "opacity-100 visible",
    entered: enterTo ?? "opacity-100 visible",
    exiting: leaveFrom ?? "opacity-0 visible",
    exited: leaveTo ?? "opacity-0 invisible",
  } as any;
  return (
    <CSSTransition nodeRef={nodeRef} in={show} timeout={timeout}>
      {(state) => (
        <div
          ref={nodeRef}
          className={clsx(
            "fixed top-0 left-0 right-0 z-50 w-full h-full",
            className,
            // defaultClassName,
            // defaultTransitionClassNames?.[state],
            defaultClassName,
            defaultTransitionClassNames[state]
          )}
        >
          {children}
        </div>
      )}
    </CSSTransition>
  );
};

export default CNTransition;
