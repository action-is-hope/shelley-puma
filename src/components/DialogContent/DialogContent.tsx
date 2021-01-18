import React, { useRef } from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import classnames from "classnames";
import { FocusOn } from "react-focus-on";
import { st, classes } from "./dialog.st.css";

import { TransitionProps } from "react-transition-group/Transition";
import { ReactFocusOnProps } from "react-focus-on/dist/es5/types";

import { wrapEvent } from "../Dialog/Dialog";

export type DialogContentProps = {
  /**
   * Controls whether the dialog is open or not.
   *
   * @see Docs https://github.com/action-is-hope/shelley
   */
  isOpen?: boolean;
  /**
   * This function is called whenever the user hits "Escape" or clicks outside
   * the dialog. _It's important to close the dialog `onDismiss`_.
   *
   * The only time you shouldn't close the dialog on dismiss is when the dialog
   * requires a choice and none of them are "cancel". For example, perhaps two
   * records need to be merged and the user needs to pick the surviving record.
   * Neither choice is less destructive than the other, so in these cases you
   * may want to alert the user they need to a make a choice on dismiss instead
   * of closing the dialog.
   *
   * @see Docs https://github.com/action-is-hope/shelley
   */
  onDismiss?: (arg: any) => void;
  /**
   * Accepts any renderable content.
   *
   * @see Docs https://github.com/action-is-hope/shelley
   */
  children?: React.ReactNode;
  contentClassName?: string;
  allowPinchZoom?: boolean;
  /** ((element: HTMLElement) => void) | { current: HTMLElement };
   * By default the first focusable element will receive focus when the dialog
   * opens but you can provide a ref to focus instead.
   *
   * @see Docs https://github.com/action-is-hope/shelley
   */
  initialFocusRef?:
    | React.RefObject<HTMLButtonElement>
    | React.RefObject<HTMLInputElement>;
  // ref: React.Ref<HTMLDivElement>;
  entryNode?: any;
  transitionProps: TransitionProps;
  focusOnProps?: ReactFocusOnProps;
  theme?: string;
  variant?: number | boolean;

  disableBackgroundClick?: boolean;
  disableEscapeKey?: boolean;
  disableFocusLock?: boolean;
  // } & React.HTMLProps<HTMLDivElement>;
} & React.ComponentPropsWithoutRef<"div">;

/** Influenced by https://reacttraining.com/reach-ui/dialog */

const DialogContent = React.forwardRef(
  (
    {
      className,
      children,
      contentClassName,
      entryNode = document && document.body,
      focusOnProps: FocusOnPropsInput,
      initialFocusRef,
      isOpen,
      onClick,
      onDismiss = () => null,
      onKeyDown,
      onMouseDown,
      theme,
      transitionProps: transitionPropsInput,
      variant = false,
      disableFocusLock,
      disableEscapeKey,
      disableBackgroundClick,
      ...rest
    }: DialogContentProps,
    forwardedRef?: React.Ref<HTMLDivElement>
  ) => {
    const activateFocusLock = React.useCallback(() => {
      if (initialFocusRef && initialFocusRef.current) {
        initialFocusRef.current.focus();
      }
    }, [initialFocusRef]);
    const mouseDownTarget = useRef<EventTarget | null>(null);
    /* TransitionProps props */
    const transitionProps = {
      unmountOnExit: true,
      ...transitionPropsInput
    };
    /* FocusOn props */
    const focusOnProps = {
      autoFocus: true,
      onActivation: activateFocusLock,
      returnFocus: true,
      focusLock: !disableFocusLock,
      onEscapeKey: (event: Event) => !disableEscapeKey && onDismiss(event),
      ...FocusOnPropsInput,
      /**
       * If the dialog is persistent in the DOM via `unmountOnExit: false` then
       * disable the isolation lock else everything else will have aria-hidden="true".
       *
       * @todo: Bug: noIsolation doesn't seem to work as described...
       * https://codesandbox.io/s/focus-on-lvw6p?fontsize=14&hidenavigation=1&theme=dark
       * Possible work around to use shards?
       */
      noIsolation: !transitionProps.unmountOnExit
    };

    const component = (
      <CSSTransition in={isOpen} {...transitionProps}>
        <div className={theme}>
          <div className={st(classnames(classes.root, className), { variant })}>
            <FocusOn {...focusOnProps}>
              <div
                aria-hidden="true"
                className={classes.background}
                onClick={wrapEvent(onClick, (event: React.MouseEvent) => {
                  !disableBackgroundClick && onDismiss(event);
                  if (mouseDownTarget.current === event.target) {
                    event.stopPropagation();
                    !disableBackgroundClick && onDismiss(event);
                  }
                })}
              ></div>
              <div
                aria-modal="true"
                className={classnames(classes.content, contentClassName)}
                onKeyDown={onKeyDown}
                onMouseDown={wrapEvent(
                  onMouseDown,
                  (event: React.MouseEvent) => {
                    mouseDownTarget.current = event.target;
                  }
                )}
                ref={forwardedRef}
                role="dialog"
                {...rest}
              >
                {children}
              </div>
            </FocusOn>
          </div>
        </div>
      </CSSTransition>
    );
    // We might not always want a portal...
    return entryNode ? ReactDOM.createPortal(component, entryNode) : component;
  }
);

DialogContent.displayName = "DialogContent";

export default DialogContent;
