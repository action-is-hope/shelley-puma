import React from "react";
import classnames from "classnames";
import { st, classes } from "./ReferenceComp.st.css";

import { Grid, GridProps, Text } from "@actionishope/shelley";
import { classes as grid } from "@actionishope/shelley/styles/default/grid.st.css";

interface ReferenceCompProps extends React.HTMLAttributes<HTMLDivElement> {
  gridMode: "default" | "previewFullScreen";
}
const ReferenceComp = React.forwardRef(
  (
    {
      className: classNameProp,
      children,
      gridMode = "default",
      ...rest
    }: ReferenceCompProps,
    ref?: React.Ref<HTMLDivElement>
  ) => {
    return (
      <div
        className={st(classnames(classes.root, classNameProp), { gridMode })}
        {...rest}
        ref={ref}
      >
        {children}
      </div>
    );
  }
);

ReferenceComp.displayName = "ReferenceComp";

export default ReferenceComp;
