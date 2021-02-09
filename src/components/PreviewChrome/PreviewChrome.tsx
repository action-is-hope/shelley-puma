import React from "react";
import classnames from "classnames";
import { st, classes } from "./previewChrome.st.css";

export interface PreviewChromeProps
  extends React.HTMLAttributes<HTMLDivElement> {
  previewMode?: number;
  fullScreenMode?: boolean;
}

const PreviewChrome = React.forwardRef(
  (
    {
      className: classNameProp,
      children,
      fullScreenMode = false,
      previewMode = 1,
      ...rest
    }: PreviewChromeProps,
    ref?: React.Ref<HTMLDivElement>
  ) => {
    return (
      <div
        className={st(classnames(classes.root, classNameProp), {
          previewMode,
          fullScreenMode
        })}
        ref={ref}
        {...rest}
      >
        <div className={classes.chrome}>{children}</div>
      </div>
    );
  }
);

PreviewChrome.displayName = "PreviewChrome";

export default PreviewChrome;
