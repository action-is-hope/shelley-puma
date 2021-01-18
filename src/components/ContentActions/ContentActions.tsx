import React from "react";
import classnames from "classnames";
import { st, classes } from "./contentActions.st.css";

const ContentActions = React.forwardRef(
  (
    {
      className: classNameProp,
      children,
      ...rest
    }: React.HTMLAttributes<HTMLDivElement>,
    ref?: React.Ref<HTMLDivElement>
  ) => {
    return (
      <div
        className={st(classnames(classes.root, classNameProp))}
        {...rest}
        ref={ref}
      >
        {children}
      </div>
    );
  }
);

ContentActions.displayName = "ContentActions";

export default ContentActions;
