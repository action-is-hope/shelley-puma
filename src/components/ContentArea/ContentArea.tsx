import React, { useRef, useEffect } from "react";
import classnames from "classnames";
import { st, classes } from "./contentArea.st.css";
import { FocusOn } from "react-focus-on";

interface ContentAreaProps extends React.HTMLAttributes<HTMLDivElement> {
  /** See https://www.npmjs.com/package/react-focus-on */
  focusOnProps: any;
  /** Callback with boolean status as a single arg. */
  onScrolled?: (status: boolean) => void;
}
const ContentArea = React.forwardRef(
  (
    {
      className: classNameProp,
      children,
      focusOnProps,
      onScrolled,
      ...rest
    }: ContentAreaProps,
    ref?: React.Ref<HTMLDivElement>
  ) => {
    const slider = useRef<HTMLDivElement>(null);

    useEffect(() => {
      // TODO: remove listener on unmount...
      slider.current !== null &&
        slider.current.addEventListener("scroll", () => {
          if (slider.current !== null) {
            if (slider.current.scrollTop > 10) {
              onScrolled && onScrolled(true);
            } else if (slider.current.scrollTop < 100) {
              onScrolled && onScrolled(false);
            }
          }
        });
    }, [onScrolled]);

    return (
      <FocusOn
        className={st(classnames(classes.root, classNameProp), {})}
        ref={ref}
        {...rest}
        {...focusOnProps}
      >
        <div className={classnames(classes.scroll)} ref={slider}>
          {children}
        </div>
      </FocusOn>
    );
  }
);

ContentArea.displayName = "ContentArea";

export default ContentArea;
