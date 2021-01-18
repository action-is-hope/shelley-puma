import React from "react";
import classnames from "classnames";
import { st, classes } from "./previewActions.st.css";

import PreviewIcon from "../icons/Preview";
import PreviewOffIcon from "../icons/PreviewOff";
import ExpandIcon from "../icons/ExpandScreen";
import CompressIcon from "../icons/CompressScreen";

import { Button } from "@actionishope/shelley";

interface PreviewActionsProps extends React.HTMLAttributes<HTMLDivElement> {
  focusMode: boolean;
  refFocusButton: any;
  onFocusClick: (mode: boolean) => void;
  fullScreenMode: boolean;
  refFullScreenButton: any;
  onFullScreenClick: (mode: boolean) => void;
}
const PreviewActions = React.forwardRef(
  (
    {
      className: classNameProp,
      children,
      focusMode,
      refFocusButton,
      onFocusClick,
      fullScreenMode,
      refFullScreenButton,
      onFullScreenClick,
      ...rest
    }: PreviewActionsProps,
    ref?: React.Ref<HTMLDivElement>
  ) => {
    return (
      <div
        className={st(classnames(classes.root, classNameProp))}
        {...rest}
        ref={ref}
      >
        {children}

        <Button
          onClick={() => onFocusClick(!focusMode)}
          variant={2}
          vol={5}
          ref={refFocusButton}
          className={classes.toggleFocusButton}
          icon={
            focusMode ? (
              <PreviewOffIcon alt="Toggle preview on" />
            ) : (
              <PreviewIcon alt="Toggle preview off" />
            )
          }
        />
        <Button
          variant={2}
          vol={5}
          ref={refFullScreenButton}
          className={classes.toggleFullScreenButton}
          onClick={() => onFullScreenClick(!fullScreenMode)}
          icon={
            !fullScreenMode ? (
              <ExpandIcon alt="Toggle full screen on" />
            ) : (
              <CompressIcon alt="Toggle full screen off" />
            )
          }
        />
      </div>
    );
  }
);

PreviewActions.displayName = "PreviewActions";

export default PreviewActions;
