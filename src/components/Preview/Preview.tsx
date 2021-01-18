import React from "react";
import classnames from "classnames";
import PreviewModes from "../PreviewModes/PreviewModes";
import { FocusOn } from "react-focus-on";

import { st, classes } from "./preview.st.css";

interface PreviewProps extends React.HTMLAttributes<HTMLDivElement> {
  /** See https://www.npmjs.com/package/react-focus-on */
  focusOnProps: any;
  /** Set the preview mode. */
  previewMode: number;
  /** A ref pointing to the PreviewMode component, used for FocusOn isolation. */
  previewModesRef: React.Ref<HTMLDivElement>;
  /** Callback with modeIndex as a single arg. */
  onModeChange: (modeIndex: number) => void;
}
const Preview = React.forwardRef(
  (
    {
      className: classNameProp,
      children,
      focusOnProps,
      previewMode = 1,
      onModeChange,
      previewModesRef,
      ...rest
    }: PreviewProps,
    ref?: React.Ref<HTMLDivElement>
  ) => {
    return (
      <FocusOn
        className={st(classnames(classes.root, classNameProp), {})}
        ref={ref}
        {...rest}
        {...focusOnProps}
      >
        <PreviewModes
          className={classes.previewModes}
          onModeChange={onModeChange}
          previewMode={previewMode}
          ref={previewModesRef}
        />
        {children}
      </FocusOn>
    );
  }
);

Preview.displayName = "Preview";

export default Preview;
