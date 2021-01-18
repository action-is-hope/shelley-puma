import React, { useState } from "react";
import classnames from "classnames";

import { st, classes } from "./previewModes.st.css";

import { InputSelection, Icon } from "@actionishope/shelley";

interface PreviewModesProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Callback with modeIndex as a single arg. */
  onModeChange: (modeIndex: number) => void;
  previewMode: number;
}
const PreviewModes = React.forwardRef(
  (
    {
      className: classNameProp,
      children,
      onModeChange,
      previewMode,
      ...rest
    }: PreviewModesProps,
    ref?: React.Ref<HTMLDivElement>
  ) => {
    return (
      <div
        className={st(classnames(classes.root, classNameProp))}
        {...rest}
        ref={ref}
      >
        <InputSelection
          id="web"
          inputPos="bottom"
          className={classes.radio}
          checked={previewMode === 1}
          onClick={() => onModeChange(1)}
          name="viewPort"
          label={
            <Icon
              alt="On the web"
              style={{ fontSize: "1.6em", marginTop: "-8px" }}
            >
              <g id="connect-o">
                <path d="M12.5 9c-1 0-1.8 0.4-2.4 1l-3.2-1.7c0.1-0.3 0.1-0.5 0.1-0.8 0-0.2 0-0.3 0-0.4l2.9-1.3c0.6 0.7 1.5 1.2 2.6 1.2 1.9 0 3.5-1.6 3.5-3.5s-1.6-3.5-3.5-3.5-3.5 1.6-3.5 3.5c0 0.2 0 0.3 0 0.4l-2.9 1.3c-0.6-0.7-1.5-1.2-2.6-1.2-1.9 0-3.5 1.6-3.5 3.5s1.6 3.5 3.5 3.5c1 0 1.8-0.4 2.4-1l3.1 1.7c0 0.3 0 0.5 0 0.8 0 1.9 1.6 3.5 3.5 3.5s3.5-1.6 3.5-3.5-1.6-3.5-3.5-3.5zM12.5 1c1.4 0 2.5 1.1 2.5 2.5s-1.1 2.5-2.5 2.5-2.5-1.1-2.5-2.5c0-1.4 1.1-2.5 2.5-2.5zM3.5 10c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5c0 1.4-1.1 2.5-2.5 2.5zM12.5 15c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5c0 1.4-1.1 2.5-2.5 2.5z"></path>
              </g>
            </Icon>
          }
          type="radio"
          vol={1}
        />
        <InputSelection
          id="laptop"
          inputPos="bottom"
          className={classes.radio}
          checked={previewMode === 2}
          onClick={() => onModeChange(2)}
          name="viewPort"
          label={
            <Icon alt="Laptop">
              {/* laptop */}
              <path d="M14 11v-9h-12v9h-2v2h16v-2h-2zM10 12h-4v-1h4v1zM13 10h-10v-7h10v7z"></path>
            </Icon>
          }
          type="radio"
          vol={1}
        />
        <InputSelection
          id="tablet"
          inputPos="bottom"
          className={classes.radio}
          checked={previewMode === 3}
          onClick={() => onModeChange(3)}
          name="viewPort"
          label={
            <Icon alt="Tablet">
              {/* tablet.svg */}
              <path d="M0 2v12h16v-12h-16zM13 13h-11v-10h11v10zM15 9h-1v-2h1v2z"></path>
            </Icon>
          }
          type="radio"
          vol={1}
        />
        <InputSelection
          id="mobile"
          inputPos="bottom"
          className={classes.radio}
          checked={previewMode === 4}
          onClick={() => onModeChange(4)}
          name="viewPort"
          label={
            <Icon alt="Mobile">
              {/* mobile */}
              <path d="M4 1v14h8v-14h-8zM9 14h-2v-1h2v1zM11 12h-6v-9h6v9z"></path>
            </Icon>
          }
          type="radio"
          vol={1}
        />

        {children}
      </div>
    );
  }
);

PreviewModes.displayName = "PreviewModes";

export default PreviewModes;
