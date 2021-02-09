import React from "react";
import classnames from "classnames";
import { st, classes } from "./finderLayout.st.css";

export interface FinderLayoutProps
  extends React.HTMLAttributes<HTMLDivElement> {
  gridMode?: string | false;
}
const FinderLayout = ({
  className: classNameProp,
  children,
  gridMode = false,
  ...rest
}: FinderLayoutProps) => {
  return (
    <div
      className={st(classnames(classes.root, classNameProp), { gridMode })}
      {...rest}
    >
      {children}
    </div>
  );
};

export default FinderLayout;
